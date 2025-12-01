import { Tarea } from "../models/Tarea.js";
import { reconstruirTarea } from "../utils/reconstructoraTarea.js";
import { db } from "./config.js";
import { collection, addDoc, getDocs, updateDoc, doc, query, where } from "firebase/firestore";



// Obtener solo tareas activas
export const obtenerTareasActivas = async () => {
    const ref = collection(db, "tareas");
    const q = query(ref, where("isActiva", "==", true));

    const snap = await getDocs(q);

    return snap.docs.map(d => {
        const data = { id: d.id, ...d.data() };
        return reconstruirTarea(data);
    });
};




// // Obtener todas (activas + eliminadas)
export const obtenerTareas = async () => {
    const snap = await getDocs(collection(db, "tareas"));

    return snap.docs.map(d => {
        const data = { id: d.id, ...d.data() };
        return reconstruirTarea(data);
    });
};



// Editar
export const editarTarea = async (tarea: Tarea): Promise<boolean> => {
    try {
        const ref = doc(db, "tareas", tarea.id);
        // Sacamos el id antes de enviar a Firestore
        const { id, ...data } = tarea;
        await updateDoc(ref, data);
        
        return true;
    } catch (error) {
        console.error("Error al editar la tarea:", error);
        return false;
    }
};


// Borrar
export const borrarTarea = async (id: string) => {
    try {
        const ref = doc(db, "tareas", id);
        await updateDoc(ref, { isActiva: false });
        return true;
    } catch (error) {
        console.error("Error al borrar tarea:", error);
        return false;
    }
};



// Insertar
export const insertarTarea = async (tarea: Tarea) => {
    const { id, ...resto } = tarea; // sacamos id porque firestore genera uno nuevo
    const ref = await addDoc(collection(db, "tareas"), resto);
    return ref.id;
};




