import { useEffect, useState } from "react";
import cylinders from "../assets/cylinders.png";
import skig_process from "../assets/SKIG-Process.png";
function Introduction() {
  const [screenSize, getDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  return (
    <div className="w-[100%] h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center">
      <div className="w-full h-full flex flex-col flex-1 justify-center lg:justify-start lg:p-40 lg:py-0 p-10 items-center lg:items-start ">
        <div className="w-full  flex flex-col items-center pt-32 lg:items-start">
          <p className="text-black font-roboto text-5xl lg:text-7xl leading-normal tracking-normal text-center  lg:text-left">
            Sri Krishna
          </p>
          <p className="text-black font-roboto text-5xl lg:text-7xl font-extralight leading-normal tracking-normal">
            Industrial Gases
          </p>
        </div>
        <div className="w-full ">
          <div className="relative p-16 lg:pl-0 ">
            <p className="font-roboto lg:font-light leading-normal lg:tracking-wider text-lg lg:text-xl  text-center lg:text-left">
              is one of the leading dealers of Gas Cylinders from Chennai, Tamil
              Nadu.
              <br />
              We are one of the most sought-after Suppliers of these products.
              We facilitate the delivery of bulk order at the clients’
              doorsteps, at extremely affordable prices.
            </p>
            {screenSize.width > 1023 && (
              <div className="w-full h-full absolute p-10 pl-0">
                <img src={skig_process} alt="process" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img
          src={cylinders}
          alt="cylinder"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}

export default Introduction;
