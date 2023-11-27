import styled from 'styled-components'
import ola from '../../imagenes/ola footer.svg'

function Footer() {
    return (
        <>
            <ContainerOla>
                <img
                    src={ola}
                    alt='efecto-ola'
                />
            </ContainerOla>

            <ContainerFooter>

                <div className='content'>

                    <div className='container-items'>
                        <ul className='info'>
                            <li>
                                <ion-icon name="locate-outline" size='large'></ion-icon>
                                <a aria-label='Ubicación' href='https://www.google.com/maps/place/Villa+Bosch,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95bcb9b8f8d39399:0xaf05e58ee3f95a10?sa=X&ved=2ahUKEwiGyIrXst2CAxXfr5UCHQmqASEQ8gF6BAgKEAA' target='__blank'>Villa Bosch, Buenos Aires</a>
                            </li>
                            <li>
                                <ion-icon name="logo-whatsapp" size='large'></ion-icon>
                                <a aria-label='Wp' href='https://api.whatsapp.com/send?phone=541133235987&text=Hola+vi+en+la+pagina+sus+servicios' target='__blank'>+054 11 3323-5987</a>
                            </li>
                            <li>
                            <ion-icon name="mail-outline" size='large'></ion-icon>
                                <a aria-label='mail' href='info@mineris.com.ar' target='__blank'>info@mineris.com.ar</a>
                            </li>
                        </ul>
                        <div className='lema'>
                            <span>El tiempo es nuestro activo más valioso.</span>
                            <span>Sin embargo, las empresas tienden a desperdiciarlo en lugar de invertirlo.</span>
                            <a href='https://www.linkedin.com/company/mineris-it/about/' target='__blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className='container-copy'>
                        <span className='text'>© 2023</span>
                        <span className='marca'>Mineris</span>
                        <span className='text'>- Todos los derechos reservados.</span>
                    </div>

                </div>
            </ContainerFooter>
        </>

    );
}

export default Footer;


const ContainerOla = styled.div`
`

const ContainerFooter = styled.div`
    width: 100%;
    background-color: #007296;
    display: flex;
    justify-content: center;
    align-items: center;


    .content{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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

        .container-items{
            display: flex;
            width: 100%;
            justify-content: space-between;
            @media only screen and (max-width: 1024px) {
                flex-direction: column;
                justify-content: center;
                gap: 2rem;
            }

            .info{
                @media only screen and (max-width: 1024px) {
                    margin: auto;
                }
                li{
                    list-style: none;
                    margin: 1rem 0;
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    @media only screen and (max-width: 1024px) {
                        text-align: center  ;
                    }
                    ion-icon {
                        padding-right: 5px;
                        color: #5CBCDB;
                    }
                    a{
                        
                        color: white ;
                        font-weight: 500;
                        cursor: pointer;
                        text-decoration: none;
                        transition: all .2s;
                        &:hover{
                            color: #5CBCDB;
                        }
                    }

                }
            }
            .lema{
                display: flex;
                flex-direction: column;
                text-align: center;
                span{
                    color: white;
                    font-style: italic;
                    
                }
                a{
                    margin-top: 2rem;
                    svg{
                        color: white;
                        width: 2rem;
                        height: 2rem;
                    }
                }
            }
        }

        .container-copy{
            margin: 2rem 0;
            color: white;
            .marca{
                font-weight: 600;
                margin: 0 .4rem;
            }
        }
    }
`