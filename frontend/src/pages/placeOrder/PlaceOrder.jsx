import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

function PlaceOrder() {

  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-fields">
        <input type='text' placeholder='First name'/>
        <input type='text' placeholder='Last name' />
      </div>
      <input type='email' placeholder='Email Address'/>
      <input type='text' placeholder='street'/>
        <div className="multi-fields">
        <input type='text' placeholder='city'/>
        <input type='text' placeholder='state' />
      </div>
       <div className="multi-fields">
        <input type='text' placeholder='Zip code'/>
        <input type='text' placeholder='Country' />
      </div>
      <input type='text' placeholder='Phone'/>
      </div>
      <div className="place-order-right">
         <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
              <hr />

            </div>
            <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${2}</p>
            <hr/>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>

      </div>
      
    </form>
  )
}

export default PlaceOrder
