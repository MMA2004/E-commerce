import styles from "./SobreNosotros.module.css"

import Encabezado from "../../components/Encabezado/Encabezado.jsx";

function SobreNosotros() {
    return (
        <div className={styles.fondo}>
            <Encabezado titulo="Sobre Nosotros"/>
            <section className={styles.about}>
                <h2>Nuestra Misión</h2>
                <p>En Gibra, nuestra misión es transformar la forma en que las empresas y personas interactúan con la
                    tecnología, ofreciendo soluciones innovadoras en tecnología NFC, digitalización y herramientas
                    tecnológicas. Nos comprometemos a facilitar el acceso a contenido digital, optimizar procesos y
                    brindar soluciones personalizadas que impulsen la eficiencia, sostenibilidad y modernización de
                    nuestros clientes.
                </p>

                <h2>Nuestra Visión</h2>
                <p>Ser reconocidos como referentes en Latinoamérica en la integración de tecnología NFC, digitalización
                    y soluciones tecnológicas innovadoras. Aspiramos a liderar la transformación digital, ofreciendo
                    herramientas que conecten a las personas con el futuro, mientras generamos un impacto positivo y
                    sostenible en las empresas y en nuestra sociedad.</p>

                <h2>Valores</h2>
                <ul>
                    <li><strong>Innovación:</strong> Impulsamos el desarrollo de soluciones tecnológicas avanzadas,
                        adaptándonos a las necesidades de un mundo en constante evolución.
                    </li>
                    <li><strong>Sostenibilidad:</strong> Incorporamos prácticas responsables que promuevan el cuidado
                        del medio ambiente y el uso eficiente de los recursos.
                    </li>
                    <li><strong>Compromiso con la calidad:</strong> Garantizamos productos y servicios de excelencia que
                        superen las expectativas de nuestros clientes.
                    </li>
                    <li><strong>Adaptabilidad:</strong> Nos ajustamos a las demandas del mercado, ofreciendo soluciones
                        personalizadas que se alineen con los objetivos de cada cliente.
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default SobreNosotros;

