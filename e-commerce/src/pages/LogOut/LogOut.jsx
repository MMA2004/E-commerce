import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cerrarSesion } from "../../helpers/auth.js";
import { clearCart } from "../../redux/cartSlice.js";
import Modal from "../../components/ModalWindow/ModalWindow.jsx";
import React from "react";

function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const cerrar = async () => {
            await cerrarSesion();
            dispatch(clearCart());
            navigate("/login");
    };

    return (
        <div>
            <Modal>
                <h2>¿Estas seguro que quieres cerrar sesión?</h2>
                <button onClick={() => cerrar()}>Cerrar</button>
            </Modal>
        </div>
    );
}

export default Logout;
