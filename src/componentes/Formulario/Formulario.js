import styled from 'styled-components';
import videoFormulario from '../../imagenes/formulario-robot.webp'
import { ContactoForm } from './ContactoForm';
import { motion } from "framer-motion"

function Formulario() {
    return (
        <>
            <ContenedorCirculo1>
                <div className='circuloBorde'></div>
            </ContenedorCirculo1>


            <FormularioContainer id='contacto'>
                <div className='content'>
                    <motion.div
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='info-container'
                    >

                        <h3>El primer paso empieza acá..</h3>
                        <ContactoForm />

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='video-container'
                    >
                        <img
                            src={videoFormulario}
                            alt='robot-saludando'
                        />
                    </motion.div>
                </div>






            </FormularioContainer>

        </>

    );
}

export default Formulario;

const FormularioContainer = styled.section`
    padding-top:4vh;
    @media only screen and (max-width: 1024px) {
        height: auto;
    }
    .content{
        width: 70%;
        margin: 6rem auto 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2%;
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
                font-weight: 700;
                color: #323333;
                font-size: 4rem;
                line-height: 5rem;
                margin-bottom: 4rem;
                @media only screen and (max-width: 1024px) {
                    font-size: 3rem;
                    line-height: 4rem;
                    font-weight: 600;
                }
                @media only screen and (max-width: 600px) {
                    font-size: 2.4rem;
                    line-height: 4rem;
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
                width: 100%;
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
    margin-top: 2rem;
    left: 4rem;
    @media only screen and (max-width: 1450px) {
        left: 2rem;
    }
    @media only screen and (max-width: 1024px) {
        left: 0rem;
    }

    .circuloBorde{
        width: 22rem;
        height: 22rem;
        background-color: transparent;
        border: 1px solid #007296;
        border-radius: 50%;
        position: absolute;
        @media only screen and (max-width: 1550px) {
            width: 16rem;
            height: 16rem;
        }
        @media only screen and (max-width: 1450px) {
            width: 10rem;
            height: 10rem;
        }
        @media only screen and (max-width: 1024px) {
            width: 5rem;
            height: 5rem;
        }
    }
`

