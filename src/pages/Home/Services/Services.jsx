import { useEffect, useRef } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [ascending, setAscending] = useState(true);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://car-doctor-server-three-chi.vercel.app/services?search=${search}&sort=${
        ascending ? 1 : -1
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [ascending, search]);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  return (
    <div className="mt-16">
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-bold text-orange-500">Services</h3>
        <h2 className="text-4xl font-bold ">Our Service Area</h2>
        <p className="px-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
        <div className="form-control">
          <div className="input-group flex justify-center">
            <input
              type="text"
              ref={searchRef}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button
          onClick={() => setAscending(!ascending)}
          className="btn btn-primary">
          {ascending ? "Price : High to Low" : "Price : Low to High"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
