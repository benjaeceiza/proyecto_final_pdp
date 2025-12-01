import { Database } from "./database/Database.js";
import { input } from "./utils/readline.js";
import { pulsar } from "./utils/tecla.js";

export async function estadisticas(db: Database) {

    console.clear();
    console.log("\n==============================================");
    console.log("               Estadisticas");
    console.log("==============================================\n");


    const totalTareas: number = db.tareas.totalTareas();
    console.log(`Total de tareas activas: ${totalTareas}\n`);

    const tareas = db.tareas.getAll();
    
    const estados = db.tareas.totalTareasPorEstado(tareas);
    const dificultades = db.tareas.totalTareasPorDificultad(tareas);


    console.log("Por estado:".padEnd(35) + "Por dificultad:\n");

    console.log(
        `• Pendientes: ${estados.pendientes} (${db.tareas.porcentajeTarea(estados.pendientes, totalTareas)})`
            .padEnd(35) +
        `• Faciles: ${dificultades.facil} (${db.tareas.porcentajeTarea(dificultades.facil, totalTareas)})`
    );

    console.log(
        `• En curso: ${estados.enCurso} (${db.tareas.porcentajeTarea(estados.enCurso, totalTareas)})`
            .padEnd(35) +
        `• Intermedias: ${dificultades.intermedia} (${db.tareas.porcentajeTarea(dificultades.intermedia, totalTareas)})`
    );

    console.log(
        `• Terminadas: ${estados.terminadas} (${db.tareas.porcentajeTarea(estados.terminadas, totalTareas)})`
            .padEnd(35) +
        `• Dificiles: ${dificultades.dificil} (${db.tareas.porcentajeTarea(dificultades.dificil, totalTareas)})`
    );

    console.log(
        `• Canceladas: ${estados.canceladas} (${db.tareas.porcentajeTarea(estados.canceladas, totalTareas)})`
            .padEnd(35)
    );


    await pulsar();



}