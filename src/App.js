import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './App.scss';
import Login from './Components/Element/Login';
import Login1 from "./Components/Element/Login1";
import SignUp from "./Components/Element/SignUp";
import Base from "./Components/Layout/Base";
import Home from "./Pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <>
    
    <ToastContainer/>
    <Base>
    <Routes>
      <Route path="/home" element={<Home/>}/>
    <Route  path="/" element={<Navigate to='/login'/>} />
      <Route  path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      
      <Route path="/login1" element={<Login1/>} />
      
    </Routes>
    
    </Base>
    </>
  );
}

export default App;
