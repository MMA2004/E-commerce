import styles from "./Contacto.module.css"
import Encabezado from "../../components/Encabezado/Encabezado.jsx";
import {useState} from "react";
import ListPreguntas from "../../components/Preguntas/Preguntas.jsx";



function Contacto() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando datos: ", formData);

        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };


    return (
        <div>
            <Encabezado titulo={"Contacto"}/>
            <div className={styles["contact-container"]}>
                <div className={styles["contact-info"]}>
                    <h1>¿Requieres asistencia? <br/>
                        Estamos aquí para servirte.</h1>
                    <h3>ESCRÍBENOS</h3>
                    <p><i className="bi bi-whatsapp"></i> +57 320 9891782</p>
                    <h3>EMAIL</h3>
                    <p>gibra.company@gmail.com</p>
                </div>
                <form className={styles["contact-form"]} onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" value={formData.email} onChange={handleChange}
                           required/>

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Tu mensaje..." value={formData.message} onChange={handleChange}
                              required></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </div>
            <ListPreguntas />
        </div>
    )
}

export default Contacto;