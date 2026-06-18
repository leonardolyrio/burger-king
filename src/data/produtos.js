import imgWhopper from "../assets/products/whopper.webp";
import imgStackerDuplo from "../assets/products/stacker_duplo.webp";
import imgCheddarBacon from "../assets/products/cheddar_bacon.webp";
import imgRodeio from "../assets/products/rodeio.webp";
import imgMegaStacker from "../assets/products/mega_stacker_3.0.webp";

import imgChickenCrisp from "../assets/products/chicken_crisp.webp";
import imgBkChickenDuplo from "../assets/products/bk_chicken_duplo.webp";
import imgChickenJunior from "../assets/products/chicken_junior.webp";

import imgBatatasFritas from "../assets/products/batatas_fritas_medias.webp";
import imgOnionRings from "../assets/products/onion_rings.webp";
import imgChickenNuggets from "../assets/products/chicken_nuggets.webp";

import imgMilkshake from "../assets/products/milkshake_chocolate.webp";
import imgSundae from "../assets/products/sundae_de_caramelo.webp";
import imgCasquinha from "../assets/products/casquinha_mista.webp";

import imgCocaCola from "../assets/products/coca_cola_500ml.webp";
import imgSucoLaranja from "../assets/products/suco_de_laranja.webp";
import imgAgua from "../assets/products/garrafa_de_agua_500ml.webp";

export const produtos = [
  {
    id: 1,
    nome: "Whopper",
    categoria: "Sanduíches de Carnes",
    tag: "FLAME-GRILLED",
    corTag: "bg-[#1A4A2A]",
    descricao:
      "O clássico que você respeita. Carne grelhada no fogo como churrasco.",
    preco: 34.9,
    imagem: imgWhopper,
  },
  {
    id: 2,
    nome: "BK Stacker Duplo",
    categoria: "Sanduíches de Carnes",
    tag: "FAVORITO",
    corTag: "bg-title",
    descricao: "Duas carnes, muito bacon e o exclusivo molho Stacker.",
    preco: 39.9,
    imagem: imgStackerDuplo,
  },
  {
    id: 3,
    nome: "Cheddar & Bacon",
    categoria: "Sanduíches de Carnes",
    tag: "CLASSIC",
    corTag: "bg-[#7E4736]",
    descricao: "A combinação perfeita de cheddar cremoso e bacon crocante.",
    preco: 29.9,
    imagem: imgCheddarBacon,
  },
  {
    id: 4,
    nome: "Rodeio Burger",
    categoria: "Sanduíches de Carnes",
    tag: "NOVIDADE",
    corTag: "bg-title",
    descricao:
      "Hambúrguer com queijo derretido, onion rings crocantes e molho barbecue.",
    preco: 27.9,
    imagem: imgRodeio,
  },
  {
    id: 5,
    nome: "Mega Stacker 3.0",
    categoria: "Sanduíches de Carnes",
    tag: "MONSTRO",
    corTag: "bg-[#7E4736]",
    descricao:
      "Para os fortes: 3 carnes grelhadas, muito queijo cheddar e bacon.",
    preco: 48.9,
    imagem: imgMegaStacker,
  },
  {
    id: 6,
    nome: "Chicken Crisp",
    categoria: "Frango",
    tag: "RECOMENDADO",
    corTag: "bg-title",
    descricao: "Frango crocante, alface, maionese num pão quentinho.",
    preco: 25.9,
    imagem: imgChickenCrisp,
  },
  {
    id: 7,
    nome: "BK Chicken Duplo",
    categoria: "Frango",
    tag: "PREFERIDO",
    corTag: "bg-[#1A4A2A]",
    descricao:
      "Dois filés de frango empanados super crocantes com maionese e alface.",
    preco: 31.9,
    imagem: imgBkChickenDuplo,
  },
  {
    id: 8,
    nome: "Chicken Junior",
    categoria: "Frango",
    tag: "ECONÔMICO",
    corTag: "bg-[#7E4736]",
    descricao:
      "O clássico sanduíche de frango empanado, ideal para matar fomes rápidas.",
    preco: 19.9,
    imagem: imgChickenJunior,
  },
  {
    id: 9,
    nome: "Batata Frita Média",
    categoria: "Acompanhamentos",
    tag: "CROCANTE",
    corTag: "bg-[#1A4A2A]",
    descricao:
      "Batatas fritas tradicionais, douradas, crocantes e salgadas na medida.",
    preco: 14.9,
    imagem: imgBatatasFritas,
  },
  {
    id: 10,
    nome: "Onion Rings",
    categoria: "Acompanhamentos",
    tag: "SUCESSO",
    corTag: "bg-title",
    descricao: "Anéis de cebola empanados super crocantes e temperados.",
    preco: 16.9,
    imagem: imgOnionRings,
  },
  {
    id: 11,
    nome: "Chicken Nuggets (6 un)",
    categoria: "Acompanhamentos",
    tag: "COMPARTILHE",
    corTag: "bg-[#7E4736]",
    descricao:
      "Pedaços de frango empanados super crocantes por fora e macios por dentro.",
    preco: 15.9,
    imagem: imgChickenNuggets,
  },
  {
    id: 12,
    nome: "Milkshake Chocolate",
    categoria: "Sobremesas",
    tag: "CREMOSO",
    corTag: "bg-[#7E4736]",
    descricao: "Delicioso milkshake cremoso sabor chocolate com calda extra.",
    preco: 18.9,
    imagem: imgMilkshake,
  },
  {
    id: 13,
    nome: "Sundae de Caramelo",
    categoria: "Sobremesas",
    tag: "DOCE",
    corTag: "bg-title",
    descricao: "Sorvete de baunilha com cobertura quente e densa de caramelo.",
    preco: 12.9,
    imagem: imgSundae,
  },
  {
    id: 14,
    nome: "Casquinha Mista",
    categoria: "Sobremesas",
    tag: "CLÁSSICO",
    corTag: "bg-[#1A4A2A]",
    descricao:
      "A tradicional casquinha crocante com sorvete de baunilha e chocolate.",
    preco: 5.5,
    imagem: imgCasquinha,
  },
  {
    id: 15,
    nome: "Coca-Cola 500ml",
    categoria: "Bebidas",
    tag: "GELADA",
    corTag: "bg-[#1A4A2A]",
    descricao: "Refrigerante Coca-Cola original servido trincando de gelado.",
    preco: 9.9,
    imagem: imgCocaCola,
  },
  {
    id: 16,
    nome: "Suco de Laranja",
    categoria: "Bebidas",
    tag: "NATURAL",
    corTag: "bg-title",
    descricao: "Suco natural de laranja espremido na hora, sem conservantes.",
    preco: 11.9,
    imagem: imgSucoLaranja,
  },
  {
    id: 17,
    nome: "Água Mineral",
    categoria: "Bebidas",
    tag: "REFRESCANTE",
    corTag: "bg-[#7E4736]",
    descricao: "Garrafa de água mineral sem gás de 500ml.",
    preco: 6.0,
    imagem: imgAgua,
  },
];

export const categorias = [
  "Todos",
  "Sanduíches de Carnes",
  "Frango",
  "Acompanhamentos",
  "Sobremesas",
  "Bebidas",
];
