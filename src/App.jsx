import {
  Navbar,
  Hero,
  Stats
} from './components';

const App = () => {
  return (
    <div className="bg-primary min-h-[100vh]">
      <div className="px-6 sm:px-16 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full"><Navbar /></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full"><Hero /></div>
      </div>
      <div className="px-6 sm:px-16 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default App;
