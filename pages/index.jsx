import { data } from "../utils/products.js";
import Product from "./components/product.jsx";
import styles from "../styles/Home.module.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState(data);

  const onChange = (e) => {
    setProducts(
      data.filter((x) =>
        x.product
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      )
    );
  };

  return (
    <>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        style={{ width: 200, margin: 20 }}
        onChange={onChange}
        sticky="top"
      />
      <div id={styles.products} style={{ flex: 1, flexDirection: "row" }}>
        {products[0] ? (
          products.map((data) => {
            // eslint-disable-next-line react/jsx-key
            return <Product data={data} key={data.id} />;
          })
        ) : (
          <h1> Nothing found </h1>
        )}
      </div>
    </>
  );
}
