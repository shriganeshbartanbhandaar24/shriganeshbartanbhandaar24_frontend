import React from "react";

const CarasolHome = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ width: "220vh" }}>
        <Image src={image1} />
        {/* <img className="d-block w-100" src={image3} alt="First slide" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={image1} />
        {/* <img className="d-block w-100" src={image1} alt="Second slide" /> */}

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={image1} />
        {/* <img className="d-block w-100" src={image2} alt="Third slide" /> */}

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarasolHome;
