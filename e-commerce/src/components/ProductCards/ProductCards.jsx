import {Link} from "react-router-dom";

const imgTarjeta = "https://firebasestorage.googleapis.com/v0/b/e-commerce-gibra.firebasestorage.app/o/tags.jpeg?alt=media&token=70578cf8-b5cc-4b8d-a602-f5deaa481b8e"
const imgTag = "https://firebasestorage.googleapis.com/v0/b/e-commerce-gibra.firebasestorage.app/o/tarjetas_blanco.jpeg?alt=media&token=b0188ba1-e1a8-4c23-a6b5-136cd43ecbce"
const Products = () => {
    return (
        <div className="container text-center py-5 bg-white">
            <Link to="/productos" className="btn btn-dark mb-4">
                Visitar Tienda
            </Link>

            <div className="row justify-content-center g-4">
                {/* Producto 1 */}
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
                    <div className="card border-0 shadow-sm" style={{width: '18rem'}}>
                        <img
                            src={imgTag}
                            className="card-img-top" alt="Tarjetas NFC"/>
                        <div className="card-body text-center">
                            <h5 className="card-title">Tarjetas NFC</h5>
                            <p className="card-text">
                                Tarjetas NFC personalizables para llevar tu negocio a otro nivel.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Producto 2 */}
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
                    <div className="card border-0 shadow-sm" style={{width: '18rem'}}>
                        <img
                            src={imgTarjeta}
                            className="card-img-top" alt="Tags NFC"/>
                        <div className="card-body text-center">
                            <h5 className="card-title">Tags NFC</h5>
                            <p className="card-text">
                                Tags NFC para simplificar tu forma de hacer las cosas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;



