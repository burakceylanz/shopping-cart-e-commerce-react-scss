import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllCarts, getCartTotal } from '../../store/cartSlice';
import { formatPrice } from '../../utils/helpers';

const Navbar = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { totalAmount } = useSelector((state) => state.cart);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts])

  return (
    <nav className='navbar'>
      <div className='navbar-cnt flex align-center'>
        <div className='brand-and-toggler flex align-center'>
          <Link to="/" className='navbar-brand flex align-center'>
            <span className='navbar-brand-txt mx-2'>
              <span className='fw-7'>Eteration</span>
            </span>
          </Link>
        </div>
        <div className='navbar-collapse w-100'>
          <div className='navbar-search bg-white'>
            <div className='flex align-center'>
              <input type="text" className='form-control fs-14' placeholder='Search' onChange={(e) => handleSearchTerm(e)} />
              <Link to={`search/${searchTerm}`} className='text-white search-btn flex align-center justify-center'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </Link>
            </div>
          </div>
        </div>
        <div className='navbar-cart flex align-center'>
            <i className='fa-solid fa-cart-shopping'></i>
            <div className='total-amount'>{formatPrice(totalAmount)}</div>
          <div className='user-detail'>
            <p>Burak</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar