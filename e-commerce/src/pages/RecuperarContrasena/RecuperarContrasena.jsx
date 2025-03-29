// src/pages/RecuperarContrasena.jsx
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../../config/firebaseConfig.js";
import Encabezado from "../../components/Encabezado/Encabezado.jsx";
import styles from "./RecuperarContrasena.module.css";
import { Link } from "react-router-dom";

function RecuperarContrasena() {
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");

    const auth = getAuth(app);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setMensaje("Se ha enviado un correo para restablecer tu contraseña.");
            setError("");
        } catch (err) {
            if (err.code === "auth/user-not-found") {
                setError("El correo no está registrado.");
            } else if (err.code === "auth/invalid-email") {
                setError("El formato del correo no es válido.");
            } else {
                setError("Ocurrió un error. Inténtalo nuevamente.");
            }
            setMensaje("");
        }
    };

    return (
        <div>
            <Encabezado titulo="Recuperar contraseña" />
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h2>Recupera tu contraseña</h2>
                    <p>Ingresa tu correo y recibirás un enlace para restablecer tu contraseña.</p>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>Enviar correo</button>
                    {mensaje && <p className={styles.success}>{mensaje}</p>}
                    {error && <p className={styles.error}>{error}</p>}
                    <Link to="/login" className={styles.volver}>← Volver al inicio de sesión</Link>
                </form>
            </div>
        </div>
    );
}

export default RecuperarContrasena;
