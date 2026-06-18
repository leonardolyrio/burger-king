# Burger King - Clone Web

Uma aplicação multipágina (SPA) inspirada no site do Burger King, focada em componentização, rotas fluidas e otimização de performance para o usuário final.

**Link do projeto:** [Acesse aqui](https://burgerking-rho.vercel.app/)

---

## 🛠️ Tecnologias e Bibliotecas

* **React 19** & **Vite**
* **React Router Dom v6** (Navegação entre páginas sem recarregamento)
* **Tailwind CSS v4** (Estilização utilitária)
* **Lucide React** (Ícones da interface)
* **Imagemin CLI** (Conversão de assets para WebP)

---

## ⚡ O que fiz de relevante nesse projeto?

* **Navegação SPA:** Implementação de rotas para alternar instantaneamente entre Home, Menu, Ofertas, BK Rewards e Cupons sem dar "refresh" na página.
* **Filtro no Cardápio:** Sistema de busca e filtragem por categorias de produtos diretamente na tela de Menu.
* **Animações com Intersection Observer:** Criei um componente reutilizável (`ScrollAnimate`) usando a API nativa do navegador para aplicar efeitos de surgimento conforme o usuário rola a página.
* **Otimização de Performance:** Converti todas as imagens pesadas de produtos (`.jpeg` de ~800kB) para o formato moderno `.webp` (~90kB), reduzindo em mais de 85% o peso total da página carregada.
* **Ajuste de Core CSS:** Correção na ordem de injeção das Google Fonts para respeitar a especificação do CSS moderno em conjunto com a nova engine do Tailwind v4.

---

## 📦 Como rodar o projeto localmente

```bash
# 1. Clone o repositório
git clone [https://github.com/leonardolyrio/burger-king.git](https://github.com/leonardolyrio/burger-king.git)
cd burger-king

# 2. Instale as dependências
npm install

# 3. Rode o servidor local
npm run dev

```

Abra `http://localhost:5173` no seu navegador.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.