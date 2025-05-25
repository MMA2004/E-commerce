import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearNotification } from "../../redux/cartSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig.js";
import styles from "./Productos.module.css";
import Encabezado from "../../components/Encabezado/Encabezado.jsx";
import { guardarCarritoFirestore } from "../../helpers/guardarCarrito.js";
import Modal from "../../components/ModalWindow/ModalWindow.jsx"
import {Link} from "react-router-dom";

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
    const notification = useSelector((state) => state.cart.notification);
    const cartItems = useSelector((state) => state.cart.items);
    const [mostrarModalLogin, setMostrarModalLogin] = useState(false);
    const dispatch = useDispatch();


    // Obtener productos
    React.useEffect(() => {
        const obtenerProductos = async () => {
            const querySnapshot = await getDocs(collection(db, "productos"));
            const productosData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProductos(productosData);
        };

        obtenerProductos();
    }, []);

    const productosFiltrados = categoriaSeleccionada === "todos"
        ? productos
        : productos.filter(producto => producto.categoria === categoriaSeleccionada);

    const handleAddToCart = (product) => {
        const uid = localStorage.getItem("uid");
        if (!uid){
            setMostrarModalLogin(true);
        }

        else
        {
            dispatch(addToCart({producto: product, flag: true}));

            // Simular estado actualizado del carrito
            const productoExistente = cartItems.find(item => item.id === product.id);

            let nuevosItems;
            if (productoExistente) {
                nuevosItems = cartItems.map(item =>
                    item.id === product.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                nuevosItems = [...cartItems, { ...product, cantidad: 1 }];
            }

            // Guardar en Firestore
            guardarCarritoFirestore(uid, nuevosItems);

            // Ocultar notificación después de 3 segundos (por si no se oculta aún)
            setTimeout(() => {
                dispatch(clearNotification());
            }, 3000);}
    };

    return (
        <div className={styles.fondo}>
            <Encabezado titulo={"Productos"} />
            <div className={styles.container}>

                {/* Notificación */}
                {notification && <div className={styles.notification}>{notification}</div>}
                {mostrarModalLogin && (
                    <Modal onClose={() => setMostrarModalLogin(false)}>
                        <h2 className={styles.tituloModal}>Debes iniciar sesión</h2>
                        <p>Por favor inicia sesión para agregar productos al carrito.</p>
                        <button className={`${styles.buttonModal} ${styles.buttonCancelar}`} onClick={() => setMostrarModalLogin(false)}>Cerrar</button>
                        <Link className={`${styles.buttonModal} ${styles.buttonCerrar}`} to={"/login"}>Iniciar sesión</Link>
                    </Modal>
                )}
                {/* Botones de categorías */}
                <div className={styles.categoryButtons}>
                    {["todos", "tarjetas", "tags"].map((categoria) => (
                        <button
                            key={categoria}
                            onClick={() => setCategoriaSeleccionada(categoria)}
                            className={categoriaSeleccionada === categoria ? styles.activeButton : ""}
                        >
                            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Lista de productos */}
                <div className={styles.products}>
                    {productosFiltrados.length > 0 ? (
                        productosFiltrados.map(product => (
                            <div key={product.id} className={styles.productCard}>
                                <img src={product.imagen} alt={product.nombre} className={styles.productImage} />
                                <h3 className={styles.productName}>{product.nombre}</h3>
                                {product.personalizable ? (
                                    <h4 className={styles.productDescription}>Personalizable</h4>
                                ) : (
                                    <h4 className={styles.productDescription}>Color único</h4>
                                )}

                                <p className={styles.productPrice}>${product.precio.toLocaleString("es-ES")}</p>
                                <button className={styles.addButton} onClick={() => handleAddToCart(product)}>
                                    Agregar al carrito
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className={styles.noProducts}>No hay productos en esta categoría.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Productos;


