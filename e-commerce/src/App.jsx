import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Inicio from "./pages/Inicio/Inicio.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SobreNosotros from "./pages/SobreNosotros/SobreNosotros.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Productos from "./pages/Productos/Productos.jsx";
import Ordenes from "./pages/Ordenes/Ordenes.jsx";
import Contacto from "./pages/Contacto/Contacto.jsx";
import Carrito from "./pages/Carrito/Carrito.jsx";
import ScrollTop from "./components/ScrollTop/ScrolTop.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import RecuperarContrasena from "./pages/RecuperarContrasena/RecuperarContrasena.jsx";
import "./config/testFirestore.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const NotFound = () => <h2>❌ 404 - Página no encontrada</h2>;

function Layout() {
    const location = useLocation();
    const hideBannerRoutes = ["/login", "/recuperar-contrasena"];

    return (
        <>
            <ScrollTop />
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
                <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
            </Routes>
            {!hideBannerRoutes.includes(location.pathname) && <Banner />}
            <Footer />
        </>
    );
}

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

export default App;