import React from 'react';
import { Link } from 'react-router-dom';
import { sebeteQoy  } from '../actions';
import { connect } from 'react-redux';

const Products = ( props ) => {  
  return (
    <div>
      <h2>
        <span>Kitab siyahısı</span>
        <Link to="/cart">Səbətim</Link>
      </h2>  
      {props.bookList.map( book =>
        <div className='book' >
            <img src={book.image}/>
             <div>
                <h4>Adı:{book.name} </h4>
                <p>Müəllifi: {book.author}</p>
                <p>Qiyməti: {book.price} $</p>
                <button onClick={()=>props.sebeteQoy(book)}>Səbətə əlavə et</button>
            </div>
        </div>      
      )}          
            
    </div> 
  );
};

const mapStatetoProps = state =>{
  return {
    bookList: state.bookList,
    cart: state.cart
  }
}

export default connect(mapStatetoProps, { sebeteQoy })(Products);