
/**
 * Representa una tarea generica
 * @class
 */

export class Tarea {

    /**
     * Crea una instancia de tarea
     * @param {string}  id - Id de la tarea.
     * @param {titulo} titulo - Titulo de la tarea.
     * @param {string} descripcion - Descripcion de la tarea.
     * @param {string} estado - Estado de la tarea.
     * @param {Date}  creacion - Fecha de creacion de la tarea.
     * @param {Date} ultimaEdicion - Fecha de cuando fue editada por ultima vez la tarea.
     * @param {Date} vencimiento - Fecha de vencimineto de la tarea.
     * @param {string} dificultad - Dificultad de la tarea.
     * @param {boolean} isActiva - Indica si esta activa o no la tarea.
     * @param {string} prioridad - Guarda el tipo de prioridad de la tarea.
     */
    constructor(
        public id: string,
        public titulo: string,
        public descripcion: string,
        public estado: string,
        public creacion: Date = new Date(),
        public ultimaEdicion: Date = new Date(),
        public vencimiento: Date,
        public dificultad: string,
        public isActiva: boolean,
        public prioridad: string,
    ) { }



    /**
     * Convierte una tarea en un string con sus caracteristicas.
     * @returns {string}
     */
    toString(): string {
        return "\n================================" +
            "\nTarea: " + this.titulo +
            "\nDescripcion: " + this.descripcion +
            "\nEstado: " + this.estado +
            "\nDificultad: " + this.dificultad +
            "\nPrioridad: " + this.prioridad +
            "\nCreacion: " + this.creacion.toLocaleDateString() +
            "\nVencimiento: " + this.vencimiento.toLocaleDateString()+
            "\nUltimaEdicion: " + this.ultimaEdicion.toLocaleDateString()
    }
}