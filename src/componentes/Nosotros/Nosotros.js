import styled from 'styled-components';
import stikerFran from '../../imagenes/stiker-Franco.webp'
import stikerAdri from '../../imagenes/stiker-Adrian.webp'
import stikerNico from '../../imagenes/stiker-Nico.webp'
import videoNosotros from '../../imagenes/nosotros-robot.webp'
import { motion } from "framer-motion"


function Nosotros() {
    return (
        <>
            <ContenedorCirculo1>
                <div className='circuloRelleno'></div>
                <div className='circuloBorde'></div>
            </ContenedorCirculo1>

            <NosotrosContainer id='nosotros'>
                <div className='content'>
{/*                     <motion.div
                        initial={{ opacity: 0, y: -120 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='frase-container'
                    >
                        <span>Somos tu socio confiable en el mundo del desarrollo de aplicaciones web. En nuestra startup, combinamos la creatividad con la tecnología de vanguardia para dar vida a tus ideas digitales.</span>
                    </motion.div> */}
                    <div className='main-container'>
                        <motion.div
                            initial={{ opacity: 0, x: 120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}
                            exit={{ opacity: 0 }}
                            className='info-container'
                        >
                            <h3>Quiénes Somos</h3>
                            <div className='items-container'>

                                <div className='item'>
                                    <div className='perfil-container'>
                                        <img
                                            src={stikerFran}
                                            alt='Foto Perfil - Franco Buccellato'
                                        />
                                    </div>
                                    <div className='item-text'>
                                        <div className='nombre-container'>
                                            <h5>Franco Buccellato - Fundador</h5>
                                            <a href='https://www.linkedin.com/in/franco-buccellato-395961a7/' target='__blank'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" /></svg></a>
                                        </div>
                                        <p>Es el visionario detrás de nuestra startup, un apasionado del desarrollo web con una visión clara y un enfoque pragmático.
                                            Como fundador, no solo lidera nuestro equipo, sino que también desempeña un papel clave como desarrollador Fullstack, aportando una experiencia técnica profunda en cada proyecto. Su capacidad para organizar y coordinar es fundamental para mantenernos en la vanguardia de la innovación.
                                            Con una mentalidad estratégica, Fran guía a nuestro equipo hacia el éxito.
                                        </p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <div className='perfil-container'>
                                        <img
                                            src={stikerNico}
                                            alt='Foto Perfil - Nicolas Postigo'
                                        />
                                    </div>
                                    <div className='item-text'>
                                        <div className='nombre-container'>
                                            <h5>Nicolas Postigo - Tech Lead</h5>
                                            <a href='https://www.linkedin.com/in/nicolas-postigo/' target='__blank'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" /></svg></a>
                                        </div>
                                        <p>Es la mente meticulosa detrás de la eficiencia de nuestros sistemas.
                                            Como desarrolladora backend, se sumerge en el código con precisión y atención al detalle. Su enfoque meticuloso garantiza que cada línea de código esté optimizada y que las bases tecnológicas de nuestros proyectos sean sólidas y seguras.
                                            Nico no solo resuelve desafíos técnicos complejos, sino que también aporta un sentido innato de organización que eleva la calidad de nuestro trabajo.
                                        </p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <div className='perfil-container'>
                                        <img
                                            src={stikerAdri}
                                            alt='Foto Perfil - Adrian Rivadera'
                                        />
                                    </div>
                                    <div className='item-text'>
                                        <div className='nombre-container'>
                                            <h5>Adrián Rivadera - Desarrollador Front End</h5>
                                            <a href='https://www.linkedin.com/in/adrian-rivadera/' target='__blank'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" /></svg></a>
                                        </div>
                                        <p>El artista detrás de la interfaz de usuario impresionante y la experiencia de usuario intuitiva en cada proyecto.
                                            Como desarrollador frontend y diseñador web, Adri fusiona habilidades técnicas con una creatividad excepcional.
                                            Su enfoque centrado en el usuario se refleja en cada línea de código y en cada elemento visual.
                                            Además de su destreza técnica, aporta una perspectiva creativa que transforma las ideas en experiencias web cautivadoras.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}
                            exit={{ opacity: 0 }}
                            className='video-container'
                        >
                            <img
                                src={videoNosotros}
                                alt='Robot-ayudando'
                            />

                        </motion.div>
                    </div>

                </div>

            </NosotrosContainer>
        </>

    );
}

