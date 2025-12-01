import { Database } from "./database/Database.js";
import { Tarea } from "./models/Tarea.js";
import { input } from "./utils/readline.js";
import { pulsar } from "./utils/tecla.js";


export async function eliminarTarea(db: Database) {
    console.clear();
    console.log("\n========================================");
    console.log(`         Que tarea dese eliminar?`);
    console.log("========================================\n");


    const listaTareas: Tarea[] = db.tareas.getAll();

    console.log(db.tareas.toString(listaTareas));
    console.log(`[0] Volver`);


    const tareaElegida: number = parseInt(await input(`> `));


    if (tareaElegida > listaTareas.length || tareaElegida < 0) {
        console.log("\n========================================");
        console.log(`            Opcion invalida   `);
        console.log("========================================\n");
        await pulsar();
        return;
    }


    if(tareaElegida == 0){
        return;
    }

    console.clear();
    console.log("\n========================================");
    console.log(`             Estas seguro?`);
    console.log("========================================\n");
    console.log(`[1] Eliminar [2] Cancelar`);
    const confirmar: number = parseInt(await input(`> `));

    if (confirmar == 1) {
        const eliminada = await db.tareas.eliminarTarea(listaTareas[tareaElegida - 1].id);

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
            console.log(`        Error al eliminar tarea`);
            console.log("========================================\n");
            await pulsar();

            return;

        }
    }


    await pulsar();

}



