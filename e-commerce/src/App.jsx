import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Inicio from "./pages/Inicio/Inicio.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer/Footer.jsx";



const Productos = () => <h2>📂 Productos</h2>;

const Ordenes = () => <h2>🧑‍💼 Ordenes</h2>;

const SobreNosotros = () => <h2>ℹ️ Sobre Nosotros</h2>;

const Contact = () => <h2>📞 Contacto</h2>;

const NotFound = () => <h2>❌ 404 - Página no encontrada</h2>;

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/ordenes" element={<Ordenes />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;