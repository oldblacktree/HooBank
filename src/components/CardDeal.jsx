import style from "../style";
import {card} from '../assets';
import Button from "./Button";

const CardDeal = () => (
  <section id="" className="flex flex-col md:flex-row py-6 sm:py-16">
  <div className="flex flex-col flex-1 justify-center items-start">
    <h2 className={`${style.h2}`}>Find a better card deal <span className="ss:whitespace-nowrap md:whitespace-normal xl:whitespace-nowrap">in few easy steps.</span></h2>
    <p className={`${style.paragraph} max-w-[470px] mt-6`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
    <Button style="mt-10">Get started</Button> 
  </div>
  <div className="flex flex-col flex-1 justify-center items-start md:ml-10 mt-10 md:mt-0 ">
    <img src={card} alt="card" className="w-full h-full object-contain" />
  </div>
</section>
)

export default CardDeal