import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    const uid = localStorage.getItem("uid");
    return (
        <header className={styles.header}>
            <div className={styles.contenedor}>
                <nav className={styles.nav}>
                    <NavLink to="/productos"
                             className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                        PRODUCTOS
                    </NavLink>
                    <NavLink to="/ordenes"
                             className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                        ORDENES
                    </NavLink>
                </nav>
            </div>

            <div className={styles.contenedor}>
                <NavLink to="/" className={styles.logo}>GIBRA COMPANY</NavLink>
            </div>

            <div className={styles.contenedor}>
                <nav className={styles.nav}>
                    <NavLink to="/sobre-nosotros"
                             className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                        SOBRE NOSOTROS
                    </NavLink>
                    <NavLink to="/contacto"
                             className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                        CONTACTO
                    </NavLink>
                    <NavLink to="/carrito"
                             className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                        <i className="bi bi-cart2"></i>
                    </NavLink>

                    {
                        uid ? (
                            <>
                                <NavLink to="/logout"
                                         className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                                    <i className="bi bi-box-arrow-right"></i>
                                </NavLink>
                            </>
                        ) : (
                            <NavLink to="/login"
                                     className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                                <i className="bi bi-person-circle"></i>
                            </NavLink>
                        )
                    }
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
