import styles from "./Navbar.module.css";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {cerrarSesion} from "../../helpers/auth.js";
import {clearCart} from "../../redux/cartSlice.js";
import { useDispatch } from "react-redux";
import Modal from "../ModalWindow/ModalWindow.jsx";
import React, {useState, useEffect} from "react";


function Navbar() {
    const uid = localStorage.getItem("uid");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [mostrarModal, setMostrarModal] = useState(false);
    const location = useLocation();


    const cerrar = async () => {
        await cerrarSesion();
        dispatch(clearCart());
        setMostrarModal(false);
        navigate("/login");
    };

    const cancelar = () => {
        setMostrarModal(false);
    };

    const [scrollActivo, setScrollActivo] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollActivo(window.scrollY > 10); // Cambia el valor según el efecto que quieras
        };

        if (location.pathname === "/") {
            window.addEventListener("scroll", handleScroll);
        }
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    const esInicio = location.pathname === "/";

    return (
        <header className={`${styles.header} ${
            esInicio ? (scrollActivo ? styles.scrollActivo : styles.transparente) : styles.scrollActivo}`}>
            <div className={styles.contenedor}>
                {mostrarModal && (
                    <Modal onClose={cancelar}>
                        <h2 className={styles.tituloModal}>¿Estás seguro que quieres cerrar sesión?</h2>
                        <button className={`${styles.buttonModal} ${styles.buttonCancelar}`} onClick={cancelar}>Cancelar</button>
                        <button className={`${styles.buttonModal} ${styles.buttonCerrar}`} onClick={cerrar}>Cerrar sesión</button>
                    </Modal>
                )}
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
                <NavLink to="/" className={`${styles.logo} ${esInicio && !scrollActivo ? styles.oculto : ""}`}>
                    GIBRA COMPANY
                </NavLink>
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
                                <button className={styles.button} onClick={() => {setMostrarModal(true)}}>
                                    <i className="bi bi-box-arrow-right"></i>
                                </button>
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
