import React, { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import { connect } from 'react-redux';
import Products from "./components/Products";
import Cart from "./components/Cart";

export const BooksContext = createContext();

const App = (props) => {
  
  return(    
      <div className="App">
        <h1>
          Alver səbəti
          <img
            src="https://avatars3.githubusercontent.com/u/60869810?v=4"
            alt="Logo"
          />{" "}
          React proyekti
        </h1>
        <Routes>
          <Route exact  path="/" element={<Products/>} /> 
          <Route path="/cart" element={<Cart/>} /> 
        </Routes>        
      </div>    
  );
};

const mapStatetoProps = state =>{
  return {
    bookList: state.bookList
  }
}

export default connect(mapStatetoProps)(App);