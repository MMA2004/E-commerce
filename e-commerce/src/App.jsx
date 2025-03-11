import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Inicio from "./pages/Inicio/Inicio.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer/Footer.jsx";
import SobreNosotros from "./pages/SobreNosotros/SobreNosotros.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Productos from "./pages/Productos/Productos.jsx";
import Ordenes from "./pages/Ordenes/Ordenes.jsx";
import Contacto from "./pages/Contacto/Contacto.jsx";
import Carrito from "./pages/Carrito/Carrito.jsx";
import ScrollTop from "./components/ScrollTop/ScrolTop.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";



const NotFound = () => <h2>❌ 404 - Página no encontrada</h2>;

function App() {
    return (
        <Router>
            <ScrollTop/>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/ordenes" element={<Ordenes />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Banner />
            <Footer />
        </Router>
    );
}

export default App;