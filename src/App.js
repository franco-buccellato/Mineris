import './App.css';
import Encabezado from './componentes/Encabezado/Encabezado';
import Inicio from './componentes/Inicio/Inicio';
import SeccionNosotros from './componentes/SeccionNosotros/SectionNosotros';
import SeccionServicios from './componentes/SeccionServicios/SeccionServicios';
/* import SeccionComoTrabajamos from './componentes/SeccionComoTrabajamos/SeccionComoTrabajamos'; */
import SeccionClientes from './componentes/SeccionClientes/SeccionClientes';
import SeccionContacto from './componentes/SeccionContacto/SeccionContacto';
import Background from './componentes/Background/Background';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div id='inicio'>
      <Encabezado/>
      <Inicio/>
      <SeccionNosotros/>
      <SeccionServicios/>
      {/* <SeccionComoTrabajamos/> */}
      <SeccionClientes/>
      <SeccionContacto/>
      <Background/>
      <Footer/>
    </div>
  );
}

export default App;
