import {apple, bill, google} from '../assets';
import style from '../style'

const Billing = () => (
  <section id="product" className="py-6 sm:py-16 flex justify-center items-center flex-col-reverse md:flex-row" >
    <div className="flex flex-1 md:mr-10 md:mt-0 mt-10 relative">
      <img src={bill} alt="billing" className="w-full h-full object-contain relative z-[5]" />
      <div className="absolute z-[3] billing-white-gradient w-1/2 h-1/2 rounded-full top-0 -left-1/2" />
      <div className="absolute z-[0] billing-pink-gradient w-1/2 h-1/2 rounded-full bottom-0 -left-1/2" />
    </div>
    <div className="flex flex-col flex-1 ">
      <h2 className={`${style.h2}`}>Easily control your <span className="whitespace-nowrap">billing & invoicing.</span></h2>
      <p className={`${style.paragraph} mt-6 max-w-[470px]`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      <div className="flex gap-8 mt-10">
        <img src={apple} alt="apple" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
        <img src={google} alt="google"  className='w-[128px] h-[42px] object-contain cursor-pointer' />
      </div>
    </div>
  </section>
)

export default Billing