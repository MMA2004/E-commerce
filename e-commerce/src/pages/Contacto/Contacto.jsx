import Encabezado from "../../components/Encabezado/Encabezado.jsx";
import ListPreguntas from "../../components/Preguntas/Preguntas.jsx";
import { useState } from "react";
import styles from "./Contacto.module.css"; // Asegúrate de que el CSS esté correctamente importado


function Contacto() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false); // Estado para indicar si se está enviando

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Indicar que el envío está en curso

        try {
            const response = await fetch(import.meta.env.VITE_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                alert("✅ Correo enviado con éxito");
                setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
            } else {
                alert("❌ Error al enviar el correo");
            }
        } catch (error) {
            console.error("Error al enviar el correo:", error);
            alert("❌ Hubo un problema con el servidor.");
        } finally {
            setLoading(false); // Finalizar carga
        }
    };

    return (
        <div>
            <Encabezado titulo={"Contacto"} />
            <div className={styles["contact-container"]}>
                <div className={styles["contact-info"]}>
                    <h1>¿Requieres asistencia? <br />Estamos aquí para servirte.</h1>
                    <h3>ESCRÍBENOS</h3>
                    <p><i className="bi bi-whatsapp"></i> +57 320 9891782</p>
                    <h3>EMAIL</h3>
                    <p>gibra.company@gmail.com</p>
                </div>

                <form className={styles["contact-form"]} onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="johndoe@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Tu mensaje..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit" disabled={loading}>
                        {loading ? "Enviando..." : "Enviar"}
                    </button>
                </form>
            </div>
            <ListPreguntas />
        </div>
    );
}

export default Contacto;
