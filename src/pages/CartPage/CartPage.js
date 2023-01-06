import React from 'react';
import "./CartPage.scss";
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../utils/helpers';
import { getAllCarts, removeFromCart, toggleCartQty } from '../../store/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const {totalAmount} = useSelector((state) => state.cart);

  if(carts.length === 0){
    return (
      <div className='cart bg-whitesmoke'>
      <div className='container'>
        <div className='cart-ctable'>
          <div className='cart-empty bg-white'>
            Your cart is empty.
          </div>

          <div className='cart-cfoot  align-start py-3 bg-white'>
            <div className='cart-cfoot-r flex'>
              <h1 className='total-price'>Total Price :</h1>
              <span className='total-amount fs-22 mx-2 fw-6'>{formatPrice(totalAmount)}</span>
            </div>
            <div>
            <button type = "button" className='checkout-btn text-white bg-orange fs-16'>Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className='cart'>
      <div className='container'>
        <div className='cart-ctable'>
          <div className='cart-cbody bg-white'>
            {
              carts.map((cart, idx) => {
                return (
                  <div className='cart-ctr py-4' key = {cart?.id}>
                    <div className='cart-ctd'>
                      <span className='cart-ctxt'>{cart?.title}</span>
                      <div className='cart-ctd'>
                      <span className='cart-ctpc'>{formatPrice(cart?.discountedPrice)}</span>
                    </div>
                    </div>
                    <div className='cart-ctd'>
                      <div className='qty-change flex align-center'>
                        <button type = "button" className='qty-decrease flex align-center justify-center' onClick={() => dispatch(toggleCartQty({id: cart?.id, type: "DEC"}))}>
                          <i className='fas fa-minus'></i>
                        </button>
                        <div className='qty-value flex align-center justify-center'>
                          {cart?.quantity}
                        </div>

                        <button type = "button" className='qty-increase flex align-center justify-center' onClick={() => dispatch(toggleCartQty({id: cart?.id, type: "INC"}))}>
                          <i className='fas fa-plus'></i>
                        </button>
                      </div>
                    </div>
                    <div className='cart-ctd'>
                      <button type = "button" className='delete-btn text-dark' onClick={() => dispatch(removeFromCart(cart?.id))}>Delete</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='cart-cfoot  align-start py-3 bg-white'>
            <div className='cart-cfoot-r flex'>
              <h1 className='total-price'>Total Price :</h1>
              <span className='total-amount fs-22 mx-2 fw-6'>{formatPrice(totalAmount)}</span>
            </div>
            <div>
            <button type = "button" className='checkout-btn text-white bg-orange fs-16'>Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage