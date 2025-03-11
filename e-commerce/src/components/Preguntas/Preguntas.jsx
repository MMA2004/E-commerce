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
            question: "How often do you introduce new collections?",
            answer:
                "We regularly refresh our collections to keep up with the latest trends...",
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to multiple countries...",
        },
        {
            question: "Are gift cards available?",
            answer: "Yes, we offer digital and physical gift cards for purchase.",
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
