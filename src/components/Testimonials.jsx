import { feedback } from "../constants";
import style from "../style";
import { quotes } from "../assets";

const Feedback = ({ content, name, title, img }) => (
  <div className="flex flex-col px-5 ss:px-10 py-6 ss:py-12 rounded-3xl sm:max-w-[370px] feedback-card mt-10">
    <img
      src={quotes}
      alt="quotes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="text-[18px] leading-[32.4px] text-white font-poppins my-10">
      {content}
    </p>
    <div className="flex flex-1 items-end">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <p className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </p>
        <p className="font-poppins text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section id="clients" className="flex flex-col py-6 sm:py-16 relative">
    <div className="absolute w-[60%] h-[60%] -right-[50%] rounded-full bottom-40 billing-blue-gradient z-[0]" />
    <div className="flex md:items-center w-full flex-col md:flex-row mb-6 sm:mb-15 relative z-[1]">
      <h1 className={`${style.h2} flex-1`}>
        What people are <br /> saying about us
      </h1>
      <div className="flex items-center flex-1 md:ml-10 mt-10 md:mt-0">
        <p className={`${style.paragraph} max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap justify-center sm:justify-start w-full relativ z-[1] gap-6">
      {feedback.map((card) => (
        <Feedback key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
