import { Database } from "./database/Database.js";
import { editarTarea } from "./editarTarea.js";
import { Tarea } from "./models/Tarea.js";
import { input } from "./utils/readline.js";

export async function detalleTarea(tareaElegida: number, listaFiltrada: Tarea[], db:Database) {

    console.clear()

    //llamamos a la funcion toString que convierte la tarea en un string
    console.log(listaFiltrada[tareaElegida - 1].toString());


    // Consulta al usuario si quiere editar la tarea
    console.log("\n======================================");
    console.log("Se deseas editar la tarea ingresa E");
    console.log("Para volver ingresa 0");

    let opcion: string = await input(`> `);

    //Control
    while (opcion.toLocaleUpperCase() != "E" && parseInt(opcion) != 0) {
        console.log("\n========================================");
        console.log(`            Opcion invalida   `);
        console.log("========================================\n");
        opcion = await input(`> `);
    }
 
    // Si opcion es 0, volvemos al menu principal
    if(parseInt(opcion) == 0){
        return;
    }

    // Vista para editar tarea
    await editarTarea(listaFiltrada[tareaElegida - 1],db);

}