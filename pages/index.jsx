import { data } from "../utils/products.js";
import Product from "./components/product.jsx";
import styles from "../styles/Home.module.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons"

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

      <div id="cart" style={{width: "100%", position: "fixed", bottom: 0, display: "flex", justifyContent: "right", paddingRight: 20}}>
        <div style={{backgroundColor: "#120aff", width: 70, height: 70, borderRadius: 50, display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: 10}}>
          <div style={{textAlign: "center"}}>
            <Icon.CartFill size={30} color="white" />
          </div>
        </div>
      </div>
    </>
  );
}
