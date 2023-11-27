import styled from 'styled-components';
import videoServicios from '../../imagenes/servicios-robot.webp'
import { motion } from "framer-motion"

function Servicios() {
    return (
        <>
            <ContenedorCirculo1>
                <div className='circuloRelleno'></div>
                <div className='circuloBorde'></div>
            </ContenedorCirculo1>
            <ContenedorCirculo2>
                <div className='circuloRelleno'></div>
                <div className='circuloBorde'></div>
            </ContenedorCirculo2>

            <ServiciosContainer id='servicios'>
                <div className='content'>
                    <motion.div
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='info-container'
                    >

                        <h3>Descubrí nuestros servicios.</h3>
                        <div className='items-container'>
                            <div className='item'>
                                <div className='item-icon'>
                                    <ion-icon name="code-outline" size="large"></ion-icon>
                                </div>
                                <div className='item-text'>
                                    <h5>Desarrollo de Aplicaciones Web</h5>
                                    <p>Nos especializamos en el desarrollo de aplicaciones web innovadoras y funcionales que se adaptan a las necesidades específicas de tu negocio. Desde el diseño inicial hasta la implementación final, trabajamos de la mano contigo para asegurarnos de que cada detalle de tu visión se refleje en la aplicación.</p>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='item-icon'>
                                    <ion-icon name="analytics-outline" size="large"></ion-icon>
                                </div>
                                <div className='item-text'>
                                    <h5>Optimización y Mantenimiento</h5>
                                    <p>Sabemos que el lanzamiento de tu sitio web es solo el comienzo. Es por eso que ofrecemos servicios integrales de optimización y mantenimiento para garantizar que tu plataforma funcione de manera óptima en todo momento.</p>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='item-icon'>
                                    <ion-icon name="construct-outline" size="large"></ion-icon>
                                </div>
                                <div className='item-text'>
                                    <h5>Consultoría Tecnológica</h5>
                                    <p>Sabemos que el lanzamiento de tu sitio web es solo el comienzo. Es por eso que ofrecemos servicios integrales de optimización y mantenimiento para garantizar que tu plataforma funcione de manera óptima en todo momento.</p>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='item-icon'>
                                    <ion-icon name="settings-outline" size="large"></ion-icon>
                                </div>
                                <div className='item-text'>
                                    <h5>Automatización de Procesos</h5>
                                    <p>En el corazón de nuestra filosofía empresarial se encuentra el compromiso con la eficiencia y la optimización de procesos. Nos especializamos en la automatización de tareas y flujos de trabajo, liberándote de las tareas repetitivas y permitiéndote enfocarte en aspectos estratégicos de tu negocio.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='video-container'
                    >
                        <img
                            src={videoServicios}
                            alt='robot-chekeando'
                        />
                    </motion.div>
                </div>
            </ServiciosContainer>
        </>

    );
}

export default Servicios;

const ServiciosContainer = styled.section`
    height: 100vh;
    padding-top: 4vh;
    @media only screen and (max-width: 1024px) {
        height: auto;
    }
    .content{
        width: 70%;
        margin: 6rem auto 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3%;
        @media only screen and (max-width: 1024px) {
            margin: 4rem auto 0 auto;
        }

        @media only screen and (max-width: 1520px) {
            width: 78%;
        }

        @media only screen and (max-width: 1024px) {
            width: 90%;
        }

        .info-container{
            display: flex;
            flex-direction: column;
            width: 60%;
            @media only screen and (max-width: 1180px) {
                width: 100%;
            }
            h3{
                font-weight: 600;
                color: #323333;
                font-size: 2rem;
                margin-bottom: 4rem;
                @media only screen and (max-width: 1024px) {
                    margin-bottom: 2rem;
                }
            }

            .items-container{

                .item{
                    display: flex;
                    flex-direction: row;
                    margin: .2rem 0;

                    .item-icon{
                        background-color: #5CBCDB;
                        border-radius: 50%;
                        height: 3rem;
                        width: 3rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        @media only screen and (max-width: 1024px) {
                            display: none;
                        }
                    }

                    .item-text{
                        margin-left: 4rem;
                        @media only screen and (max-width: 1024px) {
                            margin-left: 0;
                        }
                        @media only screen and (max-width: 560px) {
                            text-align: center;
                        }

                        h5{
                            font-weight: 600;
                            font-size: 1.2rem;
                        }

                        p{
                            font-size: 1rem;
                            font-weight: 300;
                        }
                    }
                }
            }
        }

        .video-container{
            width: 38%;
            display: flex;
            justify-content: center;
            align-items: center;
            @media only screen and (max-width: 1180px) {
                display: none;
            }
            img{
                width: 30rem;
                margin: auto;
                @media only screen and (max-width: 1520px) {
                    width: 24rem;
                }
                @media only screen and (max-width: 1220px) {
                    width: 20rem;
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
    @media only screen and (max-width: 1024px) {
        display: none;
    }
    .circuloRelleno{
        width: 9rem;
        height: 9rem;
        background-color: #5CBCDB;
        border-radius: 50%;
        position: absolute;
        @media only screen and (max-width: 1024px) {
            width: 4rem;
            height: 4rem;
        }
    }

    .circuloBorde{
        width: 10rem;
        height: 10rem;
        background-color: none;
        border: 1px solid #5CBCDB;
        border-radius: 50%;
        position: absolute;
        @media only screen and (max-width: 1024px) {
            width: 5rem;
            height: 5rem;
        }
    }
`

const ContenedorCirculo2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 50rem;
    right: 4rem;
    @media only screen and (max-width: 1520px) {
        right: 2rem;
    }
    @media only screen and (max-width: 1220px) {
        right: 1rem;
    }
    @media only screen and (max-width: 1024px) {
        right: 2rem;
        margin-top: 40rem;
        display: none;
    }
    .circuloRelleno{
        width: 22rem;
        height: 22rem;
        background-color: #007296;
        border-radius: 50%;
        position: absolute;
        @media only screen and (max-width: 1520px) {
            width: 18rem;
            height: 18rem;
        }
        @media only screen and (max-width: 1220px) {
            width: 14rem;
            height: 14rem;
        }
        @media only screen and (max-width: 1024px) {
            display: none;
        }
    }

    .circuloBorde{
        width: 23rem;
        height: 23rem;
        background-color: none;
        border: 1px solid #007296   ;
        border-radius: 50%;
        position: absolute;
        @media only screen and (max-width: 1520px) {
            width: 19rem;
            height: 19rem;
        }
        @media only screen and (max-width: 1520px) {
            width: 15rem;
            height: 15rem;
        }
        @media only screen and (max-width: 1024px) {
            width: 6rem;
            height: 6rem;
            opacity: .2;
        }
    }
`
