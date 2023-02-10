import { stats } from "../constants";

const Stats = () => (
  <section className="flex flex-col md:flex-row mb-6 sm:bm-20 gap-4">
    {stats.map((stat, i) => (
      <div key={stat.id} className="flex flex-1 items-center">
        <h3 className="font-poppins font-semibold text-[30px] xs:text-[41px]  xs:leading-[53px] text-white flex-1 md:flex-initial">
          {stat.value}
        </h3>
        <p className="font-poppins text-[14px] xs:text-[21px] xs:leading-[27px] text-gradient uppercase ml-6 flex-[2_2_0%]">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
