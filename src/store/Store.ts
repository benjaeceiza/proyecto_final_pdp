
import { borrarTarea, editarTarea, insertarTarea, obtenerTareasActivas } from "../database/firestore.js";
import { tareasPrioridadAlta, tareasVencidas } from "../logic/consultasTarea.js";
import { Tarea } from "../models/Tarea.js";

export class Store {

    private items: Tarea[] = [];


    /**
     * Crea una instancia de Store
     * @param this.cargarTareas - carga el listado de tareas. 
     */

    constructor() {
        this.cargarTareas();
    }


    /**
     * Carga las tareas traidas desde la base de datos.
     */

    public async cargarTareas(): Promise<void> {
        this.items = await obtenerTareasActivas();
    };


    /**
     * Agregar una tarea 
     * @param {Tarea} tarea - Tarea que se va a agregar.
     * @returns {boolean} - TRUE si se agrego, FALSE si no se agrego.
     */

    public async agregarTarea(tarea: Tarea): Promise<boolean> {
        const id = await insertarTarea(tarea);

        if (!id) {
            return false;
        }

        tarea.id = id;
        this.items.push(tarea);

        return true;
    }


    /**
     * Eliminar una tarea (soft delete)
     * @param {string} id - Id de la tarea a eliminar
     * @returns {boolean} - TRUE si se elimino la tarea, FALSE si no se elimino. 
     */

    public async eliminarTarea(id: string): Promise<boolean> {

        const isDelete: boolean = await borrarTarea(id);

        //Si se elimina la tarea, volvemos a cargar el listado.
        if (isDelete) {
            this.items = await obtenerTareasActivas();
        }

        return isDelete;
    }


    /**
     * Actualiza una tarea
     * @param {Tarea} tarea - Tarea a actualizar
     * @returns {boolean}
     */

    public async actualizarTarea(tarea: Tarea): Promise<boolean> {

        const isUpdated: boolean = await editarTarea(tarea);

        //Si se actuliza se vuelve a cargar el lista de tareas.
        if (isUpdated) {
            this.items = await obtenerTareasActivas();
        }

        return isUpdated;
    }



    /**
     * Retorna todas las tareas cargadas
     * @returns {Tarea[]} 
     */

    public getAll(): Tarea[] {
        return this.items;
    }


    /**
     * Filtra el listado de tareas por estado.
     * @param {string} estado - estado de la tarea
     * @returns {Tarea[]} 
     */

    public filtrarByEstado(estado: string): Tarea[] {

        const arrayFiltrado: Tarea[] = this.items.filter(tarea => tarea.estado == estado);
        return arrayFiltrado;
    }


    /**
     * Filtra el listado de tareas por el titulo.
     * @param {string} titulo - titulo de la tarea
     * @returns {Tarea[]}
     */

    public filtrarTareaPorTitulo(titulo: string): Tarea[] {
        const tareaEncontrada: Tarea[] = this.items.filter(t => t.titulo.toLowerCase() == titulo.toLowerCase());
        return tareaEncontrada;
    }


    /**
     * Retorna un string con el listado de tareas
     * @param {Tarea[]} tareas - listado de tareas
     * @returns {string} - listado 
     */
    public toString(tareas: Tarea[]): string {

        return tareas
            .map((tarea, index) => `[${index + 1}] ${tarea.titulo}`)
            .join("\n");
    }


    /**
     * Calcula el total de tareas
     * @returns {number} - numero de tareas activas
     */
    public totalTareas(): number {
        return this.items.length;
    }


    /**
     * Calcula el total de tareas por estado
     * @param {Tarea[]} tareas - listado de tareas
     * @returns Un objeto con las cantidades de tarea por cada estado
     */

    public totalTareasPorEstado(tareas: Tarea[]): {pendientes: number, enCurso: number, terminadas: number, canceladas: number}
    {
        const pendientes: number = tareas.filter(t => t.estado === "Pendiente").length;
        const enCurso: number = tareas.filter(t => t.estado === "En Curso").length;
        const terminadas: number = tareas.filter(t => t.estado === "Terminada").length;
        const canceladas: number = tareas.filter(t => t.estado === "Cancelada").length;

        return { pendientes, enCurso, terminadas, canceladas };
    }


    /**
    * Calcula el total de tareas por dificultad
    * @param {Tarea[]} tareas - listado de tareas
    * @returns Un objeto con las cantidades de tarea por cada dificultad
    */

    public totalTareasPorDificultad(tareas: Tarea[]) {
        const facil = tareas.filter(t => t.dificultad === "⭐").length;
        const intermedia = tareas.filter(t => t.dificultad === "⭐⭐").length;
        const dificil = tareas.filter(t => t.dificultad === "⭐⭐⭐").length;
        return { facil, intermedia, dificil };
    }


    /**
     * Calcula el porcentaje de tareas
     * @param {number} cant -  Cantidad de tareas seleccionadas
     * @param {number} total - Cantidad total de la lista de tareas
     * @returns 
     */

    public porcentajeTarea(cant: number, total: number): string {
        if (total === 0) return "0%";
        return ((cant / total) * 100) + "%";
    }


    /**
     * Obtiene una array con las tareas de prioridad alta
     * @returns {Tarea[]} Listado de tareas
     */

    public obtenerTareasPrioridadAlta(): Tarea[] {
        return tareasPrioridadAlta(this.items);
    }

    /**
     * Obtiene una array con las tareas vencidas
     * @returns {Tarea[]} Listado de tareas
     */

    public obtenerTareasVencidas(): Tarea[] {
        return tareasVencidas(this.items);
    }

}