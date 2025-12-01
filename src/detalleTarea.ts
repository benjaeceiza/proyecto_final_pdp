import { Database } from "./database/Database.js";
import { editarTarea } from "./editarTarea.js";
import { Tarea } from "./models/Tarea.js";
import { input } from "./utils/readline.js";

export async function detalleTarea(tareaElegida: number, listaFiltrada: Tarea[], db:Database) {

    console.clear()
    console.log(listaFiltrada[tareaElegida - 1].toString());

    console.log("\n======================================");
    console.log("Se desas editar la tarea ingresa E");
    console.log("Para volver ingresa 0");

    let opcion: string = await input(`> `);

    while (opcion.toLocaleUpperCase() != "E" && parseInt(opcion) != 0) {
        console.log("\n========================================");
        console.log(`            Opcion invalida   `);
        console.log("========================================\n");
        opcion = await input(`> `);
    }
 
    if(parseInt(opcion) == 0){
        return;
    }

    await editarTarea(listaFiltrada[tareaElegida - 1],db);

}