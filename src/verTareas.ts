import { Database } from "./database/Database.js";
import { input } from "./utils/readline.js";
import { Tarea } from "./models/Tarea.js";
import { pulsar } from "./utils/tecla.js";
import { detalleTarea } from "./detalleTarea.js";

export async function verTareas(db: Database) {

    console.clear();
    console.log("\n========================================");
    console.log(`         Que tareas deseas ver? `);
    console.log("========================================\n");

    const opcionInput = await input(`[1] Todas\n[2] Pendientes\n[3] En curso\n[4] Terminadas\n[5] Canceladas\n[0] Volver\n> `);
    const opcion = parseInt(opcionInput);

    // Variables para guardar lo que elegimos en el switch
    let listaFiltrada: Tarea[] = [];
    let titulo = "";

    switch (opcion) {
        case 1:
            titulo = "Todas las tareas";
            listaFiltrada = db.tareas.getAll();
            break;

        case 2:
            titulo = "Pendientes";
            listaFiltrada = db.tareas.filtrarByEstado("Pendiente");
            break;

        case 3:
            titulo = "En curso";
            listaFiltrada = db.tareas.filtrarByEstado("En curso");
            break;

        case 4:
            titulo = "Terminadas";
            listaFiltrada = db.tareas.filtrarByEstado("Terminada");
            break;

        case 5:
            titulo = "Canceladas";
            listaFiltrada = db.tareas.filtrarByEstado("Cancelada");
            break;

        case 0:
            return;

        default:
            console.log("Opcion invalida");
            await pulsar();
            break;
    }


    console.clear();
    console.log("\n========================================");
    console.log(`     LISTADO: ${titulo}`);
    console.log("========================================\n");

    if (listaFiltrada.length === 0) {
        console.log("(No hay tareas para mostrar en esta lista)");
        await pulsar();
        return;
    } else {

        console.log(db.tareas.toString(listaFiltrada));

    }



    console.log("\n=======================================================");
    console.log("Ingresa el numero de la tarea para ver su informacion!");
    console.log("Ingresa 0 para volver.");


    const tareaElegida: number = parseInt(await input(`> `));


    if (tareaElegida > listaFiltrada.length || tareaElegida < 0 || isNaN(tareaElegida)) {
        console.log("\n========================================");
        console.log(`            Opcion invalida   `);
        console.log("========================================\n");
        await pulsar();
        return;
    }

    if (tareaElegida == 0) {
        return;
    }

    await detalleTarea(tareaElegida, listaFiltrada, db);

}
