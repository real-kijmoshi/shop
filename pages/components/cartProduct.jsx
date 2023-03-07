import ImageSlider from "./imageSlider";

export default function cartProduct(props) {
  const { product, images, price, quantity, id } = props?.data || {};

  return (
    <div key={id}>
      <h1>{product}</h1>
      <ImageSlider images={images || []} width={25} />
      <h2>
        {price}$ quanity: {quantity}
      </h2>
    </div>
  );
}
