import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components';

export const ContactoForm = () => {

    const refForm = useRef()

    const [botonEnviar, setBotonEnviar] = useState("Enviar Formulario");

    const cambiarTextoBoton = () => {
        setBotonEnviar("¡Formulario enviado!");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = "service_g52sx08";
        const templateId = "template_t1zmqul"

        const apiKey = "pIsAumB7OOixlRj9p";

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
            .then(result => cambiarTextoBoton())
            .catch(error => console.log(error))
    }

    return (
        <ContainerForm>
            <form ref={refForm} action='' onSubmit={handleSubmit}>
                <div className='container-nombreYmail'>
                    <fieldset>
                        <input name='username' type='text' placeholder='Nombre' required />
                    </fieldset>

                    <fieldset>
                        <input name='email' type='email' placeholder='Email' required />
                    </fieldset>
                </div>


                <fieldset className='container-mensaje'>
                    <label>Contanos sobre tu proyecto:</label>
                    <textarea maxLength="500" name='mensaje' type='email' required />
                </fieldset>

                <div className='container-buttonEnviarFormulario'>
                    <button className='buttonEnviarFormulario'>{botonEnviar}</button>
                </div>

            </form>
        </ContainerForm>

    )
}


const ContainerForm = styled.section`
    width: 70%;
    @media only screen and (max-width: 1520px) {
        width: 90%;
    }
    @media only screen and (max-width: 1180px) {
        width: 100%;
    }
    .container-nombreYmail{
        display: flex;
        justify-content: space-between;
        margin-bottom: 4rem;
        @media only screen and (max-width: 790px) {
            flex-direction: column;
            justify-content: center ;
            align-items: start;
            gap: 4rem;
        }
        fieldset{
            width: 40%;
            @media only screen and (max-width: 790px) {
                width: 100%;
            }
            input{
                width: 100%;
                border: none;
                border-bottom: 1px solid #323333;
                transition: .2s;
                &:focus{
                    border-bottom: 1px solid #007296;
                    outline: none;
                }
            }
        }
    }

    .container-mensaje{
        display: flex;
        flex-direction: column;
        margin-bottom: 4rem;
        label{
            margin-bottom: 1rem;
        }
        textarea{
            width: 100%;
            height: 150px;
            padding: 12px 20px;
            box-sizing: border-box;
            border: 1px solid #e1e1e1;
            border-radius: 14px;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            background-color: white;
            font-size: 16px;
            resize: none;
            transition: all .4s;
            &:focus{
                    border: 1px solid #007296;
                    outline: none;
            }
        }
    }
    .container-buttonEnviarFormulario{
        width: 100%;
        display: flex;
        @media only screen and (max-width: 790px) {
            justify-content: end;
        }
        .buttonEnviarFormulario{
            background-color: transparent;
            border: 1px solid #007296;
            color: #007296;
            outline: none;
            padding: 12px 24px;
            font-size: 1rem;
            border-radius: 20px;
            transition: all .4s;
            &:hover{
                background-color: #007296;
                color: white;
            }

        }
    }

`