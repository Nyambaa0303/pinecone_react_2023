import Carousel from "react-bootstrap/Carousel";

export function CarouselBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex justify-content-between">
          <div>
            <h1>Canon Camera</h1>
          </div>
          <div>
            <img
              className="d-block "
              src="81.png"
              alt="First slide"
              width={300}
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-between">
          <div>
            <h1>Speaker</h1>
          </div>
          <div>
            <img
              className="d-block "
              src="21.png"
              alt="First slide"
              width={300}
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-between">
          <div>
            <h1>Desktop & Laptop</h1>
          </div>
          <div>
            <img
              className="d-block "
              src="51.png"
              alt="First slide"
              width={300}
            />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
