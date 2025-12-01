
export class Tarea {
    constructor(
        public id: string,
        public titulo: string,
        public descripcion: string,
        public estado: string,
        public creacion: Date = new Date(),
        public ultimaEdicion: Date = new Date(),
        public vencimiento: Date,
        public dificultad: string,
        public isActiva: boolean ,
        public prioridad: string,
    ) { }

    
    toString(): string {
        return "\n================================"+
        "\nTarea: "+this.titulo+
        "\nDescripcion: "+this.descripcion +
        "\nEstado: " + this.estado +
        "\nDificultad: " + this.dificultad +
        "\nPrioridad: " + this.prioridad+
        "\nCreacion: " + this.creacion.toLocaleDateString() +
        "\nVencimiento: " + this.vencimiento.toLocaleDateString()
    }
}