import {clearCart, toggleModal} from "../../redux/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Modal.module.css";

function Modal() {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.cart.isOpenModal);
    const clearAndClose = () => {
        dispatch(clearCart());
        dispatch(toggleModal());
    };


    if (isOpen) {
        return (
            <div className={styles.modal_overlay}>
                <div className={styles.modal_content}>
                    <button className={styles.closeButton} onClick={() => dispatch(toggleModal())}><i className="bi bi-x-circle"></i></button>
                    <h2>Alerta</h2>
                    <h4>¿Estas seguro que quieres vaciar el carrito?</h4>
                    <button className={styles.button1} onClick={() => dispatch(toggleModal())}>Cerrar</button>
                    <button className={styles.button1} onClick={clearAndClose}>Vaciar Carrito</button>
                </div>
            </div>
        )
    }
    else{
        return null;
    }

}



export default Modal;