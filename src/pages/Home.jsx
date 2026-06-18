import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimate from "../components/ScrollAnimate";

import Hero from "../assets/Hero.png";
import King_Box from "../assets/King_Box_combo_food.jpeg";
import BK_app from "../assets/BK_app.png";

import { FaFire } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineFastfood, MdOutlineIcecream } from "react-icons/md";

function Home() {
  const [clickCount, setClickCount] = useState(0);

  const handleBurgerClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <main className="bg-[#F6F3F2] font-tertiary">
      <Header />

      <ScrollAnimate>
        <section className="pt-32 min-h-dvh flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 lg:gap-0 max-[500px]:px-5 px-10 lg:px-20 bg-secondary">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 pb-10">
            <div className="flex flex-col items-center lg:items-start">
              <span className="flex items-center gap-1 py-1 px-2 mb-5 text-[#8d8268] text-sm bg-[#EBE1D1] rounded-full group cursor-pointer select-none">
                <FaFire className="group-active:text-red-500 group-active:-translate-y-1 transition-all duration-200" />{" "}
                GRELHADO NA CHAMA
              </span>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl text-title font-secondary mb-5 leading-tight">
                {clickCount >= 5 ? (
                  <>
                    UÉ, CADÊ <br /> O LANCHE?
                  </>
                ) : (
                  <>
                    O SABOR <br className="hidden lg:block" /> É REI
                  </>
                )}
              </h2>

              <p className="opacity-90 max-w-full lg:max-w-[80%] text-[#5D403A] font-primary mb-10 text-base sm:text-lg">
                {clickCount >= 5
                  ? "Você clicou tanto que alguém acabou comendo o Rodeio Duplo! Atualize a página para grelhar outro."
                  : "Grelhado no fogo desde 1954. Sinta a diferença do verdadeiro sabor defumado em cada mordida."}
              </p>
            </div>

            <Link
              to={"/menu"}
              className="w-fit flex items-center gap-2 py-4 sm:py-5 px-12 sm:px-20 text-white text-xl sm:text-2xl bg-title shadow-inverted shadow-[3px_2px_0] rounded-full group transition-all duration-200 select-none"
              onClick={() => window.scrollTo({ top: 0 })}
            >
              Peça Agora{" "}
              <FaArrowRight className="translate-y-0.5 group-hover:translate-x-2 transition-transform duration-200" />
            </Link>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={Hero}
              alt="Rodeio Duplo"
              onClick={handleBurgerClick}
              className={`w-[80%] sm:w-[60%] lg:w-full max-w-md md:max-w-lg lg:max-w-lg h-auto ml-5 object-contain drop-shadow-2xl drop-shadow-primary/20 active:scale-[0.90] cursor-pointer transition-all duration-300 select-none
                                ${clickCount >= 5 ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"}
                            `}
            />
          </div>
        </section>
      </ScrollAnimate>

      <section className="min-h-screen max-[500px]:px-5 px-10 lg:px-20 bg-[#F6F3F2] pt-15">
        <div className="flex items-end justify-between mb-10">
          <div className="flex flex-col items-start gap-1">
            <span className="text-title text-xs font-bold tracking-[1px]">
              NOVIDADES
            </span>
            <h2 className="text-2xl min-[500px]:text-4xl font-secondary text-neutral">
              Ofertas Imperdíveis
            </h2>
          </div>
          <Link
            to={"/menu"}
            className="flex items-center gap-1 text-title group max-[500px]:text-sm text-lg"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            Ver tudo{" "}
            <IoIosArrowForward className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="bg-bg rounded-4xl lg:col-span-2 overflow-hidden flex flex-col md:justify-between relative min-h-125 lg:h-137.5 shadow-sm">
            <div className="flex flex-col items-start p-8 sm:p-12 z-10 max-w-full md:max-w-[60%]">
              <span className="text-white text-[12px] bg-title py-1.5 px-3 rounded-md mb-4 tracking-wide">
                TEMPO LIMITADO
              </span>
              <h3 className="text-title text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                King Box: Escolha seu Favorito
              </h3>
              <p className="opacity-90 text-[#5D403A] font-primary mb-6 text-sm sm:text-base leading-relaxed">
                Combo completo com batata frita, bebida e o sanduíche que você
                mais ama.
              </p>

              <Link
                to={"/ofertas"}
                className="py-3 px-8 text-white text-md bg-neutral rounded-full hover:scale-[1.03] transition-transform duration-200"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                Saiba Mais
              </Link>
            </div>

            <div className="relative md:absolute md:bottom-0 md:right-0 w-full sm:w-[85%] md:w-[60%] lg:w-[50%] h-64 sm:h-80 md:h-[55%] lg:h-[60%] rounded-tl-[4rem] overflow-hidden border-l-4 border-t-4 border-bg self-end mt-4 md:mt-0">
              <img
                src={King_Box}
                alt="King Box"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 h-full justify-between">
            <Link
              to={"/ofertas"}
              className="bg-title text-white p-8 rounded-4xl flex flex-col justify-between min-h-60 lg:h-65.75 relative group cursor-pointer shadow-sm"
              onClick={() => window.scrollTo({ top: 0 })}
            >
              <div>
                <h3 className="text-3xl font-bold mb-2">2 por R$ 25,90</h3>
                <p className="opacity-90 text-white/90 text-sm font-primary max-w-[85%]">
                  Sabor em dose dupla pra quem não quer dividir.
                </p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <MdOutlineFastfood className="text-4xl" />
                <FaArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-200" />
              </div>
            </Link>

            <Link
              to={"/menu"}
              state={{ categoria: "Sobremesas" }}
              className="bg-secondary text-[#2B1B17] p-8 rounded-4xl flex flex-col justify-between min-h-60 lg:h-65.75 relative group cursor-pointer shadow-sm"
              onClick={() => window.scrollTo({ top: 0 })}
            >
              <div>
                <h3 className="text-3xl font-bold mb-2">Sobremesas BK</h3>
                <p className="opacity-90 text-[#5D403A] text-sm font-primary max-w-[85%]">
                  Feche seu pedido com chave de ouro.
                </p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <MdOutlineIcecream className="text-4xl text-[#2B1B17]" />
                <FaArrowRight className="text-xl text-[#2B1B17] group-hover:translate-x-2 transition-transform duration-200" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] overflow-hidden max-[400px]:mx-0 max-[400px]:rounded-none max-[400px]:my-0 max-[400px]:mt-15 max-[500px]:mx-5 mx-10 rounded-4xl my-15 lg:my-15 lg:mx-20 shadow-lg lg:h-95 flex items-center relative">
        <div className="flex flex-col lg:flex-row items-center justify-between px-8 sm:px-12 lg:px-20 py-10 lg:py-0 w-full max-w-7xl mx-auto gap-10 lg:gap-0 relative h-full">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[55%] z-10">
            <span className="text-white text-xs bg-title py-1.5 px-3 rounded-md mb-4 tracking-wide">
              CLUBE BK
            </span>

            <h2 className="text-[#FFDAD3] text-3xl sm:text-4xl font-secondary mb-3 tracking-tight">
              BK Rewards
            </h2>

            <p className="opacity-90 max-w-full sm:max-w-[85%] lg:max-w-[90%] text-[#FFDAD3] font-primary mb-6 text-sm sm:text-base leading-relaxed">
              Compre, acumule pontos e troque por comida grátis. A cada R$ 1
              real gasto, você ganha 1 ponto. Ser Rei nunca foi tão vantajoso.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                to={"/download"}
                className="w-full sm:w-fit text-center text-white py-3 px-6 bg-title hover:bg-primary/85 rounded-full shadow-md transition-colors duration-200 text-sm sm:text-base"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                Baixar o App
              </Link>
              <Link
                to={"/rewards"}
                className="w-full sm:w-fit text-center text-[#FFDAD3] py-3 px-6 border-2 border-[#FFDAD3]/30 hover:border-[#FFDAD3] rounded-full transition-colors duration-200 text-sm sm:text-base"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                Ver Recompensas
              </Link>
            </div>
          </div>

          <div
            id="clubeBk"
            className="w-full lg:w-auto flex justify-center lg:block lg:absolute lg:right-25 lg:bottom-5 lg:top-5 z-20"
          >
            <img
              src={BK_app}
              alt="Mockup BK Rewards"
              className="w-64 sm:w-72 lg:w-auto h-auto lg:h-82 object-contain rounded-3xl select-none"
            />
          </div>
        </div>
      </section>
      <section className="min-h-72 flex flex-col items-center justify-center text-center pt-10 pb-20 max-[500px]:px-5 px-10 lg:px-20 bg-secondary">
        <h2 className="text-title text-4xl font-secondary mb-5">
          FIQUE POR DENTRO
        </h2>
        <p className="opacity-90 max-w-137.5 text-[#5D403A] font-primary mb-10">
          Assine nossa newsletter e receba as promoções mais quentes direto no
          seu e-mail.
        </p>
        <div>
          <form className="flex flex-wrap items-center justify-center gap-5">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              maxLength={50}
              required
              className="p-[1rem_3rem_1rem_1rem] text-[#333] bg-white border-2 border-title outline-none rounded-full focus:border-primary transition-all duration-200"
            />
            <button className="py-4 px-10 text-white bg-title shadow-inverted shadow-[3px_2px_0] rounded-full cursor-pointer hover:scale-[1.03] transition-transform duration-200">
              Cadastrar
            </button>
          </form>
        </div>
      </section>

      <div className="bg-secondary">
        <Footer />
      </div>
    </main>
  );
}

export default Home;
