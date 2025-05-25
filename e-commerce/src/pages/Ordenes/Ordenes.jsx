import styles from "./Ordenes.module.css"
import Encabezado from "../../components/Encabezado/Encabezado.jsx";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../config/firebaseConfig.js";

function Ordenes() {
    const [ordenes, setOrdenes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [estadoSeleccionado, setEstadoSeleccionado] = useState("Todos");

    useEffect(() => {
        const uid = localStorage.getItem("uid");
        if (!uid) {
            setLoading(false);
            return;
        }

        const fetchOrdenes = async () => {
            try {
                // Referencia a la colección ordenes
                const ordenesRef = collection(db, "ordenes");

                // Query para traer solo las órdenes del usuario y ordenarlas por fecha descendente
                const q = query(
                    ordenesRef,
                    where("uid", "==", uid),
                    orderBy("fechaCreacion", "desc")
                );

                const querySnapshot = await getDocs(q);
                const data = [];

                querySnapshot.forEach((doc) => {
                    data.push({ id: doc.id, ...doc.data() });
                });

                setOrdenes(data);
            } catch (error) {
                console.error("Error al obtener órdenes: ", error);
            }
            setLoading(false);
        };

        fetchOrdenes();
    }, []);


    const ordenesFiltradas = estadoSeleccionado === "Todos"
        ? ordenes
        : ordenes.filter(orden => orden.estado === estadoSeleccionado);

    return (
        <div className={styles.fondo}>
            <Encabezado titulo={"Mis Órdenes"} />
            <div className={styles.container}>
                <div className={styles.estadoButtons}>
                    {["Todos", "Pedido recibido", "En proceso", "Entregado"].map(estado => (
                        <button
                            key={estado}
                            onClick={() => setEstadoSeleccionado(estado)}
                            className={estadoSeleccionado === estado ? styles.activeButton : ""}
                        >
                            {estado}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <p className={styles.loading}>Cargando órdenes...</p>
                ) : ordenesFiltradas.length === 0 ? (
                    <p className={styles.noOrders}>No hay órdenes con este estado.</p>
                ) : (
                    <div className={styles.ordenes}>
                        {ordenesFiltradas.map(orden => (
                            <div key={orden.id} className={styles.ordenCard}>
                                <p><strong>ID órden:</strong> {orden.id}</p>
                                <p><strong>Fecha:</strong> {orden.fechaCreacion.toDate().toLocaleDateString('es-CO', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</p>
                                <p><strong>Estado:</strong> {orden.estado}</p>
                                <p><strong>Total:</strong> ${orden.total.toLocaleString("es-ES")}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Ordenes