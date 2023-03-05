import styles from "../../styles/Product.module.css"

export default function Product(props) {
  return (
    <div className={styles.product}>
      <img src={props.data.image} style={{width: 100, height: "auto"}}/>
      <h1>{props.data.product}</h1>
    </div>
  );
}