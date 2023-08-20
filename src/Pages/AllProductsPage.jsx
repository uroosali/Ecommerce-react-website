import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars'
import Swal from 'sweetalert2';
import { Cartcontext } from '../Context/AddToCart/context';
import Loader from '../Components/loader';

export default function AllProductsPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [loader, setloader] = useState(true)


  const { state, dispatch } = useContext(Cartcontext)


  useEffect(() => {
    axios.get("https://dummyjson.com/products").then(json => setAllProducts(json.data.products))
    setloader(false)
  }, [])

  // Shuffle the array to get random products
  const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());

  const AddToCart = (item) => {
    // console.log(item)

    dispatch(
      {
        type : "ADD_TO_CART",
        payload : item
      }
    )

    // Swal.fire({
    //   title: "Added to Cart!",
    //   text: "Check your Cart for Check Out",
    //   icon: "success",
    //   confirmButtonText: "Continue Shopping",
    // });
  }

  return (
    <>
    {
      loader ? <Loader/> :
      <div className="container">
      <div className="row">
        {shuffledProducts.map((product, index) => 
          <div className="col-md-3 my-3" key={index}>
            <Card style={{ height: "370px" }}>
              <Card.Img src={product.thumbnail} className='object-fit-cover border rounded img-fluid' style={{ height: "200px" }} />

              <span className="position-absolute translate-start badge bg-warning" style={{
                padding: '5px 10px',
                marginTop: '10px',
                marginLeft: '-4px',
                borderRadius: '4px'
              }}>
                {product.category.toUpperCase()}
              </span>

              <Card.Body>
                <Link className='text-decoration-none text-dark' to={`/products/${product.id}`}>
                  <div className="brand text-center">
                    <span>Brand:  </span>
                    <span className="fw-semibold">{product.brand.length > 15 ? product.title.slice(0, 15) + '...' : product.brand}</span>
                  </div>

                  <div className="text-center">
                    {product.title.length > 20 ? product.title.slice(0, 20) + '...' : product.title}
                  </div>

                  <div className='text-center' >
                    <span className='text-decoration-line-through me-2 text-secondary'>${product.price}</span>
                    <span className='fw-semibold'>${Math.floor(product.price - product.price * (product.discountPercentage / 100))}
                    </span>
                    <span className='text-warning ms-2'>({product.discountPercentage.toFixed(0)}% off)</span>

                  </div>
                </Link>
                <div className="d-grid">
                  <button className='btn btn-outline-warning px-5 py-2 mt-3 ' onClick={() => AddToCart(product)}>Add to Cart</button>
                </div>
              </Card.Body>
            </Card>

          </div>
      )}
      </div>
    </div>
    }
    </>
  )
}
