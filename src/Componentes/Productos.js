import {Link} from 'react-router-dom';

function Productos() {
  return (
    <div>
        <h1>Hola productos</h1>
        <Link to="/About">About</Link>
        <Link to="/">Home</Link>
    </div>
  )
}

export default Productos;