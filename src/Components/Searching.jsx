import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link, json } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import Cart from './Cart';
import SearchingModal from './SearchingModal';
import Navigationbar from './Navigationbar';

export default function Searching() {
 

  return (
    <>
      <div className="bg-light sticky-top  ">
        <div className="container pt-3 d-flex align-items-center ">

          <Link className='text-decoration-none d-flex' to={'/'}>
            {/* <FontAwesomeIcon icon={faBagShopping} color='#dc3545' className='fs-2 pe-1' /> */}
            {/* <h2 className='text-warning '>Big Buy</h2> */}
           
          </Link>

 
          {/* <SearchingModal/> */}
         
          {/* <Cart/> */}

        </div>
      </div>
    </>
  )
}
