import styles from "./LogIn.module.css";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../config/firebaseConfig.js";
import Encabezado from "../../components/Encabezado/Encabezado.jsx";
import { Link } from "react-router-dom";

function LogIn() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth(app);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");



    // Manejar Registro
    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setEmail("");
        setPassword("");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("Usuario registrado con éxito");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("El correo ya está en uso.");
            } else {
                setError("Error al registrarse");
            }
        }
    };

    // Manejar Inicio de Sesión
    const handleSignIn = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setEmail("");
        setPassword("");

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Guardar el UID en localStorage (o puedes usar Redux si lo prefieres)
            localStorage.setItem("uid", user.uid);
            setSuccess("Inicio de sesión exitoso");
        } catch {
                setError("Email o contraseña incorrectos.");
        }
    };

    const handleToggle = (signUp) => {
        setIsSignUp(signUp);
        setError("");
        setSuccess("");
    };

    return (
        <div>
            <Encabezado titulo={"Iniciar sesión / Registrarse"}/>
            <div className={styles.fondo}>
                <div className={`${styles.container} ${isSignUp ? styles.toggle : ""}`}>

                    {/* FORMULARIO INICIO DE SESIÓN */}
                    <div className={styles.containerForm}>
                        <form className={`${styles.form} ${styles.signIn}`} onSubmit={handleSignIn}>
                            <h2 className={styles.title}>Iniciar sesión</h2>
                            <span className={styles.text}>Use su correo y contraseña</span>
                            <div className={styles.containerInput}>
                                <i className="bi bi-envelope-fill"></i>
                                <input className={styles.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className={styles.containerInput}>
                                <i className="bi bi-lock-fill"></i>
                                <input className={styles.input} type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            {error && <p className={styles.errorMessage}>{error}</p>}
                            <Link to="/recuperar-contrasena" className={styles.link}>¿Olvidaste tu contraseña?</Link>
                            <button className={styles.button} type="submit">Iniciar sesión</button>
                            {success && <p className={styles.successMessage}>{success}</p>}
                        </form>
                    </div>

                    {/* FORMULARIO REGISTRO */}
                    <div className={styles.containerForm}>
                        <form className={`${styles.form} ${styles.signUp}`} onSubmit={handleSignUp}>
                            <h2 className={styles.title}>Registrarse</h2>
                            <span className={styles.text}>Use su correo para registrarse</span>
                            <div className={styles.containerInput}>
                                <i className="bi bi-envelope-fill"></i>
                                <input className={styles.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className={styles.containerInput}>
                                <i className="bi bi-lock-fill"></i>
                                <input className={styles.input} type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            {error && <p className={styles.errorMessage}>{error}</p>}
                            <button className={styles.button} type="submit">Registrarse</button>
                            {success && <p className={styles.successMessage}>{success}</p>}
                        </form>
                    </div>

                    {/* SECCIÓN DE BIENVENIDA */}
                    <div className={styles.containerWelcome}>
                        <div className={`${styles.welcome} ${styles.welcomeSignUp}`}>
                            <h3 className={styles.titleWelcome}>¡Bienvenido!</h3>
                            <p className={styles.textoWelcome}>Ingrese sus datos personales para usar todas las funciones del sitio</p>
                            <button className={styles.button} onClick={() => handleToggle(true)}>Registrarse</button>
                        </div>
                        <div className={`${styles.welcome} ${styles.welcomeSignIn}`}>
                            <h3 className={styles.titleWelcome}>¡Hola!</h3>
                            <p className={styles.textoWelcome}>Regístrate con tus datos personales para usar todas las funciones del sitio</p>
                            <button className={styles.button} onClick={() => handleToggle(false)}>Iniciar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
