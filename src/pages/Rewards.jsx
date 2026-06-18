import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BK_app from "../assets/BK_app.png";

import { FaCrown, FaGift, FaMedal, FaMobileAlt, FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const beneficios = [
  {
    icon: <FaCrown />,
    titulo: "Ganhe coroas",
    texto: "Cada compra vira pontos para trocar por produtos selecionados.",
  },
  {
    icon: <FaGift />,
    titulo: "Resgate recompensas",
    texto: "Escolha lanches, acompanhamentos e sobremesas direto no app.",
  },
  {
    icon: <FaStar />,
    titulo: "Ofertas exclusivas",
    texto: "Cupons e desafios especiais aparecem para membros do clube.",
  },
];

const recompensas = [
  { pontos: "150", nome: "Batata Média", detalhe: "Resgate rápido" },
  { pontos: "250", nome: "Sundae", detalhe: "Sobremesa liberada" },
  { pontos: "400", nome: "Chicken Junior", detalhe: "Lanche clássico" },
  { pontos: "650", nome: "Whopper", detalhe: "O rei do menu" },
];

function Rewards() {
  return (
    <main className="bg-secondary font-tertiary text-tertiary">
      <Header />

      <section className="min-h-dvh pt-32 pb-16 max-[500px]:px-5 px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <span className="inline-flex items-center gap-2 py-1.5 px-3 mb-5 text-xs tracking-[1px] text-title bg-white/70 rounded-full font-tertiary">
            <FaMedal /> CLUBE BK
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-title font-secondary leading-tight mb-5">
            BK Rewards
          </h1>
          <p className="font-primary text-base sm:text-lg opacity-90 max-w-xl mx-auto lg:mx-0 mb-8">
            Compre, acumule coroas e troque por recompensas. Um programa visual
            feito para deixar cada pedido com gosto de próxima conquista.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              to="/download"
              onClick={() => window.scrollTo({ top: 0 })}
              className="w-full sm:w-fit flex items-center justify-center gap-2 py-4 px-8 text-white bg-title shadow-inverted shadow-[4px_4px_0] rounded-full hover:scale-[1.03] transition-all duration-200"
            >
              Baixar App <FaArrowRight />
            </Link>
            <Link
              to="/menu"
              onClick={() => window.scrollTo({ top: 0 })}
              className="w-full sm:w-fit py-4 px-8 text-title bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
            >
              Ver Cardápio
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-sm flex justify-center">
          <div className="absolute inset-8 bg-title/20 blur-3xl rounded-full"></div>
          <img
            src={BK_app}
            alt="Aplicativo BK Rewards"
            className="relative z-10 w-72 sm:w-80 h-auto object-contain drop-shadow-2xl select-none"
          />
        </div>
      </section>

      <section className="max-[500px]:px-5 px-10 lg:px-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {beneficios.map((beneficio) => (
            <article
              key={beneficio.titulo}
              className="bg-white/80 rounded-xl p-6 shadow-tertiary shadow-[4px_4px_0]"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-title text-white text-xl mb-5">
                {beneficio.icon}
              </div>
              <h2 className="text-2xl text-neutral font-secondary mb-2">
                {beneficio.titulo}
              </h2>
              <p className="font-primary text-sm opacity-90">
                {beneficio.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] text-white mx-5 lg:mx-20 rounded-4xl p-8 sm:p-12 mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-title text-xs font-primary font-bold tracking-[1px]">
              TROQUE SEUS PONTOS
            </span>
            <h2 className="text-4xl text-[#FFDAD3] font-secondary mt-2">
              Recompensas em destaque
            </h2>
          </div>
          <p className="font-primary text-sm text-[#FFDAD3]/80 max-w-md">
            Quanto mais coroas, mais opções aparecem para transformar seu pedido
            em recompensa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recompensas.map((item) => (
            <article
              key={item.nome}
              className="bg-secondary text-tertiary rounded-xl p-5 min-h-44 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <FaCrown className="text-title text-2xl" />
                <span className="text-title font-secondary text-3xl">
                  {item.pontos}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-secondary text-neutral">
                  {item.nome}
                </h3>
                <p className="font-primary text-sm opacity-80">
                  {item.detalhe}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-[500px]:px-5 px-10 lg:px-20 pb-20">
        <div className="bg-title text-white rounded-4xl p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-neutral shadow-[4px_4px_0]">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full bg-white text-title text-2xl">
              <FaMobileAlt />
            </div>
            <div>
              <h2 className="text-3xl font-secondary">Seu clube no bolso</h2>
              <p className="font-primary text-sm opacity-90 max-w-xl">
                Acompanhe saldo, cupons e recompensas em uma experiência feita
                para parecer app real no portfólio.
              </p>
            </div>
          </div>
          <Link
            to="/download"
            onClick={() => window.scrollTo({ top: 0 })}
            className="w-full md:w-fit text-center py-3 px-8 bg-white text-title rounded-full hover:scale-[1.03] transition-transform duration-200"
          >
            Baixar agora
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Rewards;
