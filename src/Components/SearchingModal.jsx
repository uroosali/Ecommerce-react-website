import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, json } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Cartcontext } from '../Context/AddToCart/context';
import Loader from '../Components/loader';


export default function SearchingModal() {

    const [search, setsearch] = useState("")
    const [products, setproducts] = useState([])
    const [loader, setloader] = useState(true)

    const { state, dispatch } = useContext(Cartcontext)

    const AddToCart = (item) => {
        dispatch(
            {
                type: "ADD_TO_CART",
                payload: item
            }
        )
    }

    const Handlesearching = () => {
        axios.get(`https://dummyjson.com/products/search?q=${search}`).then(json => setproducts(json.data.products))
        setModalShow(true);
        setloader(false)
    }

    const [modalShow, setModalShow] = React.useState(false);

    const hideModal = () => {
        setModalShow(false);
    };

    return (
        <>
            <div className="container " >
                <InputGroup size="default" >
                    <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder='Search your preferred items here'
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                    />
                    <InputGroup.Text>
                        <button className='bg-light' style={{ border: 'none' }} onClick={Handlesearching}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} color='#ffc107' className='fs-3' />
                        </button>
                    </InputGroup.Text>
                </InputGroup>
            </div>

            <Modal
                show={modalShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={hideModal}
                fullscreen={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        SEARCHING RESULTS
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        loader ? <Loader /> :
                            products.length > 0 ?
                                (
                                    <div className="container">
                                        <div className="row">
                                            {products.map((product, index) =>

                                                <div className="col-md-3 my-3" key={index}>
                                                    <Card style={{ height: "370px" }}>
                                                        <Card.Img src={product.thumbnail} className='object-fit-cover border rounded img-fluid' style={{ height: "200px" }} />

                                                        <span className="position-absolute translate-start badge bg-danger" style={{
                                                            padding: '5px 10px',
                                                            marginTop: '10px',
                                                            marginLeft: '-4px',
                                                            borderRadius: '4px'
                                                        }}>
                                                            {product.category.toUpperCase()}
                                                        </span>

                                                        <Card.Body>
                                                            <Link className='text-decoration-none text-dark' to={`/products/${product.id}`} onClick={() => setModalShow(false)}>
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
                                )
                                : (<h1 className='text-danger text-center '>Not found</h1>)
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
