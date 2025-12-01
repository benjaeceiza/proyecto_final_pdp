
import { borrarTarea, editarTarea, insertarTarea, obtenerTareas, obtenerTareasActivas } from "../database/firestore.js";
import { tareasPrioridadAlta, tareasVencidas } from "../logic/consultasTarea.js";
import { Tarea } from "../models/Tarea.js";

export class Store {

    private nombre: string = "tareas";
    private items: Tarea[] = [];

    constructor() {
        this.cargarTareas();
    }


    //Carga las tareas
    public async cargarTareas(): Promise<void> {
        this.items = await obtenerTareasActivas();
    };


    //Agrega una tarea
    public async agregarTarea(tarea: Tarea): Promise<boolean> {
        const id = await insertarTarea(tarea);

        if (!id) {
            return false;
        }

        tarea.id = id;
        this.items.push(tarea);

        return true;
    }


    //Eliminar una tarea (soft delete)
    public async eliminarTarea(id: string): Promise<boolean> {

        const isDelete: boolean = await borrarTarea(id);

        if (isDelete) {
            this.items = await obtenerTareasActivas();
        }

        return isDelete;
    }

    //Actualiza una tarea editada
    public async actualizarTarea(tarea: Tarea): Promise<boolean> {

        const isUpdated: boolean = await editarTarea(tarea);

        if (isUpdated) {
            this.items = await obtenerTareasActivas();
        }

        return isUpdated;
    }


    //Retorna todas las tareas
    public getAll(): Tarea[] {
        return this.items;
    }


    // Filtra por el estado de la tarea y las retorna
    public filtrarByEstado(estado: string): Tarea[] {

        const arrayFiltrado: Tarea[] = this.items.filter(tarea => tarea.estado == estado);
        return arrayFiltrado;
    }


    // Filtra las tareas que coincidan con el titulo
    public filtrarTareaPorTitulo(titulo: string): Tarea[] {

        const tareaEncontrada: Tarea[] = this.items.filter(t => t.titulo.toLowerCase() == titulo.toLowerCase());
        return tareaEncontrada;
    }


    // Devuelve un string de la lista de tareas
    public toString(tareas: Tarea[]): string {

        return tareas
            .map((tarea, index) => `[${index + 1}] ${tarea.titulo}`)
            .join("\n");
    }

    // Total tareas
    public totalTareas(): number {
        return this.items.length;
    }

    //Total de tareas por estado
    public totalTareasPorEstado(tareas: Tarea[]) {
        const pendientes = tareas.filter(t => t.estado === "Pendiente").length;
        const enCurso = tareas.filter(t => t.estado === "En Curso").length;
        const terminadas = tareas.filter(t => t.estado === "Terminada").length;
        const canceladas = tareas.filter(t => t.estado === "Cancelada").length;

        return { pendientes, enCurso, terminadas, canceladas };
    }


    //Total de tareas por dificultad
    public totalTareasPorDificultad(tareas: Tarea[]) {
        const facil = tareas.filter(t => t.dificultad === "⭐").length;
        const intermedia = tareas.filter(t => t.dificultad === "⭐⭐").length;
        const dificil = tareas.filter(t => t.dificultad === "⭐⭐⭐").length;


        return { facil, intermedia, dificil };
    }

    //Porcentaje de tareas
    public porcentajeTarea(cant: number, total: number): string {
        if (total === 0) return "0%";
        return ((cant / total) * 100).toFixed(1) + "%";
    }


    //Obtener listado de tareas de prioridad alta       
    public obtenerTareasPrioridadAlta(): Tarea[] {
        return tareasPrioridadAlta(this.items);
    }

    //Obtener listado de tareas vencidas
    public obtenerTareasVencidas(): Tarea[] {
        return tareasVencidas(this.items);
    }

}