import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Layout from './pages/layout'
import NotFound from './pages/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Layout/>}></Route>
      <Route path='*' element={<NotFound />}/>  
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
