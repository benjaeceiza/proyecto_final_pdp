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

    //Se filtra la lista de tareas por el titulo que ingreso el usuario
    const tareasEncontradas: Tarea[] = db.tareas.filtrarTareaPorTitulo(tareaBuscada);

    //Controla si se encontro la tarea o no.
    if (tareasEncontradas.length == 0) {
        console.log("\n========================================");
        console.log(`            Titulo invalido   `);
        console.log("========================================\n");
        await pulsar();
        return;
    }


    //Si la encuentra
    console.clear();
    console.log("\n========================================");
    console.log(`           Tareas encontradas: `);
    console.log("========================================\n");

    //Se muestra el listado de tareas encontradas
    console.log(db.tareas.toString(tareasEncontradas));

    //Se pregutna si quiere ver el detalle
    console.log("\n=======================================================");
    console.log("Ingresa el numero de la tarea para ver su informacion!");
    console.log("Ingresa 0 para volver.");


    const tareaElegida: number = parseInt(await input(`> `));

    //Controla que haya ingresado un valor valido
    if (tareaElegida > tareasEncontradas.length || tareaElegida < 0 || isNaN(tareaElegida)) {
        console.log("\n========================================");
        console.log(`            Opcion invalida   `);
        console.log("========================================\n");
        await pulsar();
        return;
    }

    //si el valor es 0, se vuelve al menu principal
    if (tareaElegida == 0) {
        return;
    }
  
    //vista de detalle de la tarea
    await detalleTarea(tareaElegida, tareasEncontradas,db);


}