import { Tarea } from "../models/Tarea.js";



export const esPrioridadAlta = (t: Tarea): boolean =>
  t.prioridad.toLowerCase() === "alta";




export const estaVencida = (t: Tarea): boolean => {
  const hoy = new Date();
  const fecha = t.vencimiento;

  
  return fecha < hoy;
};
