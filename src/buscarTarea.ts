import { Database } from "./database/Database.js";
import { Tarea } from "./models/Tarea.js";
import { detalleTarea } from "./detalleTarea.js";
import { input } from "./utils/readline.js";
import { pulsar } from "./utils/tecla.js";

export async function buscarTarea(db: Database) {

    console.clear();
    console.log("\n========================================");
    console.log(`     Ingrese el titulo de la tarea`);
    console.log("========================================\n");

    const tareaBuscada: string = await input(`> `)

    const tareasEncontradas: Tarea[] = db.tareas.filtrarTareaPorTitulo(tareaBuscada);

    if (tareasEncontradas.length == 0) {
        console.log("\n========================================");
        console.log(`            Titulo invalido   `);
        console.log("========================================\n");
        await pulsar();
        return;
    }


    console.clear();
    console.log("\n========================================");
    console.log(`           Tareas encontradas: `);
    console.log("========================================\n");
    console.log(db.tareas.toString(tareasEncontradas));


    console.log("\n=======================================================");
    console.log("Ingresa el numero de la tarea para ver su informacion!");
    console.log("Ingresa 0 para volver.");


    const tareaElegida: number = parseInt(await input(`> `));


    if (tareaElegida > tareasEncontradas.length || tareaElegida < 0 || isNaN(tareaElegida)) {
        console.log("\n========================================");
        console.log(`            Opcion invalida   `);
        console.log("========================================\n");
        await pulsar();
        return;
    }

    if (tareaElegida == 0) {
        return;
    }

    await detalleTarea(tareaElegida, tareasEncontradas,db);


}