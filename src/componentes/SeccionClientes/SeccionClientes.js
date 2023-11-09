import "./SeccionClientes.css";
import iconoFacebook from '../../imagenes/icono-facebook.png';
import iconoInstagram from '../../imagenes/icono-instagram.png';
import iconoLinkedin from '../../imagenes/icono-linkedin.png';
import iconoYotube from '../../imagenes/icono-youtube.png';
/* import iconoReact from '../../imagenes/icono-react.png';
import iconoPython from '../../imagenes/icono-python.png';
import iconoFirebase from '../../imagenes/icono-firebase.png';
import iconoHTML from '../../imagenes/icono-html.png'; */
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function SeccionClientes() {
    
    return (
        <section className="section-clientes" id="clientes">
            <div className="section-clientes-titulo">
                <h2 className="display-6">CLIENTES Y TRABAJOS</h2>
            </div>
            <div className="container-clientes">
                {/* <CardGroup> */}
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card>
                            <Card.Header>Plataforma Web en Proceso <ion-icon name="hourglass-outline"></ion-icon></Card.Header>
                            <iframe src="https://front-doc-online.vercel.app/" width='100%' height='310px'></iframe>
                            <Card.Body>
                                <Card.Title>Doc Online</Card.Title>
                                <Card.Text>
                                Diseño y Desarrollo de página web y aplicación web. Esta plataforma permite a los usuarios finales crear un usuario, completar el formulario, solicitar un turno médico y realizar completamente su trámite de REPROCANN. Por otra parte, al administrador de la plataforma le permite la gestión de todos tus usuarios, turnos, seguimientos y configuraciones para que el usuario final pueda completar su proceso y tenga una experiencia de calidad.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Página Web</Card.Header>
                            <iframe src="http://www.amidagroup.com.ar/" width='100%' height='310px'></iframe>
                            <Card.Body>
                                <Card.Title>Amido Group</Card.Title>
                                <Card.Text>
                                    Diseño y Desarrollo de página web, con formulario de contacto.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Página Web en Proceso <ion-icon name="hourglass-outline"></ion-icon></Card.Header>
                            <iframe src="https://dealcargo-front.vercel.app/" width='100%' height='310px'></iframe>
                            <Card.Body>
                                <Card.Title>Deal Cargo</Card.Title>
                                <Card.Text>
                                    Diseño y Desarrollo de página web, con formulario de contacto, acceso directo a redes, publicaciones de Linkedin destacadas, carousel de clientes.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Página Web</Card.Header>
                            <iframe src="http://www.mecaelectromecanica.com.ar/" width='100%' height='310px'></iframe>
                            <Card.Body>
                                <Card.Title>Meca Electromecanica S.A.</Card.Title>
                                <Card.Text>
                                    Diseño y Desarrollo de página web, con distintas secciones, formulario de contacto, accesos rápidos a redes sociales, últimas publicaciones de linkedin embebidas.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Marketing Digital</Card.Header>
                            <div className="container-redes-sociales">
                                <div className="redes-sociales">
                                    <a href="https://www.facebook.com/mecaelectromecanica/" target="_blanck" rel="noreferrer">
                                        <img src={iconoFacebook} alt="icono-facebook"></img>
                                    </a>
                                </div>
                                <div className="redes-sociales">
                                    <a href="https://www.instagram.com/mecaelectromecanica/" target="_blanck" rel="noreferrer">
                                        <img src={iconoInstagram} alt="icono-instagram"></img>
                                    </a>
                                </div>
                                <div className="redes-sociales">
                                    <a href="https://www.linkedin.com/company/meca-electromec%C3%A1nica-s-a" target="_blanck" rel="noreferrer">
                                        <img src={iconoLinkedin} alt="icono-linkedin"></img>
                                    </a>
                                </div>
                                <div className="redes-sociales">
                                    <a href="https://www.youtube.com/channel/UCohcytkhjFq7If3w8YTZ17g" target="_blanck" rel="noreferrer">
                                        <img src={iconoYotube} alt="icono-yotube"></img>
                                    </a>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Title>Meca Electromecanica S.A.</Card.Title>
                                <Card.Text>
                                    Manejo, potenciación de Redes Sociales y campañas de publicidad paga en Linkedin, Facebook, Instagram y Youtube.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Aplicación Web</Card.Header>
                            <iframe src="https://tensoresfosters.azurewebsites.net/" width='100%' height='310px'></iframe>
                                <Card.Body>
                                <Card.Title>Foster's</Card.Title>
                                <Card.Text>
                                    Diseño y Desarrollo de catálogo web, ABM de usuarios, carrito de compras, envío de ordenes vía e-mail. Se realizo un CRUD MERN (Mongo DB, Express JS, React JS y Node JS) implementado en Azure. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
{/*                     <Col>
                        <Card>
                            <Card.Header>Mejora de Procesos</Card.Header>
                            <div className="container-desarrollo">
                                <div className="desarrollo">
                                    <img src={iconoHTML} alt="icono-html"></img>
                                </div>
                                <div className="desarrollo">
                                    <img src={iconoReact} alt="icono-react"></img>
                                </div>
                                <div className="desarrollo">
                                    <img src={iconoPython} alt="icono-python"></img>
                                </div>
                                <div className="desarrollo">
                                    <img src={iconoFirebase} alt="icono-firebase"></img>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Title>Meca Electromecanica S.A.</Card.Title>
                                <Card.Text>
                                    Desarrollo de Plataforma Web Interna para la gestión de los procesos internos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
                {/* </CardGroup> */}
            </div>
        </section>
    );
}

export default SeccionClientes;
