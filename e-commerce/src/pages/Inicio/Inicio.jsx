import { Link } from "react-router-dom";
import styles from "./Inicio.module.css"

function Inicio() {
    return (
        <section className={styles.hero}>
            <div className={styles["hero-content"]}>
                <h1>
                    <span>SIMPLIFICA TU</span> <br />
                    <span>NEGOCIO CON TARJETAS</span> <br />
                    <span>NFC PERSONALIZADAS</span>
                </h1>
                <Link to="/shop" className={styles.btn}>Compra ahora</Link>
            </div>
        </section>
    );
}

export default Inicio;
