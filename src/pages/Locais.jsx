import Header from "../components/Header";
import Footer from "../components/Footer";

import { FaClock, FaLocationDot, FaMotorcycle } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdLocalParking, MdOutlineRestaurant } from "react-icons/md";

const restaurantes = [
  {
    nome: "BK Avenida Paulista",
    endereco: "Av. Paulista, 1000 - Bela Vista",
    distancia: "1,2 km",
    horario: "Aberto até 23h",
    recursos: ["Drive-thru", "Retirada", "Delivery"],
  },
  {
    nome: "BK Shopping Center",
    endereco: "Praça de Alimentação - Piso 2",
    distancia: "2,8 km",
    horario: "Aberto até 22h",
    recursos: ["Retirada", "Cupons", "Estacionamento"],
  },
  {
    nome: "BK Vila Madalena",
    endereco: "Rua Harmonia, 450 - Vila Madalena",
    distancia: "4,1 km",
    horario: "Aberto até 00h",
    recursos: ["Delivery", "Rewards", "Totem"],
  },
];

function Locais() {
  return (
    <main className="bg-secondary font-tertiary text-tertiary">
      <Header />

      <section className="pt-32 pb-16 max-[500px]:px-5 px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 py-1.5 px-3 mb-5 text-xs tracking-[1px] text-title bg-white/80 rounded-full font-tertiary">
              <FaLocationDot /> ENCONTRE UM BK
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-title font-secondary leading-tight mb-5">
              Locais
            </h1>
            <p className="font-primary text-base sm:text-lg opacity-90 max-w-2xl">
              Uma tela de busca de restaurantes com cards escaneáveis, horários
              e serviços disponíveis para deixar o projeto com cara de produto.
            </p>
          </div>

          <form className="w-full lg:max-w-md flex items-center gap-3 bg-white rounded-full p-2 shadow-tertiary shadow-[4px_4px_0]">
            <IoSearch className="text-title text-2xl ml-3 shrink-0" />
            <input
              type="text"
              placeholder="Buscar por cidade ou bairro"
              className="w-full bg-transparent outline-none font-tertiary text-sm text-neutral"
            />
            <button
              type="button"
              className="py-3 px-6 bg-title text-white rounded-full hover:scale-[1.03] transition-transform duration-200 cursor-pointer
              "
            >
              Buscar
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
          <section className="flex flex-col gap-5">
            {restaurantes.map((restaurante, index) => (
              <article
                key={restaurante.nome}
                className={`rounded-xl p-6 shadow-tertiary shadow-[4px_4px_0] ${
                  index === 0 ? "bg-title text-white" : "bg-white/80"
                }`}
              >
                <div className="flex items-start justify-between gap-5 mb-5">
                  <div>
                    <h2
                      className={`text-3xl font-secondary ${
                        index === 0 ? "text-white" : "text-neutral"
                      }`}
                    >
                      {restaurante.nome}
                    </h2>
                    <p className="font-primary text-sm opacity-90 mt-1">
                      {restaurante.endereco}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 py-1 px-3 rounded-full text-sm ${
                      index === 0
                        ? "bg-white text-title"
                        : "bg-secondary text-title"
                    }`}
                  >
                    {restaurante.distancia}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="inline-flex items-center gap-2 font-primary text-sm opacity-90">
                    <FaClock /> {restaurante.horario}
                  </span>
                  <span className="inline-flex items-center gap-2 font-primary text-sm opacity-90">
                    <FaMotorcycle /> Delivery disponível
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {restaurante.recursos.map((recurso) => (
                    <span
                      key={recurso}
                      className={`py-1.5 px-3 rounded-full text-xs font-primary ${
                        index === 0
                          ? "bg-white/15 text-white"
                          : "bg-secondary text-tertiary"
                      }`}
                    >
                      {recurso}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </section>

          <section className="bg-bg rounded-4xl min-h-150 p-6 sm:p-8 shadow-sm overflow-hidden relative">
            <div className="absolute inset-0 opacity-50">
              <div className="absolute top-16 left-0 right-0 h-4 bg-white rotate-6"></div>
              <div className="absolute top-56 left-0 right-0 h-4 bg-white -rotate-12"></div>
              <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-white rotate-12"></div>
              <div className="absolute top-0 bottom-0 right-1/4 w-4 bg-white -rotate-6"></div>
            </div>

            <div className="relative z-10 h-full min-h-130 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-title text-xs font-primary font-bold tracking-[1px]">
                    MAPA VISUAL
                  </span>
                  <h2 className="text-4xl text-neutral font-secondary mt-1">
                    Restaurantes próximos
                  </h2>
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-title text-white rounded-full text-xl">
                  <FaLocationDot />
                </div>
              </div>

              <div className="relative h-88">
                <div className="absolute top-10 left-[12%] bg-title text-white rounded-full p-4 shadow-lg">
                  <FaLocationDot />
                </div>
                <div className="absolute top-34 right-[20%] bg-white text-title rounded-full p-4 shadow-lg">
                  <FaLocationDot />
                </div>
                <div className="absolute bottom-12 left-[38%] bg-white text-title rounded-full p-4 shadow-lg">
                  <FaLocationDot />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1A1A1A] text-white rounded-4xl p-6 w-64 shadow-2xl">
                  <MdOutlineRestaurant className="text-3xl text-[#FFDAD3] mb-4" />
                  <h3 className="text-2xl font-secondary">BK mais próximo</h3>
                  <p className="font-primary text-sm text-white/80 mt-1">
                    Avenida Paulista, 1000
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/80 rounded-xl p-5">
                  <MdLocalParking className="text-title text-2xl mb-3" />
                  <h3 className="text-xl text-neutral font-secondary">
                    Estacionamento
                  </h3>
                  <p className="font-primary text-sm opacity-80">
                    Filtro visual para lojas com vaga.
                  </p>
                </div>
                <div className="bg-white/80 rounded-xl p-5">
                  <FaMotorcycle className="text-title text-2xl mb-3" />
                  <h3 className="text-xl text-neutral font-secondary">
                    Delivery
                  </h3>
                  <p className="font-primary text-sm opacity-80">
                    Destaque para pedidos pelo app.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Locais;
