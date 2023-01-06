import { useState } from 'react';
import "./ProductList.scss";
import Product from "../Product/Product";
import { Pagination } from "../Pagination/Pagination";

const ProductList = ({ products }) => {
  const [data, setData] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(12);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <>
      <div className='product-lists grid my-3'>
        {
          currentRecords.map(product => {
            let discountedPrice = (product.price) - (product.price * (product.discountPercentage / 100));
            return (
              <Product key={product.id} product={{ ...product, discountedPrice }} />
            )
          })
        }
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default ProductList