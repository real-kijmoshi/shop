/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Product.module.css";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import { addToCart } from "@/utils/cart";

export default function Product(props) {
  const router = useRouter();

  const handleButton = (id) => {
    props.addProductsNum();
    addToCart(id);
  };

  const handleRedirect = () => {
    console.log("redirecting ......");
    router.push(`/product/${props?.data?.id}`);
  };

  return (
    <div key={props.data?.id} className={styles.product}>
      <img src={props.data?.images[0]} style={{ width: 100, height: "auto" }} />
      <h1>{props.data?.product}</h1>
      {props.data?.price}$
      <br />
      <div id={styles.btns}>
        <div style={{ marginRight: -5 }}>
          <Button onClick={() => handleButton(props.data?.id)}>
            add to cart
          </Button>
        </div>
        <div style={{ marginLeft: -5 }}>
          <Button onClick={handleRedirect}>more info</Button>
        </div>
      </div>
    </div>
  );
}
