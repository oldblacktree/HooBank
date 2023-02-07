import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA} from './components';

const App = () => {
  return (
    <div className="bg-primary min-h-[100vh] overflow-hidden">
      <div className="px-6 sm:px-16 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full"><Navbar /></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full"><Hero /></div>
      </div>
      <div className="px-6 sm:px-16 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default App;
