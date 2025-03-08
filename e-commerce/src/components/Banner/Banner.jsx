import styles from "./Banner.module.css"
import { Link } from "react-router-dom";

function Banner() {
    return (
        <div className={styles.banner}>
            <h2>Regístrate</h2>
            <button className={styles.button}>has click aquí</button>
        </div>
    )
}

export default Banner;