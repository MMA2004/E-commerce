import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, toggleModal, setCart } from "../../redux/cartSlice";
import styles from "./Carrito.module.css";
import Encabezado from "../../components/Encabezado/Encabezado.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import { guardarCarritoFirestore, obtenerCarritoDesdeFirestore } from "../../helpers/guardarCarrito.js";
import { useEffect, useState } from "react";

const Carrito = () => {
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);
    const totalItems = useSelector((state) => state.cart.totalItems);
    const dispatch = useDispatch();
    const [carritoCargado, setCarritoCargado] = useState(false);

    useEffect(() => {
        const uid = localStorage.getItem("uid");
        if (!uid) return;

        const cargarCarrito = async () => {
            const items = await obtenerCarritoDesdeFirestore(uid);
            if (items.length > 0) {
                dispatch(setCart(items));
            }
            setCarritoCargado(true);
        };

        cargarCarrito();
    }, [dispatch]);

    const totalPrice = cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);

    useEffect(() => {
        const uid = localStorage.getItem("uid");
        if (!uid || !carritoCargado) return;

        guardarCarritoFirestore(uid, cartItems);
    }, [cartItems, carritoCargado]);



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
                                <img src={item.imagen} alt={item.nombre} className={styles.itemImage} />
                                <div className={styles.itemDetails}>
                                    <h4>{item.nombre}</h4>
                                    <p>Precio: ${item.precio}</p>
                                    <p>Cantidad: {item.cantidad}</p>
                                    <div className={styles.buttons}>
                                        <button onClick={() => dispatch(addToCart({ producto: item, flag: false }))}>+</button>
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