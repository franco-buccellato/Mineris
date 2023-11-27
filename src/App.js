import './App.css';
import Encabezado from './componentes/Encabezado/Encabezado';
import Inicio from './componentes/Inicio/Inicio';
import Footer from './componentes/Footer/Footer';
import Servicios from './componentes/Servicios/Servicios';
import Nosotros from './componentes/Nosotros/Nosotros';
import { SeccionProyectos } from './componentes/Proyectos/SeccionProyectos';
import Formulario from './componentes/Formulario/Formulario';


function App() {
  return (
    <div id='inicio'>
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
