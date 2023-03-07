import ImageSlider from "./imageSlider"

export default function cartProduct(props) {
  const { product: name, images, price, quantity } = props.data;

  return (
    <div key={props.data.id}>
      <h1>{name}</h1>
      <ImageSlider images={images} width={25} />
      <h2>{price}$  quanity: {quantity}</h2>
    </div>
  );
}
