import Button from 'react-bootstrap/Button';
import { Offcanvas } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { Cartcontext } from '../Context/AddToCart/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Cartitems from './Cartitems';

export default function Cart() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { state, dispatch } = useContext(Cartcontext)

  return (
    <>
      <Button onClick={handleShow} className="btn-light">
        <div className='position-relative'>
          <FontAwesomeIcon icon={faCartShopping} color='black' className='fs-2' />
          <span className="position-absolute translate-middle badge rounded-pill bg-warning">

            {state.cart.length}

            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            state.cart.map((val, key) => <Cartitems key={key} data = {val}/>)
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
