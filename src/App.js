import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes, Route } from 'react-router-dom' 
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Home from './components/Home';
function App() {



  return (
    <>
    <div>
    <h1 className='my-4 w-full flex justify-center font-bold text-4xl'>
      Quick Mart
    </h1>
    </div>
    <BrowserRouter>
  <Routes>
  <Route path = "/" element={<Home/>}/>
  <Route path = "/checkout" element={<Checkout/>}/>
  </Routes>
  <Footer/> 
  
  </BrowserRouter>
    </>
  );
}

export default App;
