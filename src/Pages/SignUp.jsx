import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function SignUp() {

  const [FormData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phonNo: '',
    password: '',
    retypePassword: '',
    DOB: '',
    Gender: ''
  })

  const { firstName, lastName, email, phonNo, password, retypePassword, DOB, Gender } = FormData

  const Handlevent = (e) => {
    e.preventDefault();
    console.log(FormData)

    Swal.fire({
      title: 'Account created Sucessfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  return (
    <>
      <div className="container bg-light m-5 col-7 p-5 mx-auto  " style={{ marginTop: 100 }}>

        <h3 className='text-center mb-4'>Create your Account</h3>
        <form onSubmit={Handlevent}>

          <div className=" d-flex mb-3">

            <div className="container">
              <label className='form-label' htmlFor="\">First Name</label>
              <input type="text" name="" id="" placeholder='Enter First Name' className="form-control" value={firstName} onChange={(e) => setFormData({ ...FormData, firstName: e.target.value })
              } />
            </div>

            <div className="container">
              <label className='form-label' htmlFor="\">Last Name</label>
              <input type="text" placeholder='Enter Last Name' className="form-control" value={lastName} onChange={(e) => setFormData({ ...FormData, lastName: e.target.value })
              } />
            </div>

          </div>

          <div className=" d-flex mb-3">
            <div className="container">
              <label className='form-label' htmlFor="\">Email</label>
              <input type="email" placeholder='Enter your Email' className="form-control" value={email} onChange={(e) => setFormData({ ...FormData, email: e.target.value })
              } />
            </div>

            <div className="container">
              <label className='form-label' htmlFor="\">Phone No</label>
              <input type='number' placeholder='Enter Phome number' className="form-control" value={phonNo} onChange={(e) => setFormData({ ...FormData, phonNo: e.target.value })
              } />
            </div>
          </div>

          <div className=" d-flex mb-3">

            <div className="container">
              <label className='form-label' htmlFor="\">Password</label>
              <input type="password" placeholder='Create new Password' className="form-control" value={password} onChange={(e) => setFormData({ ...FormData, password: e.target.value })
              } />
            </div>

            <div className="container">
              <label className='form-label' htmlFor="\">Retype Password</label>
              <input type="password" placeholder='Retype Password' className="form-control" value={retypePassword} onChange={(e) => setFormData({ ...FormData, retypePassword: e.target.value })
              } />
            </div>

          </div>

          <div className=" d-flex mb-3">

            <div className="container">
              <label className='form-label' >Date of birth</label>
              <input type="date" className="form-control" value={DOB} onChange={(e) => setFormData({ ...FormData, DOB: e.target.value })
              } />
            </div>

            <div className="container">
              <label className='form-label' >Gender</label>

              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" value="male" onChange={(e) => setFormData({ ...FormData, Gender: e.target.value })} />
                <label className="form-check-label" htmlFor="exampleRadios2"> Male</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option3" value={"female"} onChange={(e) => setFormData({...FormData, Gender: e.target/value })
              } />
                <label className="form-check-label"> Female</label>
              </div>

            </div>

          </div>

        </form>

        <div class="d-grid col-12 mx-auto mt-4">
          <button class="btn btn-warning p-2" type="submit" onClick={Handlevent}>Sign Up</button>
        </div>

        <Link className='nav-link text-warning text-end' to="/login"><small><span className='text-dark'>Already a member ?</span> Login</small></Link>

      </div>
    </>
  )
}