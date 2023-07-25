import group from "../../../assets/icons/group.svg";
import person from "../../../assets/icons/person.svg";
import wrench from "../../../assets/icons/Wrench.svg";
import check from "../../../assets/icons/check.svg";
import delivery from "../../../assets/icons/deliveryt.svg";

const CoreFeatures = () => {
  return (
    <div className="mt-20 ">
      <div className="text-center space-y-5">
        <h4 className="text-2xl font-bold text-orange-600">Core Features</h4>
        <h2 className="text-4xl font-bold ">Why Choose Us</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-10/12 mx-auto mt-10">
        <div className="border-2 rounded-xl  ">
          <img src={group} className="mx-auto pt-4" />
          <h5 className="font-bold text-center mt-1">Expert Team</h5>
        </div>
        <div className="border-2 p-5 rounded-xl ">
          <img src={person} className="mx-auto" />
          <h5 className="font-bold text-center mt-1">24/7 Support</h5>
        </div>
        <div className="border-2 p-5 rounded-xl">
          <img src={wrench} className="mx-auto" />
          <h5 className="font-bold text-center mt-1">Best Equipment</h5>
        </div>
        <div className="border-2 p-5 rounded-xl ">
          <img src={check} className="mx-auto" />
          <h5 className="font-bold text-center mt-1">100% Guranty</h5>
        </div>
        <div className="border-2 p-5 rounded-xl">
          <img src={delivery} className="mx-auto" />
          <h5 className="font-bold text-center mt-1">Time Delivery</h5>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
