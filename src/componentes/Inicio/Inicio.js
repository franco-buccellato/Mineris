import "./Inicio.css";
import Carousel from "react-bootstrap/Carousel";

import imagenCarrousel1 from '../../imagenes/innovacion-carousel.png';
import imagenCarrousel3 from '../../imagenes/desarrollo-carousel.png';
import imagenCarrousel4 from '../../imagenes/marketing-carousel.png';
import imagenCarrousel5 from '../../imagenes/rpa-carousel.png';

function Inicio() {
    return (
        <Carousel>
{            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagenCarrousel1}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption-1">
                    <div className="card-innovacion-carousel-caption">
                        <h3>INNOVE EN SU ORGANIZACIÓN INCORPORANDO TECNOLOGÍA EN LAS DISTINTAS ÁREAS.</h3>
                        <p>Mineris es su aliado Tecnológico</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagenCarrousel3}
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption-2">
                    <div className="card-desarrollo-carousel-caption">
                        <h3>DISEÑE Y DESARROLLE UN WEB PARA MOSTRARSE EN ESTA ERA TECNOLÓGICA.</h3>
                        <p>Mineris es su aliado Tecnológico</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagenCarrousel4}
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption-3">
                    <div className="card-marketing-carousel-caption">
                        <h3>POTENCIE SUS REDES SOCIALES, AMPLÍE SU ALCANCE Y LOGRE CAPTAR NUEVOS CLIENTES.</h3>
                        <p>Mineris es su aliado Tecnológico</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagenCarrousel5}
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption-4">
                    <div className="card-rpa-carousel-caption">
                        <h3>INCORPORE TECNOLOGÍA EN SUS PROCESOS DIARIOS LOGRANDO OPTIMIZAR ASÍ SUS TIEMPOS.</h3>
                        <p>Mineris es su aliado Tecnológico</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Inicio;
