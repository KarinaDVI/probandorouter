import {Link} from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <Navbar/>
        <h1>Hola home</h1>
        <Link to="/About">About</Link>
        <Link to="/Productos">Productos</Link>
    </div>
  )
}

export default Home;

