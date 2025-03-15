import { Link } from "react-router-dom";
import styles from "./Encabezado.module.css"

function SobreNosotros({ titulo }) {
    return (
        <section className={styles.hero}>
            <div className={styles["hero-content"]}>
                <h1>{titulo}</h1>
                <p><Link to={"/"}>Inicio</Link> <i className="bi bi-arrow-right"></i> {titulo}</p>
            </div>

        </section>
    )
}

export default SobreNosotros;