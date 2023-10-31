import React from 'react'

export default function Adminbase() {
  return (
    < >
   
   <header className="w3-display-container w3-content" style={{ maxWidth: 1500 }}>
  <img
    className="w3-image"
    src="img1.jpg"
    alt="The Hotel"
    style={{ minWidth: 1000 }}
    width={1500}
    height={800}
  />
   
   
</header>
<section className='crsl'>
<div className="bd-example">
  <div
    id="carouselExampleCaptions"
    className="carousel slide"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carouselExampleCaptions"
        data-slide-to={0}
        className="active"
      />
      <li data-target="#carouselExampleCaptions" data-slide-to={1} />
      <li data-target="#carouselExampleCaptions" data-slide-to={2} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="ooo.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
       
          
     
        </div>
      </div>
      <div className="carousel-item">
        <img src="ooo.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
 
     
     
       
       
     
        </div>
      </div>
       
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>

</section>




    </ >
  )
}
