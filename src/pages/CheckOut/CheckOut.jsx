import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title } = service;

  return <div>booking page : {title}</div>;
};

export default CheckOut;
