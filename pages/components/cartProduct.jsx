/* eslint-disable @next/next/no-img-element */
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import styles from "@/styles/CartProduct.module.css";
import { deleteOne, addToCart, getQuantity } from "@/utils/cart.js"
import {useState} from "react"

export default function cartProduct(props) {
  const { product, images, price, id } = props?.data || {
    images: [],
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [quantity, setQuantity] = useState(props?.data.quantity||0);

  const handleAdd = () => {
    addToCart(id)
    setQuantity(getQuantity(id))
  }

  return (
    <div key={id} style={{ textAlign: "center" }}>
      <div>
        <h3>{product}</h3>
      </div>
      <img src={images[0] || ""} alt="" style={{ width: 100 }} />

      <div>
        (przyciski nic nie robia narazie )
        <br />
        <Button size="sm" onClick={handleAdd}>+</Button>
        {quantity}
        <Button size="sm" onClick={() => setQuantity(deleteOne(id))}>-</Button>
      </div>
    </div>
  );
}
