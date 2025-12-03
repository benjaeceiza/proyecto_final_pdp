

/**
 * Valida que el titulo que ingreso no sea nulo
 * @param {string} titulo - Titulo de la tarea 
 * @returns {string} 
 */

export function validarTitulo(titulo: string): string {

    if (titulo.trim() === "") {
        return "Sin titulo";
    }

    return titulo;
}

/**
 * Valida si el usuario cambio, borro o mantuvo el titulo de la tarea.
 * @param {string} titulo - Titulo nuevo de la tarea 
 * @param {string} tituloOriginal - Titulo anteriror de la tarea 
 * @returns {string} 
 */

export function validarTituloEdicion(titulo: string, tituloOriginal:string): string {

    if (titulo === "") {
        return tituloOriginal;
    }
    if (titulo === " ") {
        return "Sin titulo";
    }

    return titulo;
}


/**
 * Valida que la descripcion que ingreso no sea nula
 * @param {string} descripcion - Titulo de la tarea 
 * @returns {string} 
 */

export function validarDescripcion(descripcion: string): string {

    if (descripcion.trim() === "") {
        return "Sin descripción";
    }

    return descripcion;
}

/**
 * Valida si el usuario cambio, borro o mantuvo la descripcion de la tarea.
 * @param {string} descripcion - descripcion nueva de la tarea 
 * @param {string} descripcionOriginal - descripcion anterior de la tarea 
 * @returns {string} 
 */

export function validarDescripcionEdicion(descripcion: string, descripcionOriginal:string): string {

    if (descripcion === "") {
        return descripcionOriginal;
    }
    if (descripcion === " ") {
        return "Sin descripción";
    }

    return descripcion;
}


/**
 * Valida que el valor ingresado sea un valor valido
 * @param {number} estado - valor del estado de  la tarea 
 * @returns {string} 
 */

export function validarEstado(estado: number):string {
   
 if(estado == 1) return "Pendiente";
 if(estado == 2) return "En Curso";
 if(estado == 3) return "Terminada";
 if(estado == 4) return "Cancelada";

 console.log("Opcion invalida, Valor asignado: PENDIENTE\n");
 
 return "Pendiente"
}


/**
 * Valida si el usuario cambio, borro o mantuvo el estado de la tarea.
 * @param {string} estado - estado nuevo de la tarea 
 * @param {string} estadoOriginal - estado anterior de la tarea 
 * @returns {string} 
 */
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

/**
 * Valida que el valor ingresado sea un valor valido
 * @param {number} dificultad - valor de la dificultad de  la tarea 
 * @returns {string} 
 */

export function validarDificultad(dificultad: number):string {
   
 if(dificultad == 1) return "⭐";
 if(dificultad == 2) return "⭐⭐";
 if(dificultad == 3) return "⭐⭐⭐";
 console.log("Opcion invalida, Valor asignado: ⭐\n");
 return "⭐"
}

/**
 * Valida si el usuario cambio, borro o mantuvo la dificultad de la tarea.
 * @param {string} dificultad - dificultad nueva de la tarea 
 * @param {string} dificultadOriginal - dificultad anterior de la tarea 
 * @returns {string} 
 */

export function validarDificultadEdicion(dificultad: string, dificultadOriginal:string):string {
   
 if(dificultad == "") return dificultadOriginal;
 if(dificultad == " ") return "⭐";
 if(dificultad == "1") return "⭐";
 if(dificultad == "2") return "⭐⭐";
 if(dificultad == "3") return "⭐⭐⭐";
 
 console.log("Opcion invalida\n");
 return dificultadOriginal;
}

/**
 * Valida que el valor ingresado sea un valor valido
 * @param {string} prioridad - valor de la prioridad de  la tarea 
 * @returns {string} 
 */

export function validarPrioridad(prioridad: string):string {
   
 if(prioridad.trim() == "") return "Baja";

 if(prioridad == "1") return "Baja";
 if(prioridad == "2") return "Media";
 if(prioridad == "3") return "Alta";
 
 console.log("Opcion invalida, Valor asignado: Baja\n");
 return "⭐"
}

/**
 * Valida si el usuario cambio, borro o mantuvo la prioridad de la tarea.
 * @param {string} prioridad - prioridad nueva de la tarea 
 * @param {string} prioridadOriginal - prioridad anterior de la tarea 
 * @returns {string} 
 */
export function validarPrioridadEditar(prioridad: string, prioridadOriginal:string):string {
   
 if(prioridad == "") return prioridadOriginal;
 if(prioridad == " ") return "Baja";

 if(prioridad == "1") return "Baja";
 if(prioridad == "2") return "Media";
 if(prioridad == "3") return "Alta";
 
 console.log("Opcion invalida\n");
 return prioridadOriginal;
}

/**
 * Crea una nueva fecha de vencimiento 
 * @returns {Date}
 */

export function crearVencimiento():Date{
    
    const vencimiento: Date = new Date();
    const diaActual = vencimiento.getDate();
    const nuevoDia = diaActual + 10;
    vencimiento.setDate(nuevoDia);

    return vencimiento;
}