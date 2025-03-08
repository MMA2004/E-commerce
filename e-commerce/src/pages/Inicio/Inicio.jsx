import { Link } from "react-router-dom";
import styles from "./Inicio.module.css"
import imagen from "../../assets/hero-banner.png"

function Inicio() {
    return (
        <section className={styles.hero}>
            <div className={styles["hero-content"]}>
                <h1>
                    <span>SIMPLIFICA TU</span> <br />
                    <span>NEGOCIO CON TARJETAS NFC</span> <br />
                    <span>PERSONALIZADAS</span>
                </h1>
                <Link to="/shop" className={styles.btn}>Compra ahora</Link>
            </div>
            <div className={styles.heroImage}>
                <img src={imagen} alt="NFC Card"/>
            </div>
        </section>
    );
}

export default Inicio;
