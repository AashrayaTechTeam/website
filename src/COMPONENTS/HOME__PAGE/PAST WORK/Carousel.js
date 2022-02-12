import React from 'react'
import '../../../styles/Past work/Carousel.css'
function Carousel() {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
  <style dangerouslySetInnerHTML={{__html: "\n      .carousel-caption {\n        margin-bottom: 15rem;\n      }\n      .main-header {\n        font-size: 3rem;\n        font-weight: bold;\n      }\n      .img-thumbnail {\n        width: 20rem;\n        height: 15rem;\n      }\n      body,\n      html,\n      * {\n        font-family: \"Architects Daughter\", cursive;\n      }\n    " }} />
  <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval={10000}>
        <img src="https://wallpaperaccess.com/full/1556608.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <div className="w-100 text-center main-header mb-5">Our Past works</div>
          <div className="row">
            <div className="col-6">
              <h3 className="mb-3">Book Collection Drive</h3>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae cupiditate provident autem iusto consectetur quaerat
                eos, illum fugit minus ullam itaque ex aperiam corporis,
                voluptates vitae officia. Dignissimos recusandae voluptates
                corrupti, ex cumque enim! Ipsam illum doloribus autem ipsa
                dignissimos sed ipsum temporibus possimus, quos facere rerum
                saepe, deserunt tempore.
              </div>
            </div>
            <div className="col-6">
              <img src="https://previews.123rf.com/images/lithian/lithian1301/lithian130100120/17545402-portr%C3%A4t-w%C3%BCtend-frustriert-sucht-junge-student-m%C3%A4dchen-.jpg" className="img-thumbnail" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval={2000}>
        <img src="https://wallpaperaccess.com/full/1556608.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <div className="w-100 text-center main-header mb-5">Our Past works</div>
          <div className="row">
            <div className="col-6">
              <h3 className="mb-3">Book Collection Drive</h3>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae cupiditate provident autem iusto consectetur quaerat
                eos, illum fugit minus ullam itaque ex aperiam corporis,
                voluptates vitae officia. Dignissimos recusandae voluptates
                corrupti, ex cumque enim! Ipsam illum doloribus autem ipsa
                dignissimos sed ipsum temporibus possimus, quos facere rerum
                saepe, deserunt tempore.
              </div>
            </div>
            <div className="col-6">
              <img src="https://previews.123rf.com/images/lithian/lithian1301/lithian130100120/17545402-portr%C3%A4t-w%C3%BCtend-frustriert-sucht-junge-student-m%C3%A4dchen-.jpg" className="img-thumbnail" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://wallpaperaccess.com/full/1556608.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <div className="w-100 text-center main-header mb-5">Our Past works</div>
          <div className="row">
            <div className="col-6">
              <h3 className="mb-3">Book Collection Drive</h3>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae cupiditate provident autem iusto consectetur quaerat
                eos, illum fugit minus ullam itaque ex aperiam corporis,
                voluptates vitae officia. Dignissimos recusandae voluptates
                corrupti, ex cumque enim! Ipsam illum doloribus autem ipsa
                dignissimos sed ipsum temporibus possimus, quos facere rerum
                saepe, deserunt tempore.
              </div>
            </div>
            <div className="col-6">
              <img src="https://previews.123rf.com/images/lithian/lithian1301/lithian130100120/17545402-portr%C3%A4t-w%C3%BCtend-frustriert-sucht-junge-student-m%C3%A4dchen-.jpg" className="img-thumbnail" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
  )
}

export default Carousel