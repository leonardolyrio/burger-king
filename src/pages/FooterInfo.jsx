import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FaArrowRight, FaBriefcase, FaFileContract, FaShieldHalved } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const paginas = {
  privacidade: {
    icone: <FaShieldHalved />,
    titulo: "Política de Privacidade",
    etiqueta: "SEGURANÇA",
    intro:
      "Uma página institucional visual para apresentar como dados, preferências e interações seriam tratados dentro da experiência BK.",
    blocos: [
      {
        titulo: "Dados de navegação",
        texto: "Informações básicas podem ser usadas para melhorar ofertas, localização de restaurantes e preferências do usuário.",
      },
      {
        titulo: "Comunicação",
        texto: "E-mails e notificações aparecem apenas como parte da experiência demonstrativa do projeto de portfólio.",
      },
      {
        titulo: "Controle do usuário",
        texto: "O usuário teria acesso para revisar preferências, cancelar comunicações e ajustar permissões.",
      },
    ],
  },
  termos: {
    icone: <FaFileContract />,
    titulo: "Termos e Serviços",
    etiqueta: "CONDIÇÕES",
    intro:
      "Uma área para organizar regras de uso, limitações e informações importantes de uma plataforma inspirada no Burger King.",
    blocos: [
      {
        titulo: "Uso do site",
        texto: "O conteúdo é demonstrativo e foi criado para fins de estudo, prática visual e composição de portfólio.",
      },
      {
        titulo: "Ofertas e preços",
        texto: "Valores e promoções são fictícios e podem ser ajustados para melhorar a apresentação do layout.",
      },
      {
        titulo: "Marca",
        texto: "O projeto não possui vínculo oficial com Burger King Company LLC ou empresas associadas.",
      },
    ],
  },
  contato: {
    icone: <MdOutlineMail />,
    titulo: "Contate-nos",
    etiqueta: "ATENDIMENTO",
    intro:
      "Uma tela de contato para fechar a experiência institucional, com canais simulados e layout alinhado ao restante do site.",
    blocos: [
      {
        titulo: "Suporte ao pedido",
        texto: "Canal visual para dúvidas sobre pedidos, cupons, recompensas e retirada em restaurante.",
      },
      {
        titulo: "Parcerias",
        texto: "Área reservada para mensagens comerciais, imprensa e oportunidades promocionais.",
      },
      {
        titulo: "Feedback",
        texto: "Espaço para receber comentários sobre navegação, cardápio e experiência no aplicativo.",
      },
    ],
  },
  trabalho: {
    icone: <FaBriefcase />,
    titulo: "Trabalhe Conosco",
    etiqueta: "CARREIRAS",
    intro:
      "Uma página de carreiras visual, pensada para combinar com o tom jovem e direto do restante da experiência.",
    blocos: [
      {
        titulo: "Restaurantes",
        texto: "Vagas fictícias para atendimento, cozinha, liderança de turno e operação de loja.",
      },
      {
        titulo: "Escritório",
        texto: "Espaço para oportunidades em marketing, produto, dados e relacionamento com clientes.",
      },
      {
        titulo: "Cultura",
        texto: "Cards valorizam agilidade, atendimento e crescimento dentro da jornada profissional.",
      },
    ],
  },
};

function FooterInfo({ tipo }) {
  const pagina = paginas[tipo] || paginas.privacidade;

  return (
    <main className="bg-secondary font-tertiary text-tertiary">
      <Header />

      <section className="pt-32 pb-20 max-[500px]:px-5 px-10 lg:px-20">
        <div className="bg-bg rounded-4xl p-8 sm:p-12 mb-10 shadow-sm">
          <span className="inline-flex items-center gap-2 py-1.5 px-3 mb-5 text-xs tracking-[1px] text-title bg-white/80 rounded-full font-primary font-bold">
            {pagina.icone} {pagina.etiqueta}
          </span>
          <h1 className="text-5xl sm:text-6xl text-title font-secondary leading-tight mb-5">
            {pagina.titulo}
          </h1>
          <p className="font-primary text-base sm:text-lg opacity-90 max-w-3xl">
            {pagina.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {pagina.blocos.map((bloco) => (
            <article
              key={bloco.titulo}
              className="bg-white/80 rounded-xl p-6 shadow-tertiary shadow-[4px_4px_0]"
            >
              <h2 className="text-2xl text-neutral font-secondary mb-3">
                {bloco.titulo}
              </h2>
              <p className="font-primary text-sm opacity-90">{bloco.texto}</p>
            </article>
          ))}
        </div>

        <div className="bg-title text-white rounded-4xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-neutral shadow-[4px_4px_0]">
          <div>
            <h2 className="text-3xl font-secondary">Projeto de portfólio</h2>
            <p className="font-primary text-sm opacity-90 max-w-2xl">
              Esta página complementa a navegação institucional e mantém a
              experiência visual consistente.
            </p>
          </div>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0 })}
            className="w-full md:w-fit flex items-center justify-center gap-2 py-3 px-8 bg-white text-title rounded-full hover:scale-[1.03] transition-transform duration-200"
          >
            Voltar ao início <FaArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default FooterInfo;
