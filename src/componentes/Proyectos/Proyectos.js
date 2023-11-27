import React from 'react'
import styled from 'styled-components'


export function Proyectos({ imgCard, tituloProyecto, descripcionProyecto, orden, link}) {

    const estiloPorDefecto = {
        display: 'flex',
        flexDirection: 'row',
    }

    const estiloReverso = {
        display: 'flex',
        flexDirection: 'row-reverse', 
    }

    const estiloFinal = orden === 'reverso' ? estiloReverso : estiloPorDefecto;

    return (
        <>
            <CardContainer style={estiloFinal}>
                <a href={link} className='container-img' target='__blank'>
                    <img src={imgCard} alt="imagen web" loading="lazy"/>
                </a>
                <div className='container-text'>
                    <h5>{tituloProyecto}</h5>
                    <p>{descripcionProyecto}</p>
                </div>
            </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
    background-color: #fff;
    border-radius: 1.5rem;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    gap: 4%;
    height: 25rem;
    padding: 2rem;
    width: 100%;
    @media only screen and (max-width: 1170px) {
        flex-direction: column!important;
        gap: 3rem;
        max-height: 50rem;
        margin: 0 auto;
        height: 50rem;
        width: -moz-fit-content;
        width: -webkit-fit-content;
        width: fit-content;
        padding: 1rem;
        gap: 5%;
    }   

    .container-img{
        background-color: hsla(0,0%,46%,.2);
        border-radius: 1.7rem;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
        height: auto;
        overflow: hidden;
        width: 55%;
        cursor: pointer;
        @media only screen and (max-width: 1170px) {
            width: 100%;
            margin: auto;
            height: 50%;
        }   
        img{
            height: auto;
            width: 100%;
            transform: translateY(0%); 
            transition: transform 10s ease-in-out 0s;
            &:hover{
                transform: translateY(-80%); 
            }
            @media only screen and (max-width: 1170px) {
            width: 100%;
            margin: auto;
            &:hover{
                transform: none; 
            }
        }   
        }
    }

    .container-text{
        display: flex;
        flex-direction: column;
        height: auto;
        text-align: center;
        width: 42%;
        @media only screen and (max-width: 1170px) {
            width: 100%;
            height: 45%;
        }   
        h5{
            align-items: center;
            font-size: 1.2rem;
            margin-bottom: 1.2rem;
            @media only screen and (max-width: 1170px) {
                margin-bottom: 1rem;
            }
        }
        p{
            font-size: 1rem;
            font-weight: 300;
        }
        .stack{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            padding: 1rem 0;
            img{
                width: 2rem;
            }
            @media only screen and (max-width: 1024px) {
                padding: 10px 0;
            }
        }
        .links{
            display: flex;
            flex-direction: row;
            gap: 2rem;
            .link-repositorio{
                text-decoration: none;
                text-transform: none;
            }
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            padding: 2rem 0;
            @media only screen and (max-width: 1024px) {
                padding: 10px 0;
            }
            button{
                display: flex;
                border: none;
                border-radius: 6px;
                padding: 8px 10px;
                background-color: #fff;
                color: #2d2e32;
                cursor: pointer;
                gap: 10px;
            }
            p{
                margin: auto 0;
            }
        }
    }
`