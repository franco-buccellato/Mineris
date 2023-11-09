import "./ServicioWeb.css";
import web1 from '../../imagenes/relevamiento-web.png';
import web2 from '../../imagenes/planificacion-web.png';
import web3 from '../../imagenes/diseño-web.png';
import web4 from '../../imagenes/desarrollo-web.png';
import web5 from '../../imagenes/lanzamiento-web.png';
import web6 from '../../imagenes/mantenimiento-web.png';

function ServicioWeb() {
    
    return (
        <section className="section-servicio" id="servicios">
            <div className="section-servicio-titulo">
                <h2 className="display-6">SERVICIOS</h2>
            </div>
            <h2 className="titulo-servicio-1">Diseño y Desarrollo WEB</h2>
            <div className="servicios-container-1-1">
                <div className="container-servicio-1">
                    <div className="servicio-1">
                        <img src={web1}></img>
                        <div className="descripcion-1">
                            <h6 className="encabezado-servicio-1">Relevamiento</h6>
                            <span>
                                
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container-servicio-2">
                    <div className="servicio-2">
                        <img src={web2}></img>
                        <div className="descripcion-2">
                            <h6 className="encabezado-servicio-2">Planificación</h6>
                        </div>
                    </div>
                </div>
                <div className="container-servicio-3">
                    <div className="servicio-3">
                        <img src={web3}></img>
                        <div className="descripcion-3">
                            <h6 className="encabezado-servicio-3">Diseño</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="servicios-container-1-2">
                <div className="container-servicio-1">
                    <div className="servicio-1">
                        <img src={web4}></img>
                        <div className="descripcion-1">
                            <h6 className="encabezado-servicio-1">Desarrollo</h6>
                        </div>
                    </div>
                </div>
                <div className="container-servicio-2">
                    <div className="servicio-2">
                        <img src={web5}></img>
                        <div className="descripcion-2">
                            <h6 className="encabezado-servicio-2">Publicación</h6>
                        </div>
                    </div>
                </div>
                <div className="container-servicio-3">
                    <div className="servicio-3">
                        <img src={web6}></img>
                        <div className="descripcion-3">
                            <h6 className="encabezado-servicio-3">Mantenimiento</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicioWeb;
