import { features } from '../constants';
import style from '../style';
import Button from './Button';


const Feature = ({haveBg, title, content, icon}) => {
  return (
    <div className={`flex p-6 rounded-[20px] ${haveBg && "feature-card"} items-center`}>
      <div className="w-[32px] h-[32px] xs:w-[64px] xs:h-[64px] rounded-full bg-dimBlue flex justify-center items-center">
        <img src={icon} alt="icon" className='w-1/2 h-1/2 object-contain'/>
      </div>
      <div className="flex flex-col flex-1 ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[26px] mb-1">{title}</h4>
        <p className="font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] ">{content}</p>
      </div>
    </div>
  )
}

const Business = () => (
  <section id="features" className="flex flex-col md:flex-row py-6 sm:py-16">
    <div className="flex flex-col flex-1 justify-center items-start">
      <h2 className={`${style.h2}`}>You do the business,<br className='hidden sm:block'/> we’ll handle the money.</h2>
      <p className={`${style.paragraph} max-w-[470px] mt-6`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <Button style="mt-10">Get started</Button> 
    </div>
    <div className="flex flex-col flex-1 justify-center items-start md:ml-10 mt-10 md:mt-0 gap-6">
      {features.map((feature, i) => {
        return <Feature key={feature.id} {...feature} haveBg={i%2}/>
      })}
    </div>
  </section>
)

export default Business