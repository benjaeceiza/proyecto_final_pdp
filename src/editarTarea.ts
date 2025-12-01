import { pulsar } from "./utils/tecla.js";
import { Tarea } from "./models/Tarea.js";
import { input } from "./utils/readline.js";
import { validarDescripcionEdicion, validarDificultadEdicion, validarEstadoEdicion, validarPrioridadEditar, validarTituloEdicion } from "./utils/validaciones.js";
import { Database } from "./database/Database.js";

export async function editarTarea(tarea: Tarea, db: Database) {

    console.clear();
    console.log("\n========================================");
    console.log(`      Estás editando: ${tarea.titulo}   `);
    console.log("========================================\n");
    console.log("Ingresa enter si quieres manter el valor\n");
    console.log("Ingresa espacio si quieres borrar el valor\n");


    const tituloPrev: string = await input(`Titulo: `);
    const titulo: string = validarTituloEdicion(tituloPrev, tarea.titulo);

    const descripcionPrev: string = await input(`Descripción: `);
    const descripcion: string = validarDescripcionEdicion(descripcionPrev, tarea.descripcion);


    const estadoPrev: string = await input(`Estado: [1] Pendiente [2] En Curso [3] Terminada [4] Cancelada\n`);
    const estado: string = validarEstadoEdicion(estadoPrev, tarea.estado);


    const dificultadPrev: string = await input(`Dificultad: [1] Facil [2] Intermedia [3] Dificil\n`);
    const dificultad: string = validarDificultadEdicion(dificultadPrev, tarea.dificultad);

    const prioridadPrev: string = await input(`Prioridad: [1] Baja [2] Media [3] Aata\n`);
    const prioridad = validarPrioridadEditar(prioridadPrev,tarea.prioridad);

    const ultimaEdicion: Date = new Date();

    const tareaEditada: Tarea = new Tarea(tarea.id, titulo, descripcion, estado, tarea.creacion, ultimaEdicion, tarea.vencimiento, dificultad, true,prioridad);


    const isUpdated: boolean = await db.tareas.actualizarTarea(tareaEditada);

    if (isUpdated) {
        console.clear();
        console.log("\n========================================");
        console.log(`         Tarea editada con exito!   `);
        console.log("========================================\n");
        await pulsar();
        return;
    } else {
        console.clear();
        console.log("\n========================================");
        console.log(`         Error al editar tarea!   `);
        console.log("========================================\n");
        await pulsar();
        return;
    }

}