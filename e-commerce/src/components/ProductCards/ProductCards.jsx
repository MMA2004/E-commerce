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
                            Install the Figma plugin and you're ready to convert your designs to
                            a responsive site.
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
                            Browse dozens of professionally designed templates. Click, duplicate,
                            customize.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;


