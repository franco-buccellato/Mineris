import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components';
import ApiKey from '../ApiKey';
import ReCAPTCHA from "react-google-recaptcha";

export const ContactoForm = () => {

    const refForm = useRef()

    const [botonEnviar, setBotonEnviar] = useState("Enviar Formulario");

    const cambiarTextoBoton = () => {
        setBotonEnviar("¡Formulario enviado!");
    };

    const onChange = () => {
        console.log('Captcha válido!');
        document.getElementById('botonEnvio').removeAttribute('disabled');
        document.getElementById('botonEnvio').style.visibility = 'visible';
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            ApiKey.SERVICE_ID,
            ApiKey.TEMPLATE_ID,
            refForm.current,
            ApiKey.USER_ID
        ).then(
            (result) => {
                cambiarTextoBoton();
                document.getElementById("usuarioNombre").value = '';
                document.getElementById("usuarioMail").value = '';
                document.getElementById("consulta").value = '';
            },
            (error) => {
                console.log(error);
            }
        );
    }

    return (
        <ContainerForm>
            <form ref={refForm} action='' onSubmit={handleSubmit}>
                <div className='container-nombreYmail'>
                    <fieldset>
                        <input name='user_name' type='text' placeholder='Nombre' id='usuarioNombre' required />
                    </fieldset>
                    <fieldset>
                        <input name='user_email' type='email' placeholder='Email' id='usuarioMail' required />
                    </fieldset>
                </div>
                <fieldset className='container-mensaje'>
                    <label>Contanos sobre tu proyecto:</label>
                    <textarea maxLength="500" name='message' type='email' id='consulta' required />
                </fieldset>
                <ReCAPTCHA className="captcha"
                        sitekey="6Ld61E4mAAAAAAGw68YoZayXagefAZsS_gq_STk4"
                        onChange={onChange}
                />
                <div className='container-buttonEnviarFormulario'>
                    <button className='buttonEnviarFormulario' id='botonEnvio' disabled>{botonEnviar}</button>
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
            visibility: hidden;
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