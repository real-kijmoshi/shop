/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-bootstrap";
import { useState } from "react";

export default function Slider(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="slider">
      {props.images?.map((image) => (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className={`d-block w-${props?.width}`}
              src={image}
              alt="product"
            />
          </Carousel.Item>
        </Carousel>
      ))}
    </div>
  );
}
