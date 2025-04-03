import styles from "./ProductCards.module.css";
import tarjetasImg from "../../assets/tarjetas_blanco.jpeg"; // Asegúrate de tener esta imagen
import tagsImg from "../../assets/tags.jpeg";
import {Link} from "react-router-dom"; // Asegúrate de tener esta imagen

const Products = () => {
    return (
        <div className={styles.container}>
            <Link to="/productos" className={styles.button}>Vistiar Tienda</Link>

            <div className={styles.products}>
                {/* Producto 1 */}
                <div className={styles.productCard}>
                    <div className={styles.imageContainer}>
                        <img src={tarjetasImg} alt="Tarjetas NFC"/>
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Tarjetas NFC</h3>
                        <p>
                            Tarjetas NFC presonalizables para llevar tu negocio a otro nivel
                        </p>
                    </div>
                </div>

                {/* Producto 2 */}
                <div className={styles.productCard}>
                    <div className={styles.imageContainer}>
                        <img src={tagsImg} alt="Tags NFC" />
                    </div>
                    <div className={styles.textContainer}>
                        <h3>Tags NFC</h3>
                        <p>
                            Tags NFC para simplificar tu forma de hacer las cosas
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;


