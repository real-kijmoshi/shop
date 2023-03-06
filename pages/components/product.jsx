/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Product.module.css";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

export default function Product(props) {
  const router = useRouter();

  const id = 1
  const handleOnCLick = () => {
    router.forward(`/product/${id}`);
  };

  return (
    <div key={props.data?.id} className={styles.product}>
      <img
        src={props.data?.image || ""}
        style={{ width: 100, height: "auto" }}
      />
      <h1>{props.data?.product || ""}</h1>

      <div onClick={handleOnCLick} style={{ marginRight: 10 }}>
        <Button>add to cart</Button>
      </div>
      <div href={`/product/${props.data?.id}`} style={{ marginLeft: 10 }}>
        <Button>more info</Button>
      </div>
    </div>
  );
}
