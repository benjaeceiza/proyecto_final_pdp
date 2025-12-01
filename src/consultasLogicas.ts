import { Database } from "./database/Database.js";
import { detalleTarea } from "./detalleTarea.js";
import { tareasPrioridadAlta, tareasVencidas } from "./logic/consultasTarea.js";
import { Tarea } from "./models/Tarea.js";
import { input } from "./utils/readline.js";
import { pulsar } from "./utils/tecla.js";

export async function consultasLogicas(db: Database) {

    console.clear();
    console.log("\n==============================================");
    console.log("          Que consulta desea realizar?");
    console.log("==============================================\n");
    console.log(`[1] Tareas de prioridad alta\n[2] Tareas vencidas\n[0] Volver`);
    let opcion = parseInt(await input(`> `));

    while (opcion != 0) {

        switch (opcion) {
            case 1:

                // Muestra un listado de tareas de alta prioridad
                console.clear()
                console.log("\n==============================================");
                console.log("          Tareas de prioridad: ALTA");
                console.log("==============================================\n");

                //Calcula el listado de tareas de alta prioridad y se guarda en una variable
                const tareasPrioridad: Tarea[] = tareasPrioridadAlta(db.tareas.getAll());

                //Controla si la lista viene vacia
                if (tareasPrioridad.length == 0) {
                    console.log("No hay tareas");
                    await pulsar();
                    return;
                }

                //Imprime el listado de tareas
                console.log(db.tareas.toString(tareasPrioridad));

                //Se Pregunta al usuario si quiere ver la informacionde alguna tarea
                console.log("\n=======================================================");
                console.log("Ingresa el numero de la tarea para ver su informacion!");
                console.log("Ingresa 0 para volver.");


                const tareaElegida: number = parseInt(await input(`> `));

                //Controla que el usuario haya agregado un valor valido. 
                if (tareaElegida > tareasPrioridad.length || tareaElegida < 0 || isNaN(tareaElegida)) {
                    console.log("\n========================================");
                    console.log(`            Opcion invalida   `);
                    console.log("========================================\n");
                    await pulsar();
                    return;
                }

                // si el valor es 0, se vuelve al menu principal
                if (tareaElegida == 0) {
                    return;
                }

                // Vista del detalle de una tarea
                await detalleTarea(tareaElegida, tareasPrioridad, db);
                return;
            case 2:
                //Muestra el listado de las tareas vencidas
                console.clear()
                console.log("\n==============================================");
                console.log("               Tareas Vencidas");
                console.log("==============================================\n");

                //Genera una lista de las tareas vencidas
                const listaVencidas: Tarea[] = tareasVencidas(db.tareas.getAll());

                //Controla si la lsita viene vacia
                if (listaVencidas.length == 0) {
                    console.log("No hay tareas vencidas");
                    await pulsar();
                    return;


                }

                //Muestra el listado de tareas
                console.log(db.tareas.toString(listaVencidas));


                //Se Pregunta al usuario si quiere ver la informacionde alguna tarea
                console.log("\n=======================================================");
                console.log("Ingresa el numero de la tarea para ver su informacion!");
                console.log("Ingresa 0 para volver.");


                const tareaElegidaVencida: number = parseInt(await input(`> `));

                //Controla que el usuario haya agregado un valor valido. 
                if (tareaElegidaVencida > listaVencidas.length || tareaElegidaVencida < 0 || isNaN(tareaElegidaVencida)) {
                    console.log("\n========================================");
                    console.log(`            Opcion invalida   `);
                    console.log("========================================\n");
                    await pulsar();
                    return;
                }

                // si el valor es 0, se vuelve al menu principal

                if (tareaElegidaVencida == 0) {
                    return;
                }
                // Vista del detalle de una tarea
                await detalleTarea(tareaElegidaVencida, listaVencidas, db);
                return;


            case 0:
                break;
            default:
                console.log("Opcion invalida");
                await pulsar();
                break;

        }



    }


}