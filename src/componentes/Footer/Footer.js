import "./Footer.css";
import logoMineris from '../../imagenes/logotipo-mineris.png'

function Footer() {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>
                    <span>
                        <img
                            alt=""
                            src={logoMineris}
                            width="150"
                            className="d-inline-block align-center"
                        />
                    </span>
                </h3>
                <p className="footer-company-name">Mineris © 2023</p>
            </div>
            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p>
                        Villa Bosch, Buenos Aires
                    </p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+054 11 3323 5987</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p>
                        <a href="mailto:support@company.com">info@mineris.com.ar</a>
                    </p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                <span></span>
                El tiempo es nuestro activo más valioso.<br></br>Sin embargo, las empresas tienden a desperdiciarlo en lugar de invertirlo.
                </p>
                <div className="footer-icons">
{/*                 <a href="https://www.linkedin.com/company/mineris-it/" target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook"></i>
                </a> */}
{/*                 <a href="https://www.linkedin.com/company/mineris-it/" target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter"></i>
                </a> */}
                <a href="https://www.linkedin.com/company/mineris-it/" target="_blank" rel="noreferrer">
                    <i className="fa fa-linkedin"></i>
                </a>
{/*                 <a href="https://www.linkedin.com/company/mineris-it/" target="_blank" rel="noreferrer">
                    <i className="fa fa-github"></i>
                </a> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
