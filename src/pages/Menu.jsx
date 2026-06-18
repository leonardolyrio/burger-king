import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { produtos, categorias } from "../data/produtos";

function Menu() {
  const location = useLocation();
  const navigate = useNavigate();

  const categoriaInicial = location.state?.categoria || "Todos";
  const [categoriaAtiva, setCategoriaAtiva] = useState(categoriaInicial);

  const produtosFiltrados =
    categoriaAtiva === "Todos"
      ? produtos
      : produtos.filter((produto) => produto.categoria === categoriaAtiva);

  useEffect(() => {
    if (location.state?.categoria) {
      navigate(location.pathname, { replace: true });
    }
  }, [location.pathname, location.state, navigate]);

  return (
    <main className="bg-secondary font-tertiary">
      <Header />

      <section className="min-h-dvh flex flex-col items-start gap-30 pt-32 max-[500px]:px-5 px-10 lg:px-20 mb-20">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl md:text-5xl text-title font-secondary">
            Nossa <span className="text-neutral">Cozinha</span>
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            {categorias.map((categoria) => {
              const isActive = categoriaAtiva === categoria;
              return (
                <button
                  key={categoria}
                  onClick={() => setCategoriaAtiva(categoria)}
                  className={`py-2 px-6 rounded-full cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "text-white bg-title shadow-inverted shadow-[4px_4px_0]"
                      : "text-neutral bg-white/80 hover:text-white hover:bg-title hover:shadow-inverted hover:shadow-[4px_4px_0]"
                  }`}
                >
                  {categoria}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-5 items-stretch justify-center w-full">
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((produto) => (
              /* 1. Removido 'p-5' e adicionado 'overflow-hidden' para truncar os cantos da imagem */
              <div
                key={produto.id}
                className="max-w-sm w-full bg-white/80 shadow-tertiary shadow-[5px_5px_0] rounded-xl flex flex-col overflow-hidden"
              >
                {/* 2. Imagem agora ocupa 100% da largura. 'h-52' define uma altura fixa e 'object-cover' evita distorção */}
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-72 object-cover object-bottom"
                />
                {/* 3. Nova div container com 'p-5' e 'flex-1' apenas para os textos e botões */}
                <div className="p-5 flex flex-col flex-1">
                  <div>
                    <span
                      className={`${produto.corTag} text-white text-[12px] py-1 px-3 rounded-full`}
                    >
                      {produto.tag}
                    </span>
                    <h2 className="mt-4 mb-2 text-neutral text-3xl font-extrabold">
                      {produto.nome}
                    </h2>
                    <p className="opacity-90 max-w-full lg:max-w-[80%] text-[#5D403A] font-primary">
                      {produto.descricao}
                    </p>
                  </div>

                  <div className="mt-auto pt-5 flex items-center justify-between">
                    <span className="text-2xl text-title font-extrabold">
                      {produto.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                    <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-2xl text-white font-bold bg-title shadow-inverted shadow-[2px_2px_0] cursor-pointer hover:bg-inverted hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200">
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-neutral font-medium text-lg mt-10">
              Nenhum item disponível nesta categoria ainda.
            </p>
          )}
        </div>
      </section>

      <div className="bg-title rounded-4xl overflow-hidden my-16 mx-5 lg:mx-20 shadow-[4px_4px_0] shadow-neutral lg:h-60 flex items-center relative">
        <div className="flex flex-col lg:flex-row items-center justify-between px-8 sm:px-12 lg:px-20 py-10 lg:py-0 w-full max-w-7xl mx-auto gap-10 lg:gap-0 relative h-full">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[55%] z-10">
            <h2 className="text-white text-3xl sm:text-4xl font-secondary mb-3 tracking-tight">
              SEJA UM KING!
            </h2>

            <p className="opacity-90 max-w-full sm:max-w-[85%] lg:max-w-[90%] text-white font-primary mb-6 text-sm sm:text-base leading-relaxed">
              Ganhe coroas em cada pedido e troque por sanduíches grátis no
              Clube BK.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/rewards"
              onClick={() => window.scrollTo({ top: 0 })}
              className="w-fit text-center text-title py-2 px-10 bg-white border border-white shadow-[3px_3px_0] shadow-neutral hover:scale-[1.03] active:scale-[0.98] rounded-full transition-all duration-200 text-sm sm:text-base"
            >
              Saber mais
            </Link>
            <Link
              to="/download"
              onClick={() => window.scrollTo({ top: 0 })}
              className="w-fit text-center text-white py-2 px-10 border-2 border-white hover:bg-white hover:text-title active:scale-[0.98] rounded-full transition-colors duration-200 text-sm sm:text-base"
            >
              Entrar agora
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Menu;

