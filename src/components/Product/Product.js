import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from "../../utils/helpers";
import "./Product.scss";
import { addToCart } from '../../store/cartSlice';
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100));
    let totalPrice = quantity * discountedPrice;
    dispatch(addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice }));
  }

  return (
    <>
    <div className='product-item bg-white'>
      <Link to={`/product/${product?.id}`} key={product?.id}>
        <div className='product-item-img'>
          <img className='img-cover' src={product?.images[0]} alt={product.title} />
        </div>
      </Link>
      <div className='price'>
      <span className='old-price'>{formatPrice(product?.price)}</span>
        <span className='new-price' style={{color: 'rgb(41, 105, 255)', fontWeight: 'bold'}}>
          {formatPrice(product?.discountedPrice)}
        </span>
      </div>
      <div className='product-item-info fs-14'>
        <div className='title py-2'>
          {product?.title}
        </div>
        <button className='add-to-cart' onClick={() => { addToCartHandler(product) }}>Add to cart</button>
      </div>
    </div>
  </>
  )
}

export default Product