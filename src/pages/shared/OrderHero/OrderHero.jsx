import checkout from "../../../assets/images/checkout/checkout.png";

const OrderHero = () => {
  return (
    <div className="card w-full image-full">
      <figure>
        <img src={checkout} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body relative ">
        <h2 className="text-xl md:text-4xl font-bold absolute top-auto md:top-1/2 lg:top-36 ml-4 md:ml-12">
          Booking Details
        </h2>
      </div>
    </div>
  );
};

export default OrderHero;
