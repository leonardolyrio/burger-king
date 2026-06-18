import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import BK_logo from "../assets/burger_king_logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (btnRef.current && btnRef.current.contains(event.target)) {
        return;
      }
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const [isElementActive, setIsElementActive] = useState(false);

  useEffect(() => {
    const elemento = document.getElementById("clubeBk");
    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsElementActive(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(elemento);
    return () => observer.disconnect();
  }, []);

  const obterClassesLink = (caminho, classesExtras = "") => {
    const baseClasses = `relative font-medium transition-all duration-200 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-current after:transition-transform after:duration-300 ${classesExtras}`;

    if (location.pathname === caminho) {
      return `${baseClasses} text-title after:scale-x-100 after:origin-left`;
    }
    return `${baseClasses} text-[#5D403A] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left hover:text-title`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full py-4 max-[500px]:px-5 px-10 lg:px-20 flex items-center justify-between bg-secondary/70 backdrop-blur-md border-b border-white/30 font-tertiary z-40 transition-all duration-200
        
        ${isElementActive ? "bg-secondary/70" : ""}
        
        }`}
    >
      <Link
        to={"/"}
        className="flex-1"
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <img src={BK_logo} alt="Logo BK" className="w-12 h-12 select-none" />
      </Link>

      {/* Menu de Navegação - Desktop */}
      <nav className="min-[1000px]:flex items-center gap-5 xl:gap-10 hidden">
        <Link
          to="/"
          className={obterClassesLink("/")}
          onClick={() => window.scrollTo({ top: 0 })}
        >
          Home
        </Link>
        <Link
          to="/menu"
          className={obterClassesLink("/menu")}
          onClick={() => window.scrollTo({ top: 0 })}
        >
          Menu
        </Link>
        <Link to="/rewards" className={obterClassesLink("/rewards")}>
          Rewards
        </Link>
        <Link to="/ofertas" className={obterClassesLink("/ofertas")}>
          Ofertas
        </Link>
        <Link to="/locais" className={obterClassesLink("/locais")}>
          Locais
        </Link>
      </nav>

      <div className="min-[1000px]:flex flex-1 justify-end items-center gap-5 hidden">
        <Link
          to={"/menu"}
          className="py-3 px-6 text-white bg-title shadow-inverted shadow-[4px_4px_0] rounded-full cursor-pointer hover:scale-[1.03] transition-all duration-200"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          Pedir Agora
        </Link>
      </div>

      {/* Botão do Hambúrguer - Mobile */}
      <button
        ref={btnRef}
        onClick={toggleMenu}
        className="min-[1000px]:hidden flex flex-col items-end gap-2 cursor-pointer z-50"
      >
        <div
          className={`bg-title w-8 h-0.75 rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.75" : ""}`}
        ></div>
        <div
          className={`bg-title w-6 h-0.75 rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`bg-title w-8 h-0.75 rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.75" : ""}`}
        ></div>
      </button>

      {/* Menu Lateral Mobile */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen w-75 max-w-[80%] bg-secondary shadow-2xl py-20 px-6 flex flex-col gap-6 min-[1000px]:hidden z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 mt-8">
          <Link
            to="/"
            className={obterClassesLink("/", "text-xl")}
            onClick={() => {
              window.scrollTo({ top: 0 });
              setIsOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className={obterClassesLink("/menu", "text-xl")}
            onClick={() => {
              window.scrollTo({ top: 0 });
              setIsOpen(false);
            }}
          >
            Menu
          </Link>
          <Link
            to="/rewards"
            className={obterClassesLink("/rewards", "text-xl")}
            onClick={() => setIsOpen(false)}
          >
            Rewards
          </Link>
          <Link
            to="/ofertas"
            className={obterClassesLink("/ofertas", "text-xl")}
            onClick={() => setIsOpen(false)}
          >
            Ofertas
          </Link>
          <Link
            to="/locais"
            className={obterClassesLink("/locais", "text-xl")}
            onClick={() => setIsOpen(false)}
          >
            Locais
          </Link>
        </nav>
        <hr className="border-gray-200 my-4" />
        <Link
          to={"/menu"}
          className="py-3 px-6 text-center text-white bg-title shadow-inverted shadow-[4px_4px_0] rounded-full active:scale-[1.03] transition-all duration-200"
          onClick={() => {
            window.scrollTo({ top: 0 });
            setIsOpen(false);
          }}
        >
          Pedir Agora
        </Link>
      </div>
    </header>
  );
}

export default Header;
