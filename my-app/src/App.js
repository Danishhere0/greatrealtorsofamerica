import logo from './logo.svg';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import FindRealtor from './Pages/FindRealtor';
import Profile from './Pages/Profile';
import CreateAccount from './Pages/signUp/CreateAccount';
import BusinessInformation from './Pages/signUp/BusinessInformation';
import ServiceArea from './Pages/signUp/ServiceArea';
import AddLicense from './Pages/signUp/AddLicense';
import Login from './Pages/Login';
import SignUp from './Pages/signUp';
import Service from './Pages/Service';
import index from './Pages/manage';
import manage from './Pages/manage';
import Manage from './Pages/manage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<Home/>} exact/>
      <Route path='/about' element={<About/>} exact/>
      <Route path='/services' element={<Service/>} exact/>
      <Route path='/find-realtor' element={<FindRealtor/>} exact/>
      <Route path='/create-account' element={<CreateAccount/>} exact/>
      <Route path='/business-information' element={<BusinessInformation/>} exact/>
      <Route path='/service-area' element={<ServiceArea/>} exact/>
      <Route path='/add-license' element={<AddLicense/>} exact/>
      <Route path='/sign-up' element={<SignUp/>} exact/>
      <Route path='/login' element={<Login/>} exact/>
      <Route path='/profile' element={<Profile/>} exact/>
      <Route path='/manage' element={<Manage/>} exact/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
