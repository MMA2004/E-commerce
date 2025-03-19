import styles from "./Banner.module.css"
import { Link } from "react-router-dom";

function Banner() {
    return (
        <div className={styles.banner}>
            <h2>Regístrate</h2>
            <Link to={"/login"} className={styles.button}>has click aquí</Link>
        </div>
    )
}

export default Banner;