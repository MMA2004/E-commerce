import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.banner}>
                    <h2>Regístrate</h2>
                    <button className={styles.button}>SIGN UP FOR FREE</button>
                </div>
                <div className={styles.container}>
                    <div className={styles.column}>
                        <h3>GIBRA</h3>
                        <p>Your trusted <br/> fashion companion</p>
                    </div>

                    <div className={styles.column}>
                        <h3>NAVEGACIÓN</h3>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Productos</a></li>
                            <li><a href="#">Sobre nosotros</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">Carrito</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>PRIVACIDAD</h3>
                        <ul>
                            <li><a href="#">Políticas de privacidad</a></li>
                            <li><a href="#">Términos y condiciones</a></li>
                        </ul>
                    </div>

                    <div className={styles.socialIcons}>
                        <a href="https://www.instagram.com/gibra_company/" target="_blank"><i
                            className={`bi bi-instagram ${styles.icon}`}></i></a>
                        <i className={`bi bi-twitter ${styles.icon}`}></i>
                        <i className={`bi bi-facebook ${styles.icon}`}></i>
                        <i className={`bi bi-linkedin ${styles.icon}`}></i>
                    </div>
                </div>

                <div className={styles.copyRight}>
                    © 2025 GIBRA. Todos los derechos reservados.
                </div>
            </footer>
        </>
    );
};

export default Footer;