import "./SeccionComoTrabajamos.css";
import web1 from '../../imagenes/relevamiento-web.png';
import web2 from '../../imagenes/planificacion-web.png';
import web3 from '../../imagenes/diseño-web.png';
import web4 from '../../imagenes/desarrollo-web.png';
import web5 from '../../imagenes/lanzamiento-web.png';
import web6 from '../../imagenes/mantenimiento-web.png';
import marketing1 from '../../imagenes/1-marketing.png';
import marketing2 from '../../imagenes/2-marketing.png';
import marketing3 from '../../imagenes/3-marketing.png';
import servicioAnimacion1 from '../../imagenes/servicio-animacion-3.gif';
import servicioAnimacion2 from '../../imagenes/servicio-animacion-2.gif';
import servicioAnimacion3 from '../../imagenes/servicio-animacion-1.gif';

import Accordion from 'react-bootstrap/Accordion';

function SeccionComoTrabajamos() {
    
    return (
        <section className="section-como-trabajamos" id="comoTrabajamos">
            <div className="section-como-trabajamos-titulo">
                <h2 className="display-6">COMO TRABAJAMOS</h2>
            </div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2 className="titulo-como-trabajamos-1">¿Como logramos un buen Diseño WEB y el Desarrollo de la misma?</h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="como-trabajamos-container-1-1">
                            <div className="container-como-trabajamos-1">
                                <div className="como-trabajamos-1">
                                    <img src={web1} alt="img-web-1"></img>
                                    <div className="descripcion-1">
                                        <h6 className="encabezado-como-trabajamos-1">Relevamiento</h6>
                                        <span className="como-trabajamos-descripcion">
                                            Nuestro primer paso es:<br></br>
                                            - Conocernos.<br></br>
                                            - Ver que es lo que le gusta al cliente.<br></br>
                                            - Identificar cuál es su rubro.<br></br>
                                            - Interpretar y entender qué quieren mostrar en la web.<br></br>
                                            - Identificar a que publico desea apuntar.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-como-trabajamos-2">
                                <div className="como-trabajamos-2">
                                    <img src={web2} alt="img-web-2"></img>
                                    <div className="descripcion-2">
                                        <h6 className="encabezado-como-trabajamos-2">Planificación</h6>
                                        <span className="como-trabajamos-descripcion">
                                            Nuestro segundo paso es:<br></br>
                                            - Teniendo toda la información relevada planificar el posible contenido de la web.<br></br>
                                            - Armar la estructura de la página.<br></br>
                                            - Estructurar las secciones y contenido.<br></br>
                                            - Comunicación con el cliente para su aprobación.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-como-trabajamos-3">
                                <div className="como-trabajamos-3">
                                    <img src={web3} alt="img-web-3"></img>
                                    <div className="descripcion-3">
                                        <h6 className="encabezado-como-trabajamos-3">Diseño</h6>
                                        <span className="como-trabajamos-descripcion">
                                            Nuestro tercer paso es:<br></br>
                                            - En base a la información obtenida y la aprobación de la estructura del cliente empezar con el diseño de la web.<br></br>
                                            - Definir la gama de colores a utilizar.<br></br>
                                            - Estructurar las secciones y contenido.<br></br>
                                            - Comunicación con el cliente para su aprobación.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="como-trabajamos-container-1-2">
                            <div className="container-como-trabajamos-1">
                                <div className="como-trabajamos-1">
                                    <img src={web4} alt="img-web-4"></img>
                                    <div className="descripcion-1">
                                        <h6 className="encabezado-como-trabajamos-1">Desarrollo</h6>
                                        <span className="como-trabajamos-descripcion">
                                            Nuestro cuarto paso es:<br></br>
                                            - Selecionar las tecnologías a utilizar.<br></br>
                                            - Comenzar con el desarrollo de la web.<br></br>
                                            - Interacción constante con el cliente para ir mostrando los avances.<br></br>
                                            - Posibles cambios o correcciones en esta etapa.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-como-trabajamos-2">
                                <div className="como-trabajamos-2">
                                    <img src={web5} alt="img-web-5"></img>
                                    <div className="descripcion-2">
                                        <h6 className="encabezado-como-trabajamos-2">Publicación</h6>
                                        <span className="como-trabajamos-descripcion">
                                            Nuestro quinto paso es:<br></br>
                                            - Selecionar el dominio y hosting.<br></br>
                                            - Configuración del Hosting.<br></br>
                                            - Subir y publicar la página web.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-como-trabajamos-3">
                                <div className="como-trabajamos-3">
                                    <img src={web6} alt="img-web-6"></img>
                                    <div className="descripcion-3">
                                        <h6 className="encabezado-como-trabajamos-3">Mantenimiento</h6>
                                        <span className="como-trabajamos-descripcion">
                                            Nuestro sexto y último paso es:<br></br>
                                            - Proporcionar mantenimiento a la web.<br></br>
                                            - Actualizarla y realizar modificaciones a pedido.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2 className="titulo-como-trabajamos-1">¿Como hacemos para introducirte en el mundo de las Redes Sociales?</h2> </Accordion.Header>
                    <Accordion.Body>
                        <div className="como-trabajamos-container-2">
                            <div className="container-como-trabajamos-1">
                                <div className="como-trabajamos-1">
                                    <img src={marketing1} alt="img-mkt-1"></img>
                                    <div className="descripcion-1">
                                        <h6 className="encabezado-como-trabajamos-1">Conocernos</h6>
                                        <span className="como-trabajamos-descripcion">
                                            Nuestros primeros pasos son:<br></br>
                                            - Conocernos e identificar cuál es su rubro.<br></br>
                                            - Explicarle de qué se trata el marketing con redes sociales.<br></br>
                                            - Informar que redes sociales les conviene potenciar.<br></br>
                                            - Diseñar el plan de acción en particular y comunicarlo para llegar a un acuerdo.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-como-trabajamos-2">
                                <div className="como-trabajamos-2">
                                    <img src={marketing2} alt="img-mkt-2"></img>
                                    <div className="descripcion-2">
                                        <h6 className="encabezado-como-trabajamos-2">Plan de Acción</h6>
                                        <span className="como-trabajamos-descripcion">
                                            Nuestros siguientes pasos son:<br></br>
                                            - Comenzar con el plan de acción acordado. <br></br>
                                            - Empezar a estandarizar la visualización de las redes.<br></br>
                                            - Planificar y enviar el calendario de publicaciones.<br></br>
                                            - Comenzar con el potenciamiento de las redes.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-como-trabajamos-3">
                                <div className="como-trabajamos-3">
                                    <img src={marketing3} alt="img-mkt-"></img>
                                    <div className="descripcion-3">
                                        <h6 className="encabezado-como-trabajamos-3">Resultados</h6>
                                        <span className="como-trabajamos-descripcion">
                                            Durante el proceso:<br></br>
                                            - Análisis del plan de acción e impacto del mismo.<br></br>
                                            - Envío de informes con los indicadores y resultados obtenidos.<br></br>
                                            - Sugerencia de nuevos planes de acción.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h2 className="titulo-como-trabajamos-1">¿Que es la mejora de procesos o RPA y cómo se aplica?</h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="como-trabajamos-container-3">
                            <div className="container-como-trabajamos-1">
                                <div className="como-trabajamos-1">
                                    <img src={servicioAnimacion1} alt="img-rpa-1"></img>
                                    <div className="descripcion-1">
                                        <h6 className="encabezado-como-trabajamos-1">Reconocimiento</h6>
                                        <span className="como-trabajamos-descripcion">
                                            Durante el reconocimiento buscamos:<br></br>
                                            - Entender cuál es el trabajo que hacen.<br></br>
                                            - Entender cuál es su nivel de conocimientos en tecnología.<br></br>
                                            - Explicarles que es lo que hacemos nosotros y cómo podríamos ayudarlos en las tareas de su día a día.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-como-trabajamos-2">
                                <div className="como-trabajamos-2">
                                    <img src={servicioAnimacion2} alt="img-rpa-2"></img>
                                    <div className="descripcion-2">
                                        <h6 className="encabezado-como-trabajamos-2">Relevamiento</h6>
                                        <span className="como-trabajamos-descripcion">
                                            En esta instancia vamos más al detalle:<br></br>
                                            - Lograr entender su proceso integral.<br></br>
                                            - Identificar si son procesos aislados o si terminan siendo un proceso encadenado.<br></br>
                                            - Listar todos los procesos o tareas que podríamos optimizar.<br></br>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="container-como-trabajamos-3">
                                <div className="como-trabajamos-3">
                                    <img src={servicioAnimacion3} alt="img-rpa-3"></img>
                                    <div className="descripcion-3">
                                        <h6 className="encabezado-como-trabajamos-3">Propuesta:</h6>
                                        <span className="como-trabajamos-descripcion">
                                            Como último paso armamos una propuesta y se las presentamos. Tenemos diferentes soluciones para ofrecer y ellas son:<br></br>
                                            - Robots que hagan procesos puntuales satisfaciendo tareas específicas.<br></br>
                                            - Tableros de reportería con indicadores e índices claves.<br></br>
                                            - Plataformas Web la cual incluye las 2 soluciones anteriores.<br></br>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    );
}

export default SeccionComoTrabajamos;
