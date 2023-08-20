import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

export default function CatagoriesSection() {

  const [categories, setcategories] = useState([]);

  useEffect(() => {
    axios.get('https://weak-pear-buffalo-kilt.cyclic.cloud/api/get-all-category').then(json => setcategories(json.data.Category))
  }, [])

  return (
    <>
      <div className="container">
      <div>
      {/* <div style={{ borderLeft: "6px solid #dc3545", height: "60px", paddingTop : "-40px" }} className='mt-1 mx-2'></div>  */}
        <div className="card bg-white mb-2 rounded-0" style={{marginLeft : "-7px"}}>
          <div className="card-body">
            <h5 className="card-title text-danger">CATEGORIES</h5>
          </div>
        </div>
      </div>

        <div className="row">
          {
            categories?.map((val, key) =>

              <div className="col-md-3 my-1" key={key}>
                <Link className='text-decoration-none'>
                  <Card>
                    <Card.Body>
                      <Card.Title className='fs-6'>{val.CategoryName.toUpperCase().replace('-', ' ')}</Card.Title>
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
