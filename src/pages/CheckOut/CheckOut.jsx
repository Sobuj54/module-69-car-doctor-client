import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;
  const { user } = useContext(AuthContext);

  const handleBookingService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const order = {
      customerName: name,
      date,
      email,
      service: _id,
      price,
    };

    console.log(order);
  };

  return (
    <div className="w-11/12 mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center mb-4">
        Booking page : {title}
      </h2>
      <form onSubmit={handleBookingService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              name="amount"
              defaultValue={"$ " + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Confirm Order"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
