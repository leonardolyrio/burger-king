import { Link } from "react-router-dom";

function BotaoVoltar() {
  return (
    <Link
      to={"/"}
      className="bg-primary text-secondary font-tertiary text-lg px-10 py-3 rounded-full shadow-lg hover:bg-title hover:-translate-y-1 transition-all duration-300"
    >
      Voltar
    </Link>
  );
}

export default BotaoVoltar;
