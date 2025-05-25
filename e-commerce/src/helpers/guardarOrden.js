// helpers/guardarOrden.js
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../config/firebaseConfig.js";
import { nanoid } from "nanoid";

export const guardarOrden = async (uid, cartItems, total) => {
    try {
        const fecha = new Date();
        const fechaStr = fecha.toISOString().split('T')[0].replace(/-/g, '');
        const randomStr = nanoid(6).toUpperCase();
        const orderId = `ORD-${fechaStr}-${randomStr}`;

        const orden = {
            uid,
            fechaCreacion: Timestamp.now(),
            estado: "Pedido recibido",
            total,
            items: cartItems.map(item => ({
                id: item.id,
                nombre: item.nombre,
                precio: item.precio,
                cantidad: item.cantidad
            }))
        };

        await setDoc(doc(db, "ordenes", orderId), orden);
        console.log("Orden guardada con ID:", orderId);

        return orderId;
    } catch (error) {
        console.error("Error al guardar la orden:", error);
        return null;
    }
};