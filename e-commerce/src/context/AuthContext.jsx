import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig.js";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// Crear contexto
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // Registro
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Inicio de sesión
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Cerrar sesión
    const logout = () => {
        return signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
