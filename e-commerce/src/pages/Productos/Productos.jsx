import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig.js"; // Asegúrate de importar tu configuración de Firebase
import styles from "./Productos.module.css"
import Encabezado from "../../components/Encabezado/Encabezado.jsx";

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const dispatch = useDispatch();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

    useEffect(() => {
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

    // Manejar la adición al carrito
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            <Encabezado titulo={"Productos"}/>
            <div className={styles.container}>

                {/* Botones de categorías */}
                <div className={styles.categoryButtons}>
                    {["todos", "ropa", "electronica", "hogar"].map((categoria) => (
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
                                <img src={product.imagen} alt={product.nombre} className={styles.productImage}/>
                                <h3 className={styles.productName}>{product.nombre}</h3>
                                <p className={styles.productPrice}>${product.precio}</p>
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

