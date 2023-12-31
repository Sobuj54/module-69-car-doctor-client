import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-auto md:h-[600px] mt-8 ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-2 md:space-y-7 text-white w-11/12 lg:w-1/2 pl-2 md:pl-12 ">
            <h2 className="text-2xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-sm md:btn-md btn-secondary mr-5">
                Discover More
              </button>
              <button className="btn btn-sm md:btn-md btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide4" className="btn btn-circle btn-sm md:btn-md mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl " />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-2 md:space-y-7 text-white w-11/12 lg:w-1/2 pl-2 md:pl-12 ">
            <h2 className="text-2xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary btn-sm md:btn-md mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-sm md:btn-md btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute  rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide1" className="btn btn-circle btn-sm md:btn-md mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl " />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-2 md:space-y-7 text-white w-11/12 lg:w-1/2 pl-2 md:pl-12 ">
            <h2 className="text-2xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-secondary btn-sm md:btn-md mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-sm md:btn-md btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute  rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle btn-sm md:btn-md mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-sm md:btn-md">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="space-y-2 md:space-y-7 text-white w-11/12 lg:w-1/2 pl-2 md:pl-12 ">
            <h2 className="text-2xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-sm md:btn-md btn-secondary  mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary btn-sm md:btn-md">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle btn-sm md:btn-md mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
