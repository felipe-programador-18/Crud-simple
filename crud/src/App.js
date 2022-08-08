
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import RegisterCarros from './Component/MeusCarr';
import NavBar from './Component/navbar';

function App() {
  return ( <BrowserRouter> 
       <NavBar/> 
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/registercarros' element={<RegisterCarros/>} />
    
     </Routes>


</BrowserRouter>
  );
}

export default App;
