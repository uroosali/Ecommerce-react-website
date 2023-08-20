import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
// import banner1 from '../Images/banner1.png'
// import banner2 from '../Images/banner2.png'
// import banner3 from '../Images/banner3.png'

export default function HeaderSection() {

  return (
    <>

      <div className="d-flex justify-content-center align-items-center bg-white">
        <div >
          <img className ='img fluid'src='https://i.graphicmama.com/blog/wp-content/uploads/2021/06/15141946/Free-Eccomerce-Illustrations-Vector-15.png' style={{width:'40vw',height:'30vw'}}></img>
        </div>
        <div className="container">
          <h1 className='text-warning'>WELLCOME TO BIG BUY</h1>
          <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci blanditiis sunt officiis in porro dicta laborum iure! Omnis ipsam exercitationem reprehenderit. Unde excepturi ad maxime doloribus, id odio nostrum. Libero?
          </p>
        </div>
        </div>
           {/* <div className="container">
            <Carousel>

              <Carousel.Item>
                <Link className='text-decoration-none' to={'/products/category/mens-watches'}>                 
                  <img src= {banner1} alt="First slide" className='img-fluid'/>
                </Link>
              </Carousel.Item>

              <Carousel.Item>
                <Link className='text-decoration-none' to={'/products/category/mens-shoes'}>                 
                  <img src={banner2} alt="second slide" className='img-fluid'/>
                </Link>
              </Carousel.Item>

              <Carousel.Item>
                <Link className='text-decoration-none' to={'/products/category/mens-shirts'}>                 
                  <img src={banner3} alt="third slide" className='img-fluid'/>
                </Link>
              </Carousel.Item>

            </Carousel>
          </div>  */}
      
    
    </>
  )
} 
