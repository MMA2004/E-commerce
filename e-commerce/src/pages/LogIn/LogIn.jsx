import styles from "./LogIn.module.css"
import {useState} from "react";
import Encabezado from "../../components/Encabezado/Encabezado.jsx";


function LogIn() {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div>
            <Encabezado/>
            <div className={styles.fondo}>
                <div className={`${styles.container} ${isSignUp ? styles.toggle : ""}`}>
                    {/* FORMULARIO INICIO DE SESIÓN */}
                    <div className={styles.containerForm}>
                        <form className={`${styles.form} ${styles.signIn}`}>
                            <h2 className={styles.title}>Iniciar sesión</h2>
                            <div className={styles.socialNetwork}>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-facebook"></i>
                            </div>
                            <span className={styles.text}>Use su correo y contraseña</span>
                            <div className={styles.containerInput}>
                                <i className="bi bi-envelope-fill"></i>
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div className={styles.containerInput}>
                                <i className="bi bi-lock-fill"></i>
                                <input type="password" placeholder="Contraseña"/>
                            </div>
                            <a className={styles.link} href="#">¿Olvidaste tu contraseña?</a>
                            <button className={styles.button} type="button">Iniciar sesión</button>
                        </form>
                    </div>

                    {/* FORMULARIO REGISTRO */}
                    <div className={styles.containerForm}>
                        <form className={`${styles.form} ${styles.signUp}`}>
                            <h2 className={styles.title}>Registrarse</h2>
                            <div className={styles.socialNetwork}>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-facebook"></i>
                            </div>
                            <span className={styles.text}>Use su correo para registrarse</span>
                            <div className={styles.containerInput}>
                                <i className="bi bi-person-fill"></i>
                                <input type="text" placeholder="Nombre"/>
                            </div>
                            <div className={styles.containerInput}>
                                <i className="bi bi-envelope-fill"></i>
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div className={styles.containerInput}>
                                <i className="bi bi-lock-fill"></i>
                                <input type="password" placeholder="Contraseña"/>
                            </div>
                            <button className={styles.button} type="button">Registrarse</button>
                        </form>
                    </div>

                    {/* SECCIÓN DE BIENVENIDA */}
                    <div className={styles.containerWelcome}>
                        <div className={`${styles.welcome} ${styles.welcomeSignUp}`}>
                            <h3>¡Bienvenido!</h3>
                            <p>Ingrese sus datos personales para usar todas las funciones del sitio</p>
                            <button className={styles.button} onClick={() => setIsSignUp(true)}>Iniciar sesión</button>
                        </div>
                        <div className={`${styles.welcome} ${styles.welcomeSignIn}`}>
                            <h3>¡Hola!</h3>
                            <p>Regístrate con tus datos personales para usar todas las funciones del sitio</p>
                            <button className={styles.button} onClick={() => setIsSignUp(false)}>Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

            export default LogIn;