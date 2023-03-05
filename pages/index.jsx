import { data } from "../utils/products.js";
import Product from "./components/product.jsx";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
    <div id={styles.products} style={{flex: 1, flexDirection: "row"}}>
      {data.map((data) => {
        // eslint-disable-next-line react/jsx-key
        return <Product data={data} />;
      })}
    </div>
    </>
  );
}