export default Nosotros;

const NosotrosContainer = styled.section`
    height: 100vh;
    padding-top: 4vh;
    @media only screen and (max-width: 1024px) {
        height: auto;
    }
    .content{
        width: 70%;
        margin: 6rem auto 0 auto;
        gap: 10%;
        @media only screen and (max-width: 1024px) {
            margin: 4rem auto 0 auto;
        }

        @media only screen and (max-width: 1520px) {
            width: 78%;
        }

        @media only screen and (max-width: 1024px) {
            width: 90%;
        }

        .frase-container{
            width: 80%;
            margin: auto;
            text-align: center;
            @media only screen and (max-width: 1024px) {
                width: 100%;
            }
            span{
                font-style: italic;
            }
        }

        .main-container{
            margin-top: 4rem;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            gap: 5%;
            @media only screen and (max-width: 1350px) {
                gap: 0;
            }


            .info-container{
                display: flex;
                flex-direction: column;
                width: 65%;
                @media only screen and (max-width: 1350px) {
                    width: 100%;
                }

                h3{
                    font-weight: 600;
                    color: #323333;
                    font-size: 2rem;
                    margin-bottom: 2rem;
                    text-align: end;
                }

                .items-container{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    .item{
                        width: 100%;
                        height: auto;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 2rem;

                        @media only screen and (max-width: 1024px) {
                            flex-direction: column;
                        }

                        .perfil-container{
                            background-color: #5CBCDB;
                            border-radius: 50%;
                            height: 7rem;
                            width: 7rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            img{
                                width: 7rem;
                            }
                        }
                        .item-text{

                            .nombre-container{
                                display: flex;
                                gap: 1rem;
                                margin-bottom: 1rem;
                                @media only screen and (max-width: 1024px) {
                                    justify-content: center;
                                }
                                h5{
                                    @media only screen and (max-width: 1024px) {
                                        text-align: center;
                                    }
                                }
                                a{
                                    svg{
                                        width: 24px;
                                        height: 24px;
                                    }
                                }
                            }

                            p{
                                font-size: 1rem;
                                font-weight: 300;
                                @media only screen and (max-width: 1024px) {
                                    text-align: center;
                                }
                            }
                        }

                        
                    }
                }
            }

            .video-container{
                width: 30%;
                display: flex;
                justify-content: center;
                align-items: center;
                @media only screen and (max-width: 1350px) {
                    display: none;
                }

                img{
                    width: 24rem;
                    margin: auto;
                }
            }
        }
       
    }
`

















const ContenedorCirculo1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 8rem;
    display: none;
    @media only screen and (max-width: 1024px) {
        margin-top: 4rem;
        right: 0;
    }
    .circuloRelleno{
        width: 18rem;
        height: 18rem;
        background-color: #007296;
        border-radius: 50%;
        position: absolute;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        @media only screen and (max-width: 1024px) {
            width: 4rem;
            height: 4rem;
        }
    }

    .circuloBorde{
        width: 36rem;
        height: 36rem;
        background-color: none;
        border: 1px solid #007296;
        border-radius: 50%;
        position: absolute;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        @media only screen and (max-width: 1500px) {
            width: 28rem;
            height: 28rem;
        }
        @media only screen and (max-width: 1280px) {
            width: 20rem;
            height: 20rem;
        }
        @media only screen and (max-width: 1024px) {
            width: 5rem;
            height: 5rem;
        }
    }
`

