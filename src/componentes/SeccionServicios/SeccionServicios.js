import "./SeccionServicios.css";
import web from '../../imagenes/servicios-web.png';
import marketing from '../../imagenes/servicios-marketing.png';
import app from '../../imagenes/servicios-app.png';
import rpa from '../../imagenes/servicios-rpa.png';


import Accordion from 'react-bootstrap/Accordion';

function SeccionServicios() {
    
    return (
        <section className="section-servicio" id="servicios">
            <div className="section-servicio-titulo">
                <h2 className="display-6">SERVICIOS</h2>
            </div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2 className="titulo-servicio-1">Diseño y Desarrollo WEB</h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="servicios-container-1">
                            <div className="container-servicio-1-imagen">
                                <img src={web}></img>
                            </div>
                            <div className="container-servicio-1">
                                <span className="servicio-descripcion">
                                    ¿El porqué de tener una Página WEB?<br></br>
                                    - Uno de los principales motivos es que cualquiera fuera el cliente (persona o empresa) lo primero que va a hacer,
                                    antes de cerrar el trato, es verificar las Página WEB y las redes sociales.<br></br><br></br>
                                    ¿Que produce tener una Página WEB?<br></br>
                                    - Produce confianza en el cliente, ya que da mayor seriedad y despliegue tener una web aunque sea informativa.
                                    El cliente accediendo a la web ya posee datos de contacto y los distintos medios de comunicación.<br></br><br></br>
                                    ¿Cuales son las ventajas de tener una Página WEB?<br></br>
                                    - Mantener a nuestros clientes siempre informados de las actualizaciones, nuevos servicios, nuevos productos,
                                    nuevos trabajos realizados y de los nuevos clientes obtenidos.<br></br>
                                    - Accesibilidad todo el tiempo a la información de la empresa, sin importar día ni horarios.<br></br>
                                    - Mayor audiencia, ya que pueden acceder desde cualquier parte del mundo.<br></br>
                                </span>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2 className="titulo-servicio-1">Aplicaciones WEB</h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="servicios-container-1">
                            <div className="container-servicio-1-imagen">
                                <img src={app}></img>
                            </div>
                            <div className="container-servicio-1">
                                <span className="servicio-descripcion">
                                    - ¿En qué se diferencia una Página Web de una Aplicación Web?<br></br>
                                    Una de las diferencias más notorias son que las páginas web son páginas estáticas que presentan de una manera más óptima y ordenada información.<br></br>
                                    En cambio una aplicación web son plataformas que permiten interactuar al usuario y que estos puedan realizar acciones.<br></br><br></br>
                                    - ¿Se utilizan distintas tecnologías?<br></br>
                                    Si hablamos de la parte visible mejor llamada interfaz se pueden utilizar las mismas tecnologías y lenguajes.<br></br>
                                    Ahora cuando nos adentramos más empiezan a aparecer nuevas tecnologías y lenguajes como Node JS, Express JS para realizar el backend y Mongo DB para almacenar los datos.
                                </span>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h2 className="titulo-servicio-1">Mejora de Procesos - RPA</h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="servicios-container-1">
                            <div className="container-servicio-1-imagen">
                                <img src={rpa}></img>
                            </div>
                            <div className="container-servicio-1">
                                <span className="servicio-descripcion">
                                    - ¿Poseén tareas o procesos que realizan repetidamente? ¿Cuantos?<br></br>
                                    - ¿Con qué periodicidad se repiten? ¿Mensualmente? ¿Semanalmente? ¿Diariamente?<br></br>
                                    - ¿Obligatoriamente tiene que realizarse por una persona o es más procedural, lo cual no requiere un análisis humano?<br></br>
                                    - ¿Creen que se podrían hacer automáticamente?<br></br>
                                    - ¿Sería más provechoso para el trabajo sólo controlar el resultado de esas tareas?<br></br><br></br>
                                    Si el análisis demuestra que realmente poseen tareas o procesos repetitivos, que no necesariamente tienen que ser efectuados por una persona, dando la posibilidad a que la misma pueda invertir ese tiempo para mejorar la calidad del proceso y/o un mayor control, entonces creemos que está en lo correcto consultando esta web.<br></br>
                                    Por ende te proponemos que te contactes con nosotros para que te asesoramos y además consultes la sección "Cómo Trabajamos" para más información.
                                </span>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h2 className="titulo-servicio-1">Marketing Digital</h2></Accordion.Header>
                    <Accordion.Body>
                        <div className="servicios-container-1">
                            <div className="container-servicio-1">
                                <span className="servicio-descripcion">
                                    ¿Que es el Marketing Digital?<br></br>
                                    - En resumen es el conjunto de estrategias volcadas hacia la promoción de una marca en el internet;
                                    y la diferencia con el marketing tradicional es por incluir el uso de canales y métodos que permiten el
                                    análisis de los resultados en tiempo real.<br></br><br></br>
                                    ¿Cual es la importancia de hacer Marketing Digital?<br></br>
                                    - Ayuda a orientar a las empresas hacia un público objetivo. Hoy día no se puede permanecer ajenos al mercado,
                                    por eso los especialistas de marketing deben ser capaces de entender qué es lo que dice el mercado o entorno del mercado.<br></br><br></br>
                                    ¿Que logramos con el Marketing Digital?<br></br>
                                    - Además de atraer clientes, ayuda a fidelizarlos.<br></br>
                                    - Construir una audiencia.<br></br>
                                    - Mejorar el posicionamiento digital.<br></br>
                                    - Reducir el ciclo de ventas.
                                </span>
                            </div>
                            <div className="container-servicio-1-imagen">
                                <img src={marketing}></img>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    );
}

export default SeccionServicios;
