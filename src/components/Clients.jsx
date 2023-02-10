import { clients } from "../constants";

const Clients = () => (
  <section className="flex flex-row flex-wrap w-full py-6 sm:py-16 gap-6">
    {clients.map((client) => (
      <div
        className="flex flex-1 justify-center items-center sm:min-w-[220px] min-w-[120px]"
        key={client.id}
      >
        <img
          src={client.logo}
          alt="client"
          className="w-[100px] sm:w-[192px] object-contain"
        />
      </div>
    ))}
  </section>
);

export default Clients;
