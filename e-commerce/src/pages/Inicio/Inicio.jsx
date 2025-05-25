import { Link } from "react-router-dom";
import styles from "./Inicio.module.css";
import { useEffect, useState } from "react";
import ProductCards from "../../components/ProductCards/ProductCards.jsx";
import heroBanner from "../../assets/hero-banner.png"; // Importa la imagen

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
            {/* Inicio marca grande */}
            <div className={`${styles.inicio} text-center`}>
                <div className={`${styles["marca-grande"]} ${!visible ? styles.oculto : ""}`}>
                    GIBRA COMPANY
                </div>
            </div>

            {/* Sección Hero */}
            <section className={`${styles.hero} container-fluid py-5`}>
                <div className="row align-items-center">
                    {/* Texto */}
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <div className={styles["hero-content"]}>
                            <h1>
                                <span>SIMPLIFICA TU</span> <br />
                                <span>NEGOCIO CON TARJETAS</span> <br />
                                <span>NFC PERSONALIZADAS</span>
                            </h1>
                            <Link to="/productos" className={`btn ${styles.btn}`}>Compra ahora</Link>
                        </div>
                    </div>

                    {/* Imagen */}
                    <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
                        <img src={heroBanner} alt="Hero Banner" className="img-fluid" />
                    </div>
                </div>
            </section>

            {/* Cards de Productos */}
            <ProductCards />
        </section>
    );
}

export default Inicio;

