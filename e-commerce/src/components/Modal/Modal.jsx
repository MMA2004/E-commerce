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
                    <h2>Alerta</h2>
                    <h4>¿Estas seguro que quieres vaciar el carrito?</h4>
                    <button onClick={() => dispatch(toggleModal())}>Cerrar</button>
                    <button onClick={clearAndClose}>Vaciar Carrito</button>
                </div>
            </div>
        )
    }
    else{
        return null;
    }

}



export default Modal;