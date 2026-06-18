import { Link } from "react-router-dom";
import BK_logo from "../assets/burger_king_logo.svg";

const footerLinks = [
  { to: "/download", label: "Baixar aplicativo" },
  { to: "/politica-de-privacidade", label: "Política de Privacidade" },
  { to: "/termos", label: "Termos e Serviços" },
  { to: "/contato", label: "Contate-nos" },
  { to: "/trabalhe-conosco", label: "Trabalhe conosco" },
];

function Footer() {
  return (
    <footer className="min-h-40 py-5 px-10 bg-[#1A1A1A] text-white rounded-t-4xl">
      <div className="flex max-[850px]:flex-col max-[850px]:gap-3 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={BK_logo} alt="Logo BK" className="w-12 h-12" />
          <h1 className="text-3xl font-secondary">BURGER KING</h1>
        </div>

        <ul className="opacity-90 flex max-[590px]:flex-col items-center gap-3 text-[#BE9D97] text-sm font-primary">
          {footerLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="hover:text-white/90"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <hr className="text-[#be9d9744] my-3 mb-10" />

      <div className="opacity-90 flex max-[695px]:flex-col-reverse max-[695px]:gap-3 items-center justify-between text-[#BE9D97] text-sm font-primary">
        <p>
          TM &copy; 2026 Burger King Company LLC. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-5 underline">
          <a
            href="https://instagram.com/burgerking"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/90"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/burgerking"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/90"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
