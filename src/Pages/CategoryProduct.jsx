import React, { useEffect, useState } from 'react'
import { Link, json, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ReactStars from 'react-stars'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Cartcontext } from '../Context/AddToCart/context';

export default function CategoryProduct() {

  const { categoryName } = useParams()
  const [CategoryProduct, setCategoryProduct] = useState([]);

  const {state, dispatch} = useContext(Cartcontext)

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoryName}`).then(json => setCategoryProduct(json.data.products))
  }, [categoryName])


  const AddToCart = (item) => {

    dispatch(
      {
        type : "ADD_TO_CART",
        payload : item
      }
    ) 
  }

  return (
    <>
      <div className="container">
        <div className="my-4 text-center">
          <h1>{categoryName.toUpperCase().replace("-", " ")}</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, velit illum provident non necessitatibus quibusdam doloribus sapiente optio saepe, iste iure ullam. Eius ad repellat numquam consectetur laboriosam porro delectus.</p>
        </div>

        <div className="row">
          {CategoryProduct.map((val, key) =>

            <div className="col-md-3 my-3" key={key} >

              <Card style={{ height: "370px" }}>
                <Card.Img varient="top" src={val.thumbnail} className='object-fit-fit border rounded img-fluid' style={{ height: "200px" }} />
                <Card.Body>
                  <Link className='text-decoration-none text-dark' to={`/products/${val.id}`}>
                    <div className="brand text-center">
                    </div>
                    <div className="text-center fw-bold fs-5">
                      {val.title.length > 15 ? val.title.slice(0, 15) + '...' : val.title}
                    </div>
                    {val.description.length > 20 ? val.description.slice(0, 20) + '...' : val.description}
                    <div className='text-center' >
                      <span className='text-decoration-line-through me-2 text-secondary'>${val.price}</span>
                      <span className='fw-semibold'>${Math.floor(val.price - val.price * (val.discountPercentage / 100))}
                      </span>
                      <span className='text-warning ms-2'>({val.discountPercentage.toFixed(0)}% off)</span>
                    </div>
                  </Link>

                  <div className="d-grid">
                    <button className='btn btn-outline-warning px-5 py-2 mt-3 ' onClick={() => AddToCart(val)}>Add to Cart</button>
                  </div>
                </Card.Body>

                <span className="position-absolute translate-start badge bg-warning" style={{
                  padding: '5px 10px',
                  marginTop: '10px',
                  marginLeft: '-4px',
                  borderRadius: '4px'
                }}>
                  {val.brand.toUpperCase()}
                </span>


              </Card>

            </div>

          )}
        </div>
      </div>
    </>
  )
}