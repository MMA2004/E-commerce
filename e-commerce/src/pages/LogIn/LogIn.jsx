import styles from "./LogIn.module.css";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../config/firebaseConfig.js"; // Asegúrate de importar la configuración de Firebase
import Encabezado from "../../components/Encabezado/Encabezado.jsx";

function LogIn() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth(app);

    // Manejar Registro
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Usuario registrado con éxito");
        } catch (error) {
            alert("Error al registrarse: " + error.message);
        }
    };

    // Manejar Inicio de Sesión
    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Inicio de sesión exitoso");
        } catch (error) {
            alert("Error al iniciar sesión: " + error.message);
        }
    };

    return (
        <div>
            <Encabezado />
            <div className={styles.fondo}>
                <div className={`${styles.container} ${isSignUp ? styles.toggle : ""}`}>

                    {/* FORMULARIO INICIO DE SESIÓN */}
                    <div className={styles.containerForm}>
                        <form className={`${styles.form} ${styles.signIn}`} onSubmit={handleSignIn}>
                            <h2 className={styles.title}>Iniciar sesión</h2>
                            <div className={styles.socialNetwork}>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-facebook"></i>
                            </div>
                            <span className={styles.text}>Use su correo y contraseña</span>
                            <div className={styles.containerInput}>
                                <i className="bi bi-envelope-fill"></i>
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className={styles.containerInput}>
                                <i className="bi bi-lock-fill"></i>
                                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <a className={styles.link} href="#">¿Olvidaste tu contraseña?</a>
                            <button className={styles.button} type="submit">Iniciar sesión</button>
                        </form>
                    </div>

                    {/* FORMULARIO REGISTRO */}
                    <div className={styles.containerForm}>
                        <form className={`${styles.form} ${styles.signUp}`} onSubmit={handleSignUp}>
                            <h2 className={styles.title}>Registrarse</h2>
                            <div className={styles.socialNetwork}>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-facebook"></i>
                            </div>
                            <span className={styles.text}>Use su correo para registrarse</span>
                            <div className={styles.containerInput}>
                                <i className="bi bi-person-fill"></i>
                                <input type="text" placeholder="Nombre" required />
                            </div>
                            <div className={styles.containerInput}>
                                <i className="bi bi-envelope-fill"></i>
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className={styles.containerInput}>
                                <i className="bi bi-lock-fill"></i>
                                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <button className={styles.button} type="submit">Registrarse</button>
                        </form>
                    </div>

                    {/* SECCIÓN DE BIENVENIDA */}
                    <div className={styles.containerWelcome}>
                        <div className={`${styles.welcome} ${styles.welcomeSignUp}`}>
                            <h3>¡Bienvenido!</h3>
                            <p>Ingrese sus datos personales para usar todas las funciones del sitio</p>
                            <button className={styles.button} onClick={() => setIsSignUp(true)}>Registrarse</button>
                        </div>
                        <div className={`${styles.welcome} ${styles.welcomeSignIn}`}>
                            <h3>¡Hola!</h3>
                            <p>Regístrate con tus datos personales para usar todas las funciones del sitio</p>
                            <button className={styles.button} onClick={() => setIsSignUp(false)}>Iniciar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
