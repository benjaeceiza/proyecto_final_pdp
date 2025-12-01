
import { Tarea } from "../models/Tarea.js";
import { esPrioridadAlta, estaVencida } from "./predicadosTarea.js";

export const tareasPrioridadAlta = (lista: Tarea[]): Tarea[] =>
  lista.filter(esPrioridadAlta);


export const tareasVencidas = (lista: Tarea[]): Tarea[] =>
  lista.filter(estaVencida);
