import React, { useState } from 'react'
import styled from 'styled-components'
import { Proyectos } from './Proyectos'
import DocOnline from '../../imagenes/Doc. Online.png'
import Amida from '../../imagenes/Amida.png'
import Delcargo from '../../imagenes/Delcargo.png'
import Foster from '../../imagenes/Foster.png'
import Meca from '../../imagenes/Meca.png'
import { motion } from "framer-motion"


export function SeccionProyectos() {

    const [mostrarMasProyectos, setMostrarMasProyectos] = useState(false);
    const [transicionProyectos, setTransicionProyectos] = useState(true);

    const cambiarMostrarProyectos = () => {
        setTransicionProyectos(false)

        setTimeout(() => {
            setMostrarMasProyectos(!mostrarMasProyectos);
            setTransicionProyectos(true)
        }, 300)
    };

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

            <ContainerProyectos id='clientes'>
                <div className='content'>
                    <motion.h3
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='info-container'
                    >
                        Últimos Proyectos
                    </motion.h3>
                    <div className='cards-container'>

                        <Proyectos
                            imgCard={DocOnline}
                            tituloProyecto={"DOC ONLINE (En Desarrollo)"}
                            descripcionProyecto={"Diseñamos y desarrollamos una plataforma integral que simplifica el proceso de solicitud de turnos médicos y trámites REPROCANN. Los usuarios finales pueden registrarse fácilmente, completar formularios y solicitar turnos médicos de manera eficiente. Para mejorar la experiencia del usuario, ofrecemos una interfaz intuitiva y fluida. En el lado administrativo, la plataforma capacita a los administradores para gestionar usuarios, turnos, seguimientos y configuraciones de manera centralizada."}
                            orden={"none"}
                        />

                        <Proyectos
                            imgCard={Amida}
                            tituloProyecto={"AMIDA GROUP (En Desarrollo)"}
                            descripcionProyecto={"Página web sencilla pero impactante, diseñada y desarrollada específicamente para empresa de turismo y eventos corporativos. Con un enfoque intuitivo y elegante, hemos incorporado un formulario de contacto para simplificar la conexión entre tu negocio y tus clientes potenciales."}
                            orden={"reverso"}
                        />

                        <Proyectos
                            imgCard={Delcargo}
                            tituloProyecto={"DEAL CARGO"}
                            descripcionProyecto={"Web diseñada y desarrollada para empresa de comercio exterior. Desde un formulario de contacto que simplifica la comunicación hasta un acceso directo a sus redes sociales, ofrece una experiencia de usuario fluida y eficiente. Con un enfoque centrado en la calidad y la funcionalidad, está web está diseñada para destacar los aspectos más importantes de tu empresa, proporcionando a tus visitantes una visión completa y atractiva de tus servicios y logros."}
                            codigoProyecto={"https://www.youtube.com/watch?v=RELxs6kKrbM"}
                            orden={"none"}
                        />

                        {/* LOS PROYECTOS QUE VAN ACA NO SE VAN A MOSTRAR PRINCIPALMENTE */}
                        {mostrarMasProyectos && (
                            <div className={`cards-container ${transicionProyectos ? 'transicion-entrada' : 'sin-transicion'}`}>
                                <Proyectos
                                    imgCard={Foster}
                                    tituloProyecto={"FOSTER'S"}
                                    descripcionProyecto={"Diseño y Desarrollo de catálogo web, ABM de usuarios, carrito de compras, envío de ordenes vía e-mail. Se realizo un CRUD MERN (Mongo DB, Express JS, React JS y Node JS) implementado en Azure."}
                                    codigoProyecto={"https://www.youtube.com/watch?v=RELxs6kKrbM"}
                                    orden={"reverso"}
                                />

                                <Proyectos
                                    imgCard={Meca}
                                    tituloProyecto={"MECA"}
                                    descripcionProyecto={"Diseño y Desarrollo de página web, con distintas secciones, formulario de contacto, accesos rápidos a redes sociales, últimas publicaciones de linkedin embebidas."}
                                    codigoProyecto={"https://www.youtube.com/watch?v=RELxs6kKrbM"}
                                    orden={"none"}
                                />
                            </div>
                        )}


                        <button className='buttonMostrarProyectos' onClick={cambiarMostrarProyectos}>
                            {mostrarMasProyectos ? 'Ocultar Proyectos' : 'Mostrar más Proyectos'}
                        </button>

                    </div>
                </div>
            </ContainerProyectos>
        </>
    )
}



const ContainerProyectos = styled.div`
    z-index: 2;
    .content{
        width: 70%;
        margin: 6rem auto 0 auto;
        gap: 10%;

        @media only screen and (max-width: 1024px) {
            /* margin: 4rem auto 0 auto; */
        }

        @media only screen and (max-width: 1520px) {
            width: 78%;
        }

        @media only screen and (max-width: 1024px) {
            width: 90%;
        } 

        h3{
            font-weight: 600;
            color: #323333;
            font-size: 2rem;
            margin-bottom: 2rem;
            text-align: start;
        }
        .cards-container{
            grid-gap: 5rem;
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            height: auto;
            width: 100%;
            margin: auto;

            .buttonMostrarProyectos{
                width: 16rem;
                margin: auto 0 auto auto;
                border: 1px solid #5CBCDB;
                border-radius: 10px;
                color: #5CBCDB;
                padding: 6px 12px;
                background-color: transparent;
                transition: .4s;
                &:hover{
                    border: 1px solid #007296;
                    color: #007296;
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
    margin-top: 58rem;
    @media only screen and (max-width: 1024px) {
        margin-top: 4rem;
        right: 0;
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
    margin-top: 12rem;
    right: 0;
    z-index: 1;
    @media only screen and (max-width: 1024px) {
        margin-top: 4rem;
        right: 0;
        display: none;
    }
    .circuloRelleno{
        width: 20rem;
        height: 20rem;
        background-color: #007296;
        border-radius: 50%;
        position: absolute;
        z-index:2;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        @media only screen and (max-width: 1520px) {
            width: 14rem;
            height: 14rem;
        }
        @media only screen and (max-width: 1260px) {
            width: 9rem;
            height: 9rem;
        }
        @media only screen and (max-width: 1024px) {
            width: 4rem;
            height: 4rem;
        }
    }

    .circuloBorde{
        width: 22rem;
        height: 22rem;
        background-color: none;
        z-index: 1;
        border: 1px solid #007296;
        border-radius: 50%;
        position: absolute;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        @media only screen and (max-width: 1520px) {
            width: 15rem;
            height: 15rem;
        }
        @media only screen and (max-width: 1260px) {
            width: 10rem;
            height: 10rem;
        }
        @media only screen and (max-width: 1024px) {
            width: 5rem;
            height: 5rem;
        }
    }
`