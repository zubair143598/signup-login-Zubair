import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './App.scss';
import Login from './Components/Element/Login';
import SignUp from "./Components/Element/SignUp";
import Base from "./Components/Layout/Base";


function App() {
  return (
    <>
    <BrowserRouter>
    <Base>
    <Routes>
    <Route  path="/" element={<Navigate to='/login'/>} />
      <Route  path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </Base>
    </BrowserRouter>
    </>
  );
}

export default App;
