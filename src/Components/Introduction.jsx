import cylinders from "../assets/cylinders.png";
import skig_process from "../assets/SKIG-Process.png";
function Introduction() {
  return (
    <div className="max-w-screen max-h-screen w-[100%] h-[calc(100vh-70px)] flex  ">
      <div className="w-[50%] h-[100%] p-5 lg:p-20">
        <div className="h-full relative flex flex-col justify-start ">
          <div className="p-5">
            <h1 className="font-roboto text-7xl font-normal tracking-[1.2px]">
              Sri Krishna
            </h1>
            <h1 className="font-roboto text-7xl font-[100] tracking-[1.2px]">
              Industrial Gases
            </h1>
          </div>
          <div className="relative w-full h-full p-2 lg:p-10">
            <p className=" font-roboto text-2xl not-italic font-light leading-10">
              is one of the leading dealers of Gas Cylinders from Chennai, Tamil
              Nadu. We are one of the most sought-after Suppliers of these
              products. We facilitate the delivery of bulk order at the clients’
              doorsteps, at extremely affordable prices.
            </p>
          </div>
          <div className="hidden md:block">
            <img src={skig_process} alt="Skig-process" />
          </div>
        </div>
      </div>
      <div className="">
        <img src={cylinders} alt="cylinders" />
      </div>
    </div>
  );
}

export default Introduction;
