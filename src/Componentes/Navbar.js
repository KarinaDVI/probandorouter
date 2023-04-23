import {Link} from 'react-router-dom';
function Navbar(){
return(

<header>
<nav>
  <ul>
    
    <li><Link to="/">Home</Link></li>
    <li><Link to="/About">About</Link></li>
    <li><Link to="/Productos">Productos</Link></li>
  </ul>
</nav>
</header>

)
}

export default Navbar;

