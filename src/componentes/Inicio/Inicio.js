import styled from 'styled-components';
import fondoInicio from '../../imagenes/fondo-landing-mineris.png'


function Inicio() {
    return (
        <InicioContainer id='inicio'>
            <CirculoFondoRelleno />
            <CirculoFondoBordes />

            <div className='content'>
                    <div className='container-text'>
                        <h1>Transformamos ideas <br /> en experiencias digitales.</h1>
                        <h3>El primer paso para tu proyecto comienza acá. <br /> ¡Contáctanos y comencemos!</h3>
                        <a href='#contacto'><button>Contáctanos</button></a>
                    </div>

                <div className='container-img'>
                    <img
                        src={fondoInicio}
                        alt='imagen-personas-trabajando'
                    />
                </div>

            </div>

        </InicioContainer>
    );
}

export default Inicio;

const InicioContainer = styled.section`
    width: 100%;
    height: 90vh;
    margin-top: 10vh;

    .content{
        width: 70%;
        margin: 0 auto;

        @media only screen and (max-width: 1520px) {
            width: 78%;
        }

        @media only screen and (max-width: 1024px) {
            width: 90%;
        }

        .container-text{
            text-align: center;
            height: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            
            h1{
                font-size: 2.8rem;
                width: 100%;
                margin-top: 4rem;
                font-weight: 600;
                @media only screen and (max-width: 1024px) {
                    font-size: 2.4rem;
                }
                @media only screen and (max-width: 710px) {
                    font-size: 2.2rem;
                }
                @media only screen and (max-width: 600px) {
                    font-size: 2rem;
                }
            }

            h3{
                margin: 1rem 0;
                font-weight: 400;
                font-size: 1.4rem;
                @media only screen and (max-width: 1024px) {
                    font-size: 1.3rem;
                }
                @media only screen and (max-width: 710px) {
                    font-size: 1.4rem;
                }
                @media only screen and (max-width: 600px) {
                    font-size: 1.4rem;
                }
            }

            button{
                background-color: transparent;
                color: #007296;
                width: 10rem;
                font-weight: 500;
                font-size: 1.2rem;
                padding: .4rem .8rem;
                border-radius: 2rem;
                border: none;
                margin-top: 1rem;
                transition: .4s;
                border: 1px solid #007296;
                &:hover{
                    background-color: #007296;
                    color: white;
                }
            }
        }
        .container-img{
            position: absolute;
            width: 100%;
            height: 49%;
            left: 0;
            bottom: 0;
            @media only screen and (max-width: 900px) {
                height: 40%;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
`
















const CirculoFondoRelleno = styled.div`
    position: absolute;
    width: 20rem;
    height: 20rem;
    background-color: #007296;
    border-radius: 50%;
    right: -10rem;
    top: -10rem;
    overflow-x: hidden; 
    @media only screen and (max-width: 1024px) {
        right: 0;
        top: -12rem;
        display: none;
    }
`



const CirculoFondoBordes = styled.div`
    position: absolute;
    width: 20.4rem;
    height: 20.4rem;
    background-color: none;
    border: 1px solid #007296;
    border-radius: 50%;
    right: -10rem;
    top: -10rem;
    @media only screen and (max-width: 1024px) {
        right: 0;
        top: -12rem;
        display: none;
    }
`