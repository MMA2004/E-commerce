import styles from "./Navbar.module.css"
import { NavLink, Link } from "react-router-dom";

function Navbar() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink to="/productos"
                         className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                    PRODUCTOS
                </NavLink>
                <NavLink to="/ordenes"
                         className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                    ORDENES
                </NavLink>
            </nav>

            <NavLink to="/" className={styles.logo}>GIBRA COMPANY</NavLink>

            <nav className={styles.nav}>
                <NavLink to="/sobre-nosotros"
                         className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                    SOBRE NOSOTROS
                </NavLink>
                <NavLink to="/contacto"
                         className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                    CONTACTO
                </NavLink>
                <NavLink to="/carrito"
                         className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                    <i className="bi bi-cart2" ></i>
                </NavLink>
                <NavLink to="/sesion"
                         className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                    <i className="bi bi-person-circle"></i>
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar;