import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export const cerrarSesion = async () => {
    try {
        await signOut(auth);
        localStorage.removeItem("uid"); // Borra también el UID si lo guardaste
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
    }
};
