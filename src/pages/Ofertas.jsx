import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import KingBox from "../assets/King_Box_combo_food.jpeg";
import Whopper from "../assets/products/whopper.webp";
import OnionRings from "../assets/products/onion_rings.webp";
import Sundae from "../assets/products/sundae_de_caramelo.webp";

import { FaArrowRight, FaBurger, FaCrown, FaFire } from "react-icons/fa6";
import { RiCoupon3Line } from "react-icons/ri";

const ofertas = [
  {
    titulo: "Combo King Box",
    descricao: "Sanduíche, batata, bebida e acompanhamento em uma oferta só.",
    preco: "R$ 34,90",
    selo: "MAIS PEDIDA",
    imagem: KingBox,
    destaque: true,
  },
  {
    titulo: "Whopper em Dobro",
    descricao: "Dois clássicos grelhados na chama para dividir ou não.",
    preco: "R$ 39,90",
    selo: "2 POR 1",
    imagem: Whopper,
  },
  {
    titulo: "Onion Rings + Molho",
    descricao: "Crocância extra para completar qualquer pedido.",
    preco: "R$ 12,90",
    selo: "SNACK",
    imagem: OnionRings,
  },
  {
    titulo: "Sundae Especial",
    descricao: "Sobremesa gelada para fechar o pedido com caramelo.",
    preco: "R$ 9,90",
    selo: "DOCE",
    imagem: Sundae,
  },
];

function Ofertas() {
  return (
    <main className="bg-[#F6F3F2] font-tertiary text-tertiary">
      <Header />

      <section className="pt-32 pb-16 max-[500px]:px-5 px-10 lg:px-20 bg-secondary">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-2 py-1.5 px-3 mb-5 text-xs tracking-[1px] text-title bg-white/80 rounded-full font-tertiary">
              <RiCoupon3Line /> CUPONS BK
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-title font-secondary leading-tight mb-5">
              Ofertas do Rei
            </h1>
            <p className="font-primary text-base sm:text-lg opacity-90 max-w-2xl">
              Uma vitrine visual de promoções com o mesmo clima do aplicativo:
              direta, chamativa e pronta para levar o usuário ao cardápio.
            </p>
          </div>

          <Link
            to="/menu"
            onClick={() => window.scrollTo({ top: 0 })}
            className="w-full sm:w-fit flex items-center justify-center gap-2 py-4 px-8 text-white bg-title shadow-inverted shadow-[4px_4px_0] rounded-full hover:scale-[1.03] transition-all duration-200"
          >
            Ver Menu <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className="max-[500px]:px-5 px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="lg:col-span-2 bg-bg rounded-4xl overflow-hidden min-h-125 shadow-sm flex flex-col md:flex-row">
            <div className="p-8 sm:p-12 flex flex-col justify-between md:w-[52%]">
              <div>
                <span className="inline-flex items-center gap-2 text-white text-xs bg-title py-1.5 px-3 rounded-md mb-5 tracking-wide">
                  <FaFire /> TEMPO LIMITADO
                </span>
                <h2 className="text-title text-4xl sm:text-5xl font-secondary leading-tight mb-4">
                  {ofertas[0].titulo}
                </h2>
                <p className="font-primary opacity-90 mb-8">
                  {ofertas[0].descricao}
                </p>
              </div>
              <div className="flex items-center justify-between gap-5">
                <span className="text-4xl text-neutral font-secondary">
                  {ofertas[0].preco}
                </span>
                <Link
                  to="/menu"
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="py-3 px-6 bg-neutral text-white rounded-full hover:scale-[1.03] transition-transform duration-200"
                >
                  Pedir
                </Link>
              </div>
            </div>
            <div className="md:w-[48%] min-h-80">
              <img
                src={ofertas[0].imagem}
                alt={ofertas[0].titulo}
                className="w-full h-full object-cover"
              />
            </div>
          </article>

          <div className="grid grid-cols-1 gap-6">
            {ofertas.slice(1, 3).map((oferta) => (
              <article
                key={oferta.titulo}
                className="bg-white/80 rounded-4xl overflow-hidden shadow-sm flex min-h-60"
              >
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-title font-primary font-bold">
                      {oferta.selo}
                    </span>
                    <h2 className="text-2xl text-neutral font-secondary mt-2">
                      {oferta.titulo}
                    </h2>
                    <p className="font-primary text-sm opacity-80 mt-2">
                      {oferta.descricao}
                    </p>
                  </div>
                  <span className="text-2xl text-title font-secondary">
                    {oferta.preco}
                  </span>
                </div>
                <img
                  src={oferta.imagem}
                  alt={oferta.titulo}
                  className="w-32 sm:w-40 h-auto object-cover"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-[500px]:px-5 px-10 lg:px-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <article className="bg-title text-white rounded-xl p-6 shadow-neutral shadow-[4px_4px_0]">
            <FaBurger className="text-3xl mb-6" />
            <h2 className="text-3xl font-secondary mb-2">Cupons rápidos</h2>
            <p className="font-primary text-sm opacity-90">
              Cards pensados para consulta rápida, como uma área promocional de
              app.
            </p>
          </article>
          <article className="bg-secondary rounded-xl p-6 shadow-tertiary shadow-[4px_4px_0]">
            <FaCrown className="text-3xl text-title mb-6" />
            <h2 className="text-3xl text-neutral font-secondary mb-2">
              Clube BK
            </h2>
            <p className="font-primary text-sm opacity-90">
              Ofertas combinam com Rewards para criar uma experiência mais
              completa.
            </p>
          </article>
          <article className="bg-white/80 rounded-xl overflow-hidden shadow-tertiary shadow-[4px_4px_0]">
            <img
              src={ofertas[3].imagem}
              alt={ofertas[3].titulo}
              className="w-full h-36 object-cover"
            />
            <div className="p-5">
              <span className="text-title text-2xl font-secondary">
                {ofertas[3].preco}
              </span>
              <h2 className="text-2xl text-neutral font-secondary">
                {ofertas[3].titulo}
              </h2>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Ofertas;
