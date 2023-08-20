import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';

// import { GlobalContext } from '../main';


export default function Navigationbar() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categories, setcategories] = useState([]);

  // const {contextDate} = useContext(GlobalContext)

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then(json => setcategories(json.data))
  }, [])


  return (
    <>
     <div className="bg-light sticky-top  ">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary  mb-2 " style = {{boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'}} >
        <Container>
            <h2 className='text-warning '>Big Buy</h2>
          <Navbar.Brand >
            <div>
              {/* <Button variant="light" onClick={handleShow} className="">
                <FontAwesomeIcon icon={faBorderAll} className='me-1' />
                Categories
              </Button> */}
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>All Categories</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                  <div className="row">
                    {
                      categories.map((val, key) =>

                        <div key={key}>
                          <Link className='text-decoration-none text-dark' to={`/products/category/${val}`}>
                            <li className=' list-group-item list-group-item-action'> {val.toUpperCase().replace('-', ' ')} <hr /></li>
                          </Link>
                        </div>
                      )
                    }
                  </div>

                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Button variant="light" onClick={handleShow} className="">
                <FontAwesomeIcon icon={faBorderAll} className='me-1' />
                Categories
              </Button>
            <Nav className='ms-auto '>
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/products">Products</Link>
              <Link className='nav-link' to="/login">Login</Link>
              <Link className='ms-4 btn btn-warning' to="/signup">Signup</Link>
              
      {/* <Link className='ms-4 btn btn-outline-dark' to="/">{contextDate.username}</Link> */}
            </Nav>

            <Cart/>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      </div>

    </>
  )
}
