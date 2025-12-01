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
        await verTareas(db);
        break;
      case 2:

        await buscarTarea(db);
        break;

      case 3:
        await agregarTarea(db);
        break;

      case 4:

        await eliminarTarea(db);
        break;
      case 5:

        await estadisticas(db);
        break;
      case 6:

        await consultasLogicas(db);
        break;

      case 0:
        console.log("\n========================================");
        console.log(`            Vuelva pronto!   `);
        console.log("========================================\n");
        await pulsar();
        closeInput();
        break;

      default:

        console.log("\n========================================");
        console.log(`            Opcion invalida   `);
        console.log("========================================\n");
        await pulsar();
        break;
    }

  }



}

main();
