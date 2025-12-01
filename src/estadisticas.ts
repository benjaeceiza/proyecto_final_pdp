import { Database } from "./database/Database.js";
import { input } from "./utils/readline.js";
import { pulsar } from "./utils/tecla.js";

export async function estadisticas(db: Database) {

    console.clear();
    console.log("\n==============================================");
    console.log("               Estadisticas");
    console.log("==============================================\n");


    //Calcula el numero total de tareas
    const totalTareas: number = db.tareas.totalTareas();
    console.log(`Total de tareas activas: ${totalTareas}\n`);

    //Obtiene todas las tareas
    const tareas = db.tareas.getAll();

    //Calcula la cantidad de tareas por estado, retorna un objeto plano con cada categoria.
    const estados = db.tareas.totalTareasPorEstado(tareas);

    //Calcula la cantidad de tareas por dificultad. retorna un objeto plano con cada categoria.
    const dificultades = db.tareas.totalTareasPorDificultad(tareas);


    console.log("Por estado:".padEnd(35) + "Por dificultad:\n");

    //Muestra la cantidad de tareas Pendientes y Faciles con su porcentaje
    console.log(
        `• Pendientes: ${estados.pendientes} (${db.tareas.porcentajeTarea(estados.pendientes, totalTareas)})`
            .padEnd(35) +
        `• Faciles: ${dificultades.facil} (${db.tareas.porcentajeTarea(dificultades.facil, totalTareas)})`
    );

    //Muestra la cantidad de tareas En curso e Intermedias con su porcentaje
    console.log(
        `• En curso: ${estados.enCurso} (${db.tareas.porcentajeTarea(estados.enCurso, totalTareas)})`
            .padEnd(35) +
        `• Intermedias: ${dificultades.intermedia} (${db.tareas.porcentajeTarea(dificultades.intermedia, totalTareas)})`
    );

    //Muestra la cantidad de tareas Terminadas y Dificiles con su porcentaje
    console.log(
        `• Terminadas: ${estados.terminadas} (${db.tareas.porcentajeTarea(estados.terminadas, totalTareas)})`
            .padEnd(35) +
        `• Dificiles: ${dificultades.dificil} (${db.tareas.porcentajeTarea(dificultades.dificil, totalTareas)})`
    );

    //Muestra la cantidad de tareas Canceladas con su porcentajes
    console.log(
        `• Canceladas: ${estados.canceladas} (${db.tareas.porcentajeTarea(estados.canceladas, totalTareas)})`
            .padEnd(35)
    );


    await pulsar();



}