import { Database } from "./database/Database.js";
import { Tarea } from "./models/Tarea.js";
import { input } from "./utils/readline.js";
import { pulsar } from "./utils/tecla.js";
import { crearVencimiento, validarDescripcion, validarDificultad, validarEstado, validarPrioridad, validarTitulo } from "./utils/validaciones.js";

export async function agregarTarea(db: Database) {

    console.clear();
    console.log("\n========================================");
    console.log(`       Estás agregando una tarea   `);
    console.log("========================================\n");
    

    const tituloPrev: string = await input(`Titulo: `);
    const titulo = validarTitulo(tituloPrev);


    const descripcionPrev: string = await input(`Descripción: `);
    const descripcion = validarDescripcion(descripcionPrev);


    const estadoPrev: string = await input(`Estado: [1] Pendiente [2] En Curso [3] Terminada [4] Cancelada\n`);
    const estado = validarEstado(parseInt(estadoPrev));


    const dificultadPrev: string = await input(`Dificultad: [1] Facil [2] Intermedia [3] Dificil\n`);
    const dificultad = validarDificultad(parseInt(dificultadPrev));

    const prioridadPrev: string = await input(`Prioridad: [1] Baja [2] Media [3] Aata\n`);
    const prioridad = validarPrioridad(prioridadPrev);

    const creacion: Date = new Date();

    const ultimaEdicion: Date = new Date();

    const vencimiento: Date = crearVencimiento();



    const nuevaTarea: Tarea = new Tarea("", titulo, descripcion, estado, creacion, ultimaEdicion, vencimiento, dificultad, true,prioridad);

    db.tareas.agregarTarea(nuevaTarea);


    console.log("\n========================================");
    console.log(`         Tarea agregada con exito! `);
    console.log("========================================\n");




    await pulsar();
}