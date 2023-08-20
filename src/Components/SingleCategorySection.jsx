import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

export default function CatagoriesSection() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [categories, setcategories] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories').then(json => setcategories(json.data))
    }, [])

    return (
        <>
            <div className="container-fluid">


            </div>
            <div className="container">

                <div className="row">
                    {
                        categories.map((val, key) =>

                            <div className="col-md-3 my-1" key={key}>
                                <Link className='text-decoration-none' to={`/products/category/${val}`}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title className='fs-6'>{val.toUpperCase().replace('-', ' ')}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
