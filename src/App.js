import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Componentes/Home';
import Navbar from './Componentes/Navbar';
import About from './Componentes/About';
import Productos from './Componentes/Productos';

function App() {
  return (
    <div className="App">
    
      <h1>MENU</h1>
       {/*<Navbar /> 
      <Cabecera /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Productos" element={<Productos/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
