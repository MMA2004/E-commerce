import { useState } from "react";
import styles from "./Preguntas.module.css"

function Pregunta({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles["faq-item"]}>
            <div className={styles["faq-question"]} onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span className={styles["faq-toggle"]}>{isOpen ? <i className="bi bi-x"></i> : <i className="bi bi-plus-circle"></i>}</span>
            </div>
            {isOpen && <div className={styles["faq-answer"]}>{answer}</div>}
        </div>
    );
}

function ListPreguntas() {
    const faqs = [
        {
            question: "¿Qué es la tecnología NFC y cómo funciona?",
            answer:
                "La tecnología NFC (Near Field Communication) permite la comunicación inalámbrica entre dispositivos cercanos. " +
                "Se usa en tarjetas, etiquetas y teléfonos móviles para compartir información con solo acercarlos.",
        },
        {
            question: "¿Necesito instalar una app para usar NFC?",
            answer:
                "No, la mayoría de los teléfonos modernos tienen NFC habilitado de forma nativa " +
                "y pueden leer nuestras tarjetas sin necesidad de instalar una aplicación.",
        },
        {
            question: "¿Puedo personalizar mi tarjeta NFC con mi logo y diseño?",
            answer: "Sí, ofrecemos opciones de personalización con tu logo, colores y " +
                "diseño personalizado para que tu tarjeta refleje la identidad de tu marca.",
        },
        {
            question: "¿Es posible actualizar el contenido de mi página multilink sin cambiar la tarjeta?",
            answer: "Sí, puedes actualizar los enlaces y la información de tu página en cualquier " +
                "momento sin necesidad de cambiar la tarjeta NFC.",
        },
    ];

    return (
        <div className={styles.fondo}>
            <div className={styles["faq-container"]}>
                <h2 className={styles.h2}>PREGUNTAS FRECUENTES</h2>
                {faqs.map((faq, index) => (
                    <Pregunta key={index} question={faq.question} answer={faq.answer}/>
                ))}
            </div>
        </div>
    );
}

export default ListPreguntas;
