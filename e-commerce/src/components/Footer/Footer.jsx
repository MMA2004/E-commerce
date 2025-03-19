import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.column}>
                        <h3>GIBRA</h3>
                        <p>Especializados en NFC, <br/>
                            transformamos la manera <br/>
                            en que las personas <br/>
                            y negocios se conectan.</p>
                    </div>

                    <div className={styles.column}>
                        <h3>NAVEGACIÓN</h3>
                        <ul>
                            <li><Link to={"/"}>Inicio</Link></li>
                            <li><Link to={"/productos"}>Productos</Link></li>
                            <li><Link to={"/sobre-nosotros"}>Sobre nosotros</Link></li>
                            <li><Link to={"/contacto"}>Contacto</Link></li>
                            <li><Link to={"/carrito"}>Carrito</Link></li>
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
                        <a href="https://www.instagram.com/gibra_company/" target="_blank">
                            <i className={`bi bi-instagram ${styles.icon}`}></i></a>
                        <a href="https://www.facebook.com/people/GIBRA/61573651571934/" target="_blank">
                            <i className={`bi bi-facebook ${styles.icon}`}></i></a>
                        <a href="https://www.youtube.com/@GIBRA-company" target="_blank">
                            <i className={`bi bi-youtube ${styles.icon}`}></i>
                        </a>
                        <a href="https://www.tiktok.com/@gibra_company" target="_blank">
                            <i className={`bi bi-tiktok ${styles.icon}`}></i>
                        </a>
                        <a href="https://www.linkedin.com/company/gibra-company/posts/?feedView=all" target="_blank">
                            <i className={`bi bi-linkedin ${styles.icon}`}></i>
                        </a>
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