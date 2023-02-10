import { discount, robot } from "../assets";
import style from "../style";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className="flex md:flex-row flex-col py-6 sm:py-16">
    <div className="flex-1 flex flex-col justify-center items-start px-6 sm:px-16 xl:px-0">
      <div className="flex items-center px-4 py-[6px] rounded-xl bg-discount-gradient">
        <img src={discount} alt="discount" className="h-8 w-8" />
        <p className={`${style.paragraph} uppercase ml-2`}>
          <span className="text-white">20% </span>
          <span>Discount For </span>
          <span className="text-white">1 Month </span>
          <span>Account</span>
        </p>
      </div>
      <div className="flex w-full mt-2">
        <div className="relative flex-1">
          <h1 className="font-poppins font-semibold text-white text-[52px] sm:text-[72px] sm:leading-[100px] relative tracking-wide">
            <span>The Next</span> <br />
            <span className="text-gradient">Generation</span> <br />
            <span className="md:whitespace-nowrap">Payment Method</span>
          </h1>
          <div className="absolute right-0 top-[12px] sm:top-[28px]  hidden ss:flex">
            <GetStarted />
          </div>
        </div>
      </div>
      <p className={`${style.paragraph} max-w-[470px] mt-10`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className="my-10 md:ny-0 flex flex-1 relative">
      <img
        src={robot}
        alt="billing"
        className="w-full h-full relative z-[5] object-contain"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 billing-pink-gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 billing-white-gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 billing-blue-gradient" />
    </div>
    <div className=" flex ss:hidden justify-center">
      <GetStarted />
    </div>
  </section>
);

export default Hero;
