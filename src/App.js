import logo from './logo.svg';

import { BrowserRouter,Routes, Route } from 'react-router-dom' 
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Home from './components/Home';
import Foot from './components/Foot';
import Header from './components/Header';
import Admin from './components/Admin'
import AddProduct from './components/AddProduct'
import AddCategory from './components/AddCategory'
import AddSubCategory from './components/AddSubCategory'
import CategoryProduct from './components/CategoryProduct'
import Login from './components/Login'
import OtpVerify from './components/OtpVerify'
import Account from './components/Account'
import Privacy from './components/Privacy'
import Wallet from './components/Wallet'
import Addresses from './components/Addresses'
import Orders from './components/Orders'
import Success from './components/Success';
import Cancelled from './components/Cancelled';
import SearchAI from './components/SearchAI';
import Search from './components/Search';


function App() {




  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "allProduct" element={<CategoryProduct/>}>
        <Route path = ":id" element={<CategoryProduct/>}/>
        </Route>
        <Route path = "/checkout" element={<Checkout/>}/>
        <Route path = "/searchAI" element={<SearchAI/>}/>
        <Route path = "/success" element={<Success/>}>
        <Route path = ":id" element={<Success/>}/>
        </Route>
        <Route path = "/cancel" element={<Cancelled/>}/>

        <Route path = "/otp" element={<OtpVerify/>}/>
        <Route path = "/search" element={<Search/>}/>
        <Route path = "/account" element={<Account/>}>
        <Route path = "addresses" element={<Addresses/>}/>
        <Route path = "orders" element={<Orders/>}/>
        <Route path = "wallet" element={<Wallet/>}/>
        <Route path = "privacy" element={<Privacy/>}/>
        <Route path = "faqs" element={<Privacy/>}/>

          </Route>
 
        <Route path = "/admin" element={<Admin/>}>
        <Route path = "addProduct" element={<AddProduct/>}/>
        <Route path = "addCategory" element={<AddCategory/>}/>
        <Route path = "addSubCategory" element={<AddSubCategory/>}/>
        </Route>
      </Routes>
      <Foot/>      
    </BrowserRouter>
    </>
  );
}

export default App;
