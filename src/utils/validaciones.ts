
export function validarTitulo(titulo: string): string {

    if (titulo.trim() === "") {
        return "Sin titulo";
    }

    return titulo;
}

export function validarTituloEdicion(titulo: string, tituloOriginal:string): string {

    if (titulo === "") {
        return tituloOriginal;
    }
    if (titulo === " ") {
        return "Sin titulo";
    }

    return titulo;
}


export function validarDescripcion(descripcion: string): string {

    if (descripcion.trim() === "") {
        return "Sin descripción";
    }

    return descripcion;
}
export function validarDescripcionEdicion(descripcion: string, descripcionOriginal:string): string {

    if (descripcion === "") {
        return descripcionOriginal;
    }
    if (descripcion === " ") {
        return "Sin descripción";
    }

    return descripcion;
}

export function validarEstado(estado: number):string {
   
 if(estado == 1) return "Pendiente";
 if(estado == 2) return "En Curso";
 if(estado == 3) return "Terminada";
 if(estado == 4) return "Cancelada";

 console.log("Opcion invalida, Valor asignado: PENDIENTE\n");
 
 return "Pendiente"
}
export function validarEstadoEdicion(estado: string, estadoOriginal:string):string {
   
 if(estado == "") return estadoOriginal;
 if(estado == " ") return "Pendiente";
 if(estado == "1") return "Pendiente";
 if(estado == "2") return "En Curso";
 if(estado == "3") return "Terminada";
 if(estado == "4") return "Cancelada";

 console.log("Opcion invalida\n");
 return estadoOriginal;
}


export function validarDificultad(dificultad: number):string {
   
 if(dificultad == 1) return "⭐";
 if(dificultad == 2) return "⭐⭐";
 if(dificultad == 3) return "⭐⭐⭐";
 console.log("Opcion invalida, Valor asignado: ⭐\n");
 return "⭐"
}
export function validarDificultadEdicion(dificultad: string, dificultadOriginal:string):string {
   
 if(dificultad == "") return dificultadOriginal;
 if(dificultad == " ") return "⭐";
 if(dificultad == "1") return "⭐";
 if(dificultad == "2") return "⭐⭐";
 if(dificultad == "3") return "⭐⭐⭐";
 
 console.log("Opcion invalida\n");
 return dificultadOriginal;
}


export function validarPrioridad(prioridad: string):string {
   
 if(prioridad.trim() == "") return "Baja";

 if(prioridad == "1") return "Baja";
 if(prioridad == "2") return "Media";
 if(prioridad == "3") return "Alta";
 
 console.log("Opcion invalida, Valor asignado: Baja\n");
 return "⭐"
}

export function validarPrioridadEditar(prioridad: string, prioridadOriginal:string):string {
   
 if(prioridad == "") return prioridadOriginal;
 if(prioridad == " ") return "Baja";

 if(prioridad == "1") return "Baja";
 if(prioridad == "2") return "Media";
 if(prioridad == "3") return "Alta";
 
 console.log("Opcion invalida\n");
 return prioridadOriginal;
}






export function crearVencimiento():Date{
    
    const vencimiento: Date = new Date();
    const diaActual = vencimiento.getDate();
    const nuevoDia = diaActual + 10;
    vencimiento.setDate(nuevoDia);

    return vencimiento;
}