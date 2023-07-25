import { FaBusinessTime, FaPhone, FaSearchLocation } from "react-icons/fa";

const OpenTime = () => {
  return (
    <div className="w-full mt-24  ">
      <div className="stats stats-vertical lg:stats-horizontal shadow lg:h-32 w-full">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBusinessTime className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title text-lg">We are open monday-friday</div>
          <div className="text-2xl font-bold md:stat-value">
            7:00 am - 9:00 pm
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaPhone className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title text-lg">Have a question?</div>
          <div className="text-2xl font-bold md:stat-value">+2546 251 2658</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaSearchLocation className="inline-block w-8 h-8 stroke-current" />
          </div>
          <div className="stat-title text-lg">Need a repair? our address</div>
          <div className="text-2xl font-bold md:stat-value">
            Liza Street, New York
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenTime;
