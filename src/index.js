import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import NotFound from './pages/NotFound';
import { Login } from "./pages/login";
import { BasicLayout } from "./pages/layout";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<BasicLayout/>}></Route>
      <Route path='*' element={<NotFound />}/>  
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
