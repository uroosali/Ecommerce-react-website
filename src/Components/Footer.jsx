import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
    <>
      <footer
        className="card text-center text-white pt-5 pb-5 bg-warning mt-3"
      >
        <h1 className="card-title p-4 text-WHITE fw-bold" data-aos="fade-up">
        Big Buy
        </h1>
        <em className="card-text" data-aos="fade-up">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates inventore labore vitae officia tempore enim error omnis repellendus sequi cum veniam eius nihil, earum accusamus alias necessitatibus molestiae assumenda.
        </em>
        <div
          className="container"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay={300}
          data-aos-offset={0}
        >
          <div className="row">
            <div>
              <small>© Copyright Bocor. All Rights Reserved</small>
            </div>
            
          </div>
        </div>
      </footer>

    </>
  )
}
