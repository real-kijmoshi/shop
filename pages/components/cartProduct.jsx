/* eslint-disable @next/next/no-img-element */
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import styles from "@/styles/CartProduct.module.css";

export default function cartProduct(props) {
  const { product, images, price, quantity, id } = props?.data || {};

  return (
    <div key={id} style={{ textAlign: "center" }}>
      <div>
        <h3>{product}</h3>
      </div>
      <img src={images[0]} alt="" style={{ width: 100 }} />

      <div>
        (narazie nie dala ale potem bedzie )
        <br />
        <Button size="sm">+</Button>
        {quantity}
        <Button size="sm">-</Button>
      </div>
    </div>
  );
}
