import { data } from "@/utils/products";
export default function product({product}) {
  return (
    <div style={{ textAlign: "center"}}>
        <h1>
            {product.product}
        </h1>

        <img src={product.image}/>
    </div>
  );
}

export const getServerSideProps = async ctx  => {
    return {props: {product: data[parseInt(ctx.query.id)]}}
}