
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import RegisterCarros from './Component/MeusCarr';
import NavBar from './Component/navbar';

function App() {
  return (<BrowserRouter> 
    <div className='App'> 
    <NavBar/>

    <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/registercarros' element={<RegisterCarros/>} />
    
     </Routes>

     </div>
</BrowserRouter>
  );
}

export default App;
