import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './components/MainComponents/Master';
import Home from './components/MainComponents/Home';
import Contact from './components/Pages/Contact';
import MyWork from './components/Pages/MyWork';
import About from './components/Pages/About';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  
<Route path='/' element={<Master Rcf={Home}/>}></Route>
<Route path='/about' element={<Master Rcf={About}/>}></Route>
<Route path='/contact' element={<Master Rcf={Contact}/>}></Route>
<Route path='/mywork' element={<Master Rcf={MyWork}/>}></Route>


  </Routes> 
  </BrowserRouter>

  </>
  );
}

export default App;
