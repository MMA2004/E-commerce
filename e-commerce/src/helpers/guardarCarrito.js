import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig"; // Asegúrate de que este sea el path correcto a tu config de Firebase

export const guardarCarritoFirestore = async (uid, cartItems) => {
    try {
        await setDoc(doc(db, "carritos", uid), {
            items: cartItems,
        });
    } catch (error) {
        console.error("Error al guardar el carrito:", error);
    }
};

export const obtenerCarritoDesdeFirestore = async (userId) => {
    try {
        const docRef = doc(db, "carritos", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data().items;
        }
        return [];
    } catch (error) {
        console.error("Error al obtener el carrito:", error);
        return [];
    }
};