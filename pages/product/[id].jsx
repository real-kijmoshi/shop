/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { parser } from "@/utils/products";
import ImageSlider from "../components/imageSlider";

export default function product({ product }) {
  return (
    <div style={{ textAlign: "center" }}>
      todo - better this page
      <h1>{product?.product}</h1>
      <ImageSlider images={product?.images || []} width={50} />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  return { props: { product: parser(ctx.query.id) } };
};
