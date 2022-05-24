import React from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Login from  './pages/login/login.jsx';
import Register from './pages/register/register.jsx';

function App (){
  return (
    <BrowserRouter>
      <Routes>
      <Route  exact path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;