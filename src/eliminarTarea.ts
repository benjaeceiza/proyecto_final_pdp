import { Database } from "./database/Database.js";
import { Tarea } from "./models/Tarea.js";
import { input } from "./utils/readline.js";
import { pulsar } from "./utils/tecla.js";


export async function eliminarTarea(db: Database) {
    console.clear();
    console.log("\n========================================");
    console.log(`         Que tarea dese eliminar?`);
    console.log("========================================\n");


    //Obtiene todas las tareas
    const listaTareas: Tarea[] = db.tareas.getAll();

    //Verifica si la lista esta vacia
    if (listaTareas.length == 0) {
        console.log("\n========================================");
        console.log(`            No hay tareas `);
        console.log("========================================\n");
        await pulsar();
        return;
    }

    //Imprime el listado de tareas
    console.log(db.tareas.toString(listaTareas));
    console.log(`[0] Volver`);


    const tareaElegida: number = parseInt(await input(`> `));


    //Controla que se haya ingresado un valor valido.
    if (tareaElegida > listaTareas.length || tareaElegida < 0) {
        console.log("\n========================================");
        console.log(`            Opcion invalida   `);
        console.log("========================================\n");
        await pulsar();
        return;
    }

    //Si el valor es 0, vuelve al menu principal
    if (tareaElegida == 0) {
        return;
    }

    //Consulta si el usuario quiere realmente eliminar la tarea
    console.clear();
    console.log("\n========================================");
    console.log(`             Estas seguro?`);
    console.log("========================================\n");
    console.log(`[1] Eliminar [2] Cancelar`);
    const confirmar: number = parseInt(await input(`> `));


    //Se es 1 elimina la tarea
    if (confirmar == 1) {

        //Elimina la tarea y retorna un booleano si se realizo con exito o no.
        const eliminada:boolean = await db.tareas.eliminarTarea(listaTareas[tareaElegida - 1].id);

        if (eliminada) {
            console.clear();
            console.log("\n========================================");
            console.log(`        Tarea eliminada con exito!`);
            console.log("========================================\n");
            await pulsar();
            return;

        } else {
            console.clear();
            console.log("\n========================================");
            console.log(`        Error al eliminar la tarea`);
            console.log("========================================\n");
            await pulsar();

            return;

        }
    }


    await pulsar();

}



