
import { Tarea } from "../models/Tarea.js";
import { esPrioridadAlta, estaVencida } from "./predicadosTarea.js";


// Retorna un array con las tareas de prioridad alta
export const tareasPrioridadAlta = (lista: Tarea[]): Tarea[] =>
  lista.filter(esPrioridadAlta);


//Retorna un array con las tareas vencidas
export const tareasVencidas = (lista: Tarea[]): Tarea[] =>
  lista.filter(estaVencida);
