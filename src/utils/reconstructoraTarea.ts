
import { Tarea } from "../models/Tarea.js";

export function reconstruirTarea(data: any): Tarea {
    return new Tarea(
        data.id,
        data.titulo ?? "Sin titulo",
        data.descripcion ??"Sin descupción",
        data.estado ?? "Pendiente",
        data.creacion ? data.creacion.toDate() : new Date(),
        data.ultimaEdicion ? data.ultimaEdicion.toDate() : new Date(),
        data.vencimiento ? data.vencimiento.toDate() : new Date(),
        data.dificultad ?? "⭐",
        data.isActiva,
        data.prioridad ?? "Baja"
    );
}
