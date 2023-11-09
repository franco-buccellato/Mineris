import "./SeccionNosotros.css";
import logoMineris from '../../imagenes/logotipo-mineris.png';
import animacionFranco from '../../imagenes/emoji-franco-trabajando.png';
import animacionNicolas from '../../imagenes/emoji-franco-trabajando.png';
/* import animacionAgustina from '../../imagenes/agustina-franco.png'; */
import React from 'react';

function SeccionNosotros() {

    return (
        <div className="section-nosotros" id="nosotros">
            <div className="section-nosotros-titulo">
                <h2 className="display-6">NOSOTROS</h2>
            </div>  
            <div className="section-nosotros-descripcion">
                <img alt="Logo Mineris" src={logoMineris}></img>
                <h6 className="display-6-configurado">
                    Somos tu socio confiable en el mundo del desarrollo de aplicaciones web.<br></br>
                    En nuestra startup, combinamos la creatividad con la tecnología de vanguardia para dar vida a tus ideas digitales.<br></br>Ya sea que necesites una aplicación web robusta para tu negocio o una solución personalizada para revolucionar tu industria, estamos aquí para convertir tus visiones en realidad.<br></br>
                    Nuestro equipo apasionado de expertos en desarrollo trabaja en estrecha colaboración contigo, desde la concepción hasta la implementación, asegurando que cada detalle esté perfectamente afinado.<br></br>
                    Descubre cómo podemos transformar tus sueños digitales en experiencias web impactantes y funcionales.
                </h6>
            </div>
            <div className="section-nosotros-container-cards-1">
                <div className="section-nosotros-card-1">
                    <img src={animacionFranco} alt="Imagen Franco Buccellato"></img>
                    <h5>Franco Buccellato</h5>
                    <h6>Fundador</h6>
                </div>
                <div className="section-nosotros-card-1-descripcion">
                    {/* <span>- Técnico Informático.</span>
                    <span>- Estudiante de Ingeniería en Sistemas de Información.</span> */}
                    <span>- Coordinador de Proyectos.</span>
                    <span>- Team Leader.</span>
                    <span>- Desarrollador Frontend.</span>
                    <span>- Analista Funcional.</span>
                    <span>- Desarrollador RPA.</span>
                </div>
            </div>
            <div className="section-nosotros-container-cards-2">
                <div className="section-nosotros-card-2-descripcion">
                    <span>- Desarrollador Backend.</span>
                    <span>- Desarrollador RPA.</span>
                </div>
                <div className="section-nosotros-card-2">
                    <img src={animacionNicolas} alt="Imagen Nicolas Postigo"></img>
                    <h5>Nicolas Postigo</h5>
                    <h6>Tech Lead</h6>
                </div>
            </div>
            <div className="section-nosotros-container-cards-1">
                <div className="section-nosotros-card-1">
                    <img src={animacionFranco} alt="Imagen Franco Buccellato"></img>
                    <h5>Adrian Rivadera</h5>
                    <h6>Desarrollador Frontend</h6>
                </div>
                <div className="section-nosotros-card-1-descripcion">
                    {/* <span>- Técnico Informático.</span>
                    <span>- Estudiante de Ingeniería en Sistemas de Información.</span> */}
                    <span>- Diseñador Web y Experiencias de usuario.</span>
                    <span>- Desarrollador Frontend.</span>
                    <span>- Desarrollador RPA.</span>
                </div>
            </div>
{/*             <div className="section-nosotros-container-cards-1">
                <div className="section-nosotros-card-1">
                    <img src={animacionAgustina} alt="Imagen Agustina Franco"></img>
                    <h5>María Agustina Franco</h5>
                    <h6>Líder Marketing</h6>
                </div>
                <div className="section-nosotros-card-1-descripcion">
                    <span>- Licenciada en Relaciones Públicas e Institucionales.</span>
                    <span>- Community Manager.</span>
                    <span>- Especialista en Email Marketing.</span>
                    <span>- Diseñadora de piezas comunicacionales digitales.</span>
                    <span>- Project Development.</span>
                </div>
            </div> */}
        </div>
    );
}

export default SeccionNosotros;
