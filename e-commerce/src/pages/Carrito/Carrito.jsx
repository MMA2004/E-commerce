import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, toggleModal } from "../../redux/cartSlice";
import styles from "./Carrito.module.css";
import Encabezado from "../../components/Encabezado/Encabezado.jsx";
import Modal from "../../components/Modal/Modal.jsx";

const Carrito = () => {
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);
    const totalItems = useSelector((state) => state.cart.totalItems);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);

    return (
        <div className={styles.fondo}>
            <Modal/>
            <Encabezado titulo={"Carrito"}/>
            <div className={styles.cartContainer}>
                <h2>Carrito de Compras ({totalItems} productos)</h2>
                <div className={styles.cartList}>
                    {cartItems.length === 0 ? (
                        <p>Tu carrito está vacío.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className={styles.cartItem}>
                                <img src={item.image} alt={item.nombre} className={styles.itemImage} />
                                <div className={styles.itemDetails}>
                                    <h4>{item.nombre}</h4>
                                    <p>Precio: ${item.precio}</p>
                                    <p>Cantidad: {item.cantidad}</p>
                                    <div className={styles.buttons}>
                                        <button onClick={() => dispatch(addToCart(item))}>+</button>
                                        <button onClick={() => dispatch(removeFromCart({ id: item.id, removeAll: false }))}>-</button>
                                        <button onClick={() => dispatch(removeFromCart({ id: item.id, removeAll: true }))}>Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <h3 className={styles.total}>Total: ${totalPrice.toFixed(2)}</h3>
                <button className={styles.clearButton} onClick={() => dispatch(toggleModal())}>Vaciar Carrito</button>
            </div>
        </div>
    );
};

export default Carrito;