import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { artir, azalt, sebetdenCixar } from "../actions";

const Cart = (props) => {

  const totalPrice = props.cart.reduce(
    (total, item) =>(total += item.price),
    0
  );   
  
  const totalCartCount = props.cart.reduce(
    (total, book) => ( total = total + book.count ),
    0).toFixed(0);
  console.log('Book',props.cart);
  
  return (
    <div>
      <h2>
        <Link to="/">Kitab siyahısı</Link> <span>Səbətim:({totalCartCount}) </span>
      </h2>

      <h3>Ümumi məbləğ: {totalPrice.toFixed(2)} $</h3>

      {props.cart.map(book => (
        <div className="book" key={book.id}>
          <img
            src={book.image}
            alt={book.name}
          />
          <div>            
            <h4>Adı: {book.name}</h4>
            <p>Müəllif: {book.author}</p>
            <p>Qiymət: {book.price}</p>
            <p>Cəmi: { book.price * book.count } $ </p>
            <p>Səbətinizdə bu kitabdan { book.count } ədəd var.</p>
            <button onClick={()=>{props.azalt(book.id)}}>-</button>
            <button onClick={()=>{props.sebetdenCixar(book.id)}}>
                Səbətdən çıxar
            </button>
            <button onClick={()=>{props.artir(book.id)}}>+</button>
          </div>
        </div>))}           
    </div>
  );
};

const mapStatetoProps = state =>{
  return {
    bookList: state.bookList,
    cart: state.cart
  }
}

export default connect(mapStatetoProps, { sebetdenCixar, artir, azalt})(Cart);