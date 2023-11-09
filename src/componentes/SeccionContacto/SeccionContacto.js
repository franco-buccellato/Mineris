import "./SeccionContacto.css";
import logoMineris from '../../imagenes/logotipo-mineris.png'
import emailjs from "@emailjs/browser";
import ApiKey from '../ApiKey';
import React, { useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ReCAPTCHA from "react-google-recaptcha";

function SeccionContacto() {

    const onChange = () => {
        console.log('Captcha válido!');
        document.getElementById('botonEnvio').removeAttribute('disabled');
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
                ApiKey.SERVICE_ID,
                ApiKey.TEMPLATE_ID,
                form.current,
                ApiKey.USER_ID
            ).then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
            document.getElementById("usuarioNombre").value = '';
            document.getElementById("usuarioMail").value = '';
            document.getElementById("consulta").value = '';
    };

    return (
        <section className="section-contacto" id="contacto">
            <div className="section-servicio-titulo">
                <h2 className="display-6">CONTACTO</h2>
            </div>
            <div className="container-contacto">
                <Form ref={form} onSubmit={sendEmail} className="form-contacto">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ingrese su nombre:</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su nombre" id="usuarioNombre" name="user_name"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ingrese su mail:</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese email" id="usuarioMail" name="user_email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Consulta:</Form.Label>
                        <Form.Control as="textarea" rows={6} placeholder="Consultenos las dudas..." id="consulta" name="message"/>
                    </Form.Group>
                    <Button variant="info" type="submit" id="botonEnvio" disabled>
                        Enviar Mail
                    </Button>
                    <ReCAPTCHA className="captcha"
                        sitekey="6Ld61E4mAAAAAAGw68YoZayXagefAZsS_gq_STk4"
                        onChange={onChange}
                    />,
                </Form>
                <div className="container-contacto-logo">
                    <img src={logoMineris}></img>
                </div>
            </div>
        </section>
    );
}

export default SeccionContacto;
