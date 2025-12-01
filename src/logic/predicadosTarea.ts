import { Tarea } from "../models/Tarea.js";


/**
 * Verifica si una tarea es de prioridad alta
 * @param {Tarea} t - Tarea
 * @returns {boolean}- TRUE si es de prioridad alta, FALSE si no lo es.
 */
export const esPrioridadAlta = (t: Tarea): boolean =>
  t.prioridad.toLowerCase() === "alta";


/**
 * Verifica si una tarea esta vencida o no
 * @param {Tarea} t  - tarea
 * @returns {boolean}- TRUE si esta vencida, FALSE si no esta vencida
 */
export const estaVencida = (t: Tarea): boolean => {
  const hoy = new Date();
  const fecha = t.vencimiento;


  return fecha < hoy;
};
