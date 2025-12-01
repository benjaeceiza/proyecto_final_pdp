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

            //Ver todas las tareas
            titulo = "Todas las tareas";
            listaFiltrada = db.tareas.getAll();
            break;

        case 2:

            //Ver tareas pendientes         
            titulo = "Pendientes";
            listaFiltrada = db.tareas.filtrarByEstado("Pendiente");
            break;

        case 3:

            //Ver tareas en curso
            titulo = "En curso";
            listaFiltrada = db.tareas.filtrarByEstado("En curso");
            break;

        case 4:

            //Ver tareas terminadas
            titulo = "Terminadas";
            listaFiltrada = db.tareas.filtrarByEstado("Terminada");
            break;

        case 5:

            //Ver tareas canceladas
            titulo = "Canceladas";
            listaFiltrada = db.tareas.filtrarByEstado("Cancelada");
            break;

        case 0:

            //Menu principal
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

    //Si no hay tareas para mostrar
    if (listaFiltrada.length === 0) {
        console.log("(No hay tareas para mostrar)");
        await pulsar();
        return;
    } else {

        //Imprimimos la lista de tareas
        console.log(db.tareas.toString(listaFiltrada));

    }



    console.log("\n=======================================================");
    console.log("Ingresa el numero de la tarea para ver su informacion!");
    console.log("Ingresa 0 para volver.");


    // Donde se guarda la posicion de la tarea que el usuario eligio.
    const tareaElegida: number = parseInt(await input(`> `));


    // Control
    if (tareaElegida > listaFiltrada.length || tareaElegida < 0 || isNaN(tareaElegida)) {
        console.log("\n========================================");
        console.log(`            Opcion invalida   `);
        console.log("========================================\n");
        await pulsar();
        return;
    }
    
    // Si es 0 volvemos menu principal
    if (tareaElegida == 0) {
        return;
    }
      
    //Vista del detalle de la tarea.
    await detalleTarea(tareaElegida, listaFiltrada, db);

}
