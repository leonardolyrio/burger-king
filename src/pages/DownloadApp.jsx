import { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import BK_app from "../assets/BK_app.png";

import { RiCoupon3Line } from "react-icons/ri";
import { FaMedal } from "react-icons/fa";
import { GiPaperBagFolded } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const GooglePlay = (props) => (
  <svg
    {...props}
    fillRule="evenodd"
    clipRule="evenodd"
    imageRendering="optimizeQuality"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 466 511.98"
  >
    <g fillRule="nonzero">
      <path
        fill="#EA4335"
        d="M199.9 237.8 1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81 11.16 0 20.93-2.79 29.3-8.37l244.16-139.46L199.9 237.8z"
      />
      <path
        fill="#FBBC04"
        d="m433.91 205.1-104.65-60-111.61 110.22 113.01 108.83 104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23-1.4-20.93-13.95-40.46-32.09-50.22z"
      />
      <path
        fill="#34A853"
        d="M199.42 273.45 329.27 145.1 87.9 8.37C79.53 2.79 68.36 0 57.2 0 30.7 0 6.98 18.14 1.4 41.86l198.02 231.59z"
      />
      <path
        fill="#4285F4"
        d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86L1.39 41.86z"
      />
    </g>
  </svg>
);

const AppStore = (props) => (
  <svg {...props} xmlSpace="preserve" viewBox="0 0 800 800">
    <linearGradient
      id="appstore__a"
      x1="400.05"
      x2="400.05"
      y1="798.772"
      y2="-1.228"
      gradientTransform="matrix(1 0 0 -1 0 798.772)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style={{ stopColor: "#18bffb" }} />
      <stop offset="1" style={{ stopColor: "#2072f3" }} />
    </linearGradient>
    <path
      fill="url(#appstore__a)"
      d="M638.4 0H161.6C72.3 0 0 72.3 0 161.6v476.9C0 727.7 72.3 800 161.6 800h476.9c89.2 0 161.6-72.3 161.6-161.6V161.6C800 72.3 727.7 0 638.4 0z"
    />
    <path
      fill="#FFF"
      d="m396.6 183.8 16.2-28c10-17.5 32.3-23.4 49.8-13.4s23.4 32.3 13.4 49.8L319.9 462.4h112.9c36.6 0 57.1 43 41.2 72.8H143c-20.2 0-36.4-16.2-36.4-36.4s16.2-36.4 36.4-36.4h92.8l118.8-205.9-37.1-64.4c-10-17.5-4.1-39.6 13.4-49.8 17.5-10 39.6-4.1 49.8 13.4l15.9 28.1zM256.2 572.7l-35 60.7c-10 17.5-32.3 23.4-49.8 13.4S148 614.5 158 597l26-45c29.4-9.1 53.3-2.1 72.2 20.7zm301.4-110.1h94.7c20.2 0 36.4 16.2 36.4 36.4s-16.2 36.4-36.4 36.4h-52.6l35.5 61.6c10 17.5 4.1 39.6-13.4 49.8-17.5 10-39.6 4.1-49.8-13.4-59.8-103.7-104.7-181.3-134.5-233-30.5-52.6-8.7-105.4 12.8-123.3 23.9 41 59.6 102.9 107.3 185.5z"
    />
  </svg>
);

function DownloadApp() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      // Rola 300px para a esquerda de forma suave
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      // Rola 300px para a direita de forma suave
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-secondary">
      <Header />

      <section className="min-h-dvh flex flex-col lg:flex-row items-center gap-10 lg:gap-0 pt-32 lg:pt-0 max-[500px]:px-5 px-10 lg:px-20 bg-secondary">
        <div className="flex flex-col items-center lg:items-start justify-center gap-10">
          <div className="flex flex-col lg:items-start lg:text-start items-center text-center ">
            <h1 className="max-w-137.5 text-5xl sm:text-6xl lg:text-7xl text-title font-secondary mb-5 leading-tight">
              O BK NA PALMA DA SUA MÃO
            </h1>
            <p className="opacity-90 max-w-full lg:max-w-[80%] text-tertiary font-primary text-base sm:text-lg">
              Baixe o app oficial do Burger King e tenha acesso a cupons
              secretos, o exclusivo programa de recompensas BK Rewards e a
              praticidade de pedir e retirar sem filas.
            </p>
          </div>

          <a href="#download" className="bg-primaryInverted py-3 px-6 text-tertiary text-2xl font-tertiary rounded-full">Baixar agora</a>
        </div>

        <img
          src={BK_app}
          alt="Mockup BK Rewards"
          className="w-[80%] sm:w-[45%] lg:w-82 max-w-md md:max-w-lg lg:max-w-lg h-auto object-contain select-none"
        />
      </section>

      <section className="mb-15 py-20 max-[500px]:px-5 px-10 lg:px-20 bg-[#F6F3F2]">
        <h2 className="max-w-137.5 mx-auto text-4xl text-center text-title font-secondary mb-20 leading-tight">
          VANTAGENS QUE DÃO ÁGUA NA BOCA
        </h2>

        <div className="flex flex-wrap items-stretch justify-center gap-6">
          <div className="max-w-sm w-full flex flex-col items-center text-center p-5 bg-secondary rounded-xl shadow-tertiary shadow-[4px_4px_0]">
            <div className="text-3xl bg-title/30 p-6 rounded-full mb-3">
              <RiCoupon3Line className="text-tertiary" />
            </div>
            <h2 className="text-2xl text-tertiary font-tertiary mb-5">
              Cupons Secretos
            </h2>
            <p className="opacity-90 max-w-full lg:max-w-[80%] text-tertiary font-primary text-base">
              Ofertas exclusivas que você só encontra aqui. Descontos de verdade
              para matar sua fome sem pesar no bolso.
            </p>
          </div>

          <div className="max-w-sm w-full flex flex-col items-center text-center p-5 bg-secondary rounded-xl shadow-tertiary shadow-[4px_4px_0]">
            <div className="text-3xl bg-title/30 p-6 rounded-full mb-3">
              <FaMedal className="text-tertiary" />
            </div>
            <h2 className="text-2xl text-tertiary font-tertiary mb-5">
              BK Rewards
            </h2>
            <p className="opacity-90 max-w-full lg:max-w-[80%] text-tertiary font-primary text-base">
              Junte coroas em cada compra e troque por produtos grátis. Quanto
              mais você come, mais você ganha.
            </p>
          </div>

          <div className="max-w-sm w-full flex flex-col items-center text-center p-5 bg-secondary rounded-xl shadow-tertiary shadow-[4px_4px_0]">
            <div className="text-3xl bg-title/30 p-5 rounded-full mb-3">
              <GiPaperBagFolded className="text-tertiary text-4xl" />
            </div>
            <h2 className="text-2xl text-tertiary font-tertiary mb-5">
              Peça e Retire
            </h2>
            <p className="opacity-90 max-w-full lg:max-w-[80%] text-tertiary font-primary text-base">
              Pule a fila! Faça seu pedido pelo app, pague e apenas retire no
              balcão quando estiver pronto.
            </p>
          </div>
        </div>
      </section>

      <section className=" flex flex-col gap-10 lg:gap-20 max-[500px]:px-5 px-10 lg:px-20 bg-secondary py-10">
        {/* CABEÇALHO RESPONSIVO */}
        {/* flex-col no mobile, lg:flex-row no desktop. lg:items-end alinha pela base. */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="w-full lg:w-[70%]">
            <h2 className="text-4xl text-title font-secondary mb-3">
              EXPLORE O APP
            </h2>
            <p className="opacity-90 max-w-full text-tertiary font-primary text-base sm:text-lg">
              Uma interface intuitiva, rápida e deliciosa de usar. Tudo o que
              você precisa a um toque de distância.
            </p>
          </div>

          {/* Botões descem no mobile, ficam à direita no PC */}
          <div className="flex items-center gap-3 text-2xl self-start lg:self-auto select-none">
            <FaArrowLeft
              onClick={scrollLeft}
              className="text-tertiary hover:scale-[1.05] active:scale-[0.98] cursor-pointer transition-all duration-200"
            />
            <FaArrowRight
              onClick={scrollRight}
              className="text-tertiary hover:scale-[1.05] active:scale-[0.98] cursor-pointer transition-all duration-200"
            />
          </div>
        </div>

        {/* CARROSSEL */}
        {/* overflow-x-auto cria a rolagem. snap-x ativa a "trava" ao rolar. */}
        {/* As classes entre colchetes escondem a barra de rolagem feia do navegador */}
        <div
          ref={carouselRef}
          className="flex items-center gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth w-full pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        >
          {/* ITEM DO CARROSSEL 1 */}
          {/* min-w-[XX] garante que a imagem não seja espremida pelo flexbox */}
          {/* snap-center faz a imagem parar exatamente no meio ao soltar o arrasto */}
          <img
            src={BK_app}
            alt="Mockup BK Rewards"
            className="snap-center min-w-[70%] sm:min-w-[40%] lg:min-w-[300px] max-w-lg h-auto object-contain select-none pointer-events-none"
          />

          {/* ITEM DO CARROSSEL 2 */}
          <img
            src={BK_app}
            alt="Mockup BK Rewards"
            className="snap-center min-w-[70%] sm:min-w-[40%] lg:min-w-[300px] max-w-lg h-auto object-contain select-none pointer-events-none"
          />

          <img
            src={BK_app}
            alt="Mockup BK Rewards"
            className="snap-center min-w-[70%] sm:min-w-[40%] lg:min-w-[300px] max-w-lg h-auto object-contain select-none pointer-events-none"
          />

          <img
            src={BK_app}
            alt="Mockup BK Rewards"
            className="snap-center min-w-[70%] sm:min-w-[40%] lg:min-w-[300px] max-w-lg h-auto object-contain select-none pointer-events-none"
          />
        </div>
      </section>

      <section id="download" className="bg-title overflow-hidden max-[500px]:mx-5 mx-10 rounded-4xl my-15 lg:my-15 lg:mx-20 shadow-lg p-10 lg:h-82 flex items-center justify-center relative">
        <div className="flex flex-col items-center gap-10 w-full lg:w-[55%] z-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-white text-3xl sm:text-4xl font-secondary mb-3 tracking-tight">
              TÁ ESPERANDO O QUÊ?
            </h2>
            <p className="opacity-90 max-w-full sm:max-w-[85%] lg:max-w-[90%] text-white font-primary mb-6 text-sm sm:text-base leading-relaxed">
              O hambúrguer de verdade, grelhado no fogo como churrasco, está a
              apenas alguns cliques de você. Baixe agora e comece a ganhar
              coroas!
            </p>
          </div>

          <div className="flex max-[430px]:flex-col items-center gap-5 select-none">
            <a
              href="https://play.google.com/store/apps/details?id=burgerking.com.br.appandroid&hl=pt_BR&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center gap-2 p-2 bg-white rounded-md shadow-sm hover:scale-[1.03] transition-all duration-200"
            >
              <GooglePlay className="w-7 h-auto" />
              <p className="text-[#4b4e52] font-medium opacity-90">
                Google Play
              </p>
            </a>
            <a
              href="https://apps.apple.com/br/app/burger-king-brasil/id1295116265"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center gap-2 py-[8.5px] px-[12px] bg-white rounded-md shadow-sm hover:scale-[1.03] transition-all duration-200"
            >
              <AppStore className="w-8 h-auto" />
              <p className="text-[#4b4e52] font-medium opacity-90">App Store</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default DownloadApp;
