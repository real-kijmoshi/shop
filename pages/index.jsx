import { data } from "../utils/products.js";
import Product from "./components/product.jsx";
import styles from "../styles/Home.module.css";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { getNumberOfItems } from "@/utils/cart.js";
import { useRouter } from "next/navigation";

export default function Home() {
  const [products, setProducts] = useState(data);
  const [productNum, setProductNum] = useState(0);

  const router = useRouter();

  useEffect(() => {
    setProductNum(getNumberOfItems());
  }, []);

  const addProductsNum = () => setProductNum(productNum + 1);

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
            return (
              <Product
                data={data}
                key={data.id}
                addProductsNum={addProductsNum}
              />
            );
          })
        ) : (
          <h1> Nothing found </h1>
        )}
      </div>

      <div
        style={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          display: "flex",
          justifyContent: "right",
          paddingRight: 20,
        }}
      >
        <div
          style={{
            cursor: "pointer",
            backgroundColor: "#120aff",
            width: 70,
            height: 70,
            borderRadius: 50,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "red",
                width: 20,
                height: 20,
                borderRadius: 150,
                fontSize: "small",
                color: "white",
                position: "absolute",
                zIndex: 1,
                marginLeft: 40,
                top: 10,
              }}
              onClick={() => router.push("/cart")}
            >
              {productNum}
            </div>
            <Icon.CartFill size={30} color="white" />
          </div>
        </div>
      </div>
    </>
  );
}
