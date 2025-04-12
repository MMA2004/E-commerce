import styles from "./Banner.module.css"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";

function Banner() {
    const navigate = useNavigate();
    const [mostrarModal, setMostrarModal] = useState(false);

    const handleClick = () => {
        const uid = localStorage.getItem("uid");
        if (uid) {
            setMostrarModal(true);
        } else {
            navigate("/login");
        }
    };

    return (
        <div className={styles.banner}>
            <h2>Inicia sesión</h2>
            <button onClick={handleClick} className={styles.button}>Haz click aquí</button>

            {mostrarModal && (
                <ModalWindow onClose={() => setMostrarModal(false)}>
                    <h3 className={styles.tituloModal}>Ya tienes una sesión iniciada</h3>
                    <p>No necesitas iniciar sesión de nuevo.</p>
                    <button onClick={() => setMostrarModal(false)}>Cerrar</button>
                </ModalWindow>
            )}
        </div>
    )
}

export default Banner;