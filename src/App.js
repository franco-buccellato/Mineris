import './App.css';
import Encabezado from './componentes/Encabezado/Encabezado';
import Inicio from './componentes/Inicio/Inicio';
import Footer from './componentes/Footer/Footer';
import Servicios from './componentes/Servicios/Servicios';
import Nosotros from './componentes/Nosotros/Nosotros';
import { SeccionProyectos } from './componentes/Proyectos/SeccionProyectos';
import Formulario from './componentes/Formulario/Formulario';
import BotonWhatsApp from './componentes/BotonWhatsApp/BotonWhatsApp';


function App() {
  return (
    <div id='inicio'>
        <BotonWhatsApp />
        <Encabezado/>
        <Inicio/>
        <Servicios />
        <Nosotros />
        <SeccionProyectos />
        <Formulario />
        <Footer />
    </div>
  );
}

export default App;
