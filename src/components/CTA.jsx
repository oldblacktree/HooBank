import style from "../style";
import Button from "./Button";

const CTA = () => (
  <section className="flex flex-col sm:flex-row w-full px-6 sm:px-16 py-6 sm:py-16 gap-10 bg-black-gradient-2 rounded-[20px] items-center my-6 sm:my-16">
    <div className="flex-1 flex flex-col">
      <h2 className={style.h2}>Let’s try our service now!</h2>
      <p className={`${style.paragraph} max-w-[470px] mt-6`}>
        {" "}
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <Button>Get started</Button>
  </section>
);

export default CTA;
