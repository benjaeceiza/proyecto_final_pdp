import { agregarTarea } from "./agregarTarea.js";
import { buscarTarea } from "./buscarTarea.js";
import { consultasLogicas } from "./consultasLogicas.js";
import { Database } from "./database/Database.js";
import { eliminarTarea } from "./eliminarTarea.js";
import { estadisticas } from "./estadisticas.js";
import { closeInput, input } from "./utils/readline.js";
import { pulsar } from "./utils/tecla.js";
import { verTareas } from "./verTareas.js";


async function main() {

  let menu: number = 1000;
  const db: Database = new Database();


  while (menu != 0) {

    console.clear();
    console.log("\n========================================");
    console.log("          Que desea hacer?");
    console.log("========================================\n");
    menu = parseInt(await input(`[1] Ver Mis Tareas.\n[2] Buscar una Tarea.\n[3] Agregar una Tarea.\n[4] Eliminar una Tarea.\n[5] Estadisticas.\n[6] Consulta.\n[0] Salir.\n> `));

    switch (menu) {
      case 1:

        //Opcion para ver tareas
        await verTareas(db);
        break;
      case 2:

        //Opcion para buscar una tarea
        await buscarTarea(db);
        break;

      case 3:
        //Opcion para agregar una tarea
        await agregarTarea(db);
        break;

      case 4:

        //Opcion para eliminar una tarea
        await eliminarTarea(db);
        break;
      case 5:

        //Opcion para ver estadisticas
        await estadisticas(db);
        break;
      case 6:

        //Opcion para consultas logicas
        await consultasLogicas(db);
        break;

      case 0:

        //Salir
        console.log("\n========================================");
        console.log(`            Vuelva pronto!   `);
        console.log("========================================\n");
        await pulsar();
        break;
        
        default:
          
          console.log("\n========================================");
          console.log(`            Opcion invalida   `);
          console.log("========================================\n");
          await pulsar();
          break;
        }
        
      }
      
      closeInput();


}

main();
