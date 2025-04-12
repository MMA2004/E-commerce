import { Link } from "react-router-dom";
import styles from "./Inicio.module.css"
import { useEffect, useState } from "react";
import ProductCards from "../../components/ProductCards/ProductCards.jsx";


function Inicio() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY < 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section>
            <div className={styles.inicio}>
                <div className={`${styles["marca-grande"]} ${!visible ? styles.oculto : ""}`}>
                    GIBRA COMPANY
                </div>
            </div>

            <section className={styles.hero}>
                <div className={styles["hero-content"]}>
                    <h1>
                        <span>SIMPLIFICA TU</span> <br />
                        <span>NEGOCIO CON TARJETAS</span> <br />
                        <span>NFC PERSONALIZADAS</span>
                    </h1>
                    <Link to="/shop" className={styles.btn}>Compra ahora</Link>
                </div>
            </section>

            <ProductCards />
        </section>
    );
}

export default Inicio;
