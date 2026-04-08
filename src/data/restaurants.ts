import type { Restaurant } from '../types'

export const restaurants: Restaurant[] = [
  {
    id: 1,
    titulo: 'Bar do João',
    destacado: true,
    tipo: 'Italiano / Japonês',
    avaliacao: 4.9,
    descricao:
      'Descubra sabores irresistíveis no Bar do João, um refúgio gastronômico onde cada prato é uma obra-prima. Do clássico ao inovador, nossa cozinha é um balé de ingredientes frescos e técnicas refinadas. Aqui, a arte e a comida se encontram num ambiente onde o tempo para.',
    capa:
      'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/restaurant-cover-1.png',
    cardapio: [
      {
        id: 1,
        foto: 'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/food-1.png',
        preco: 79.90,
        nome: 'Pappardelle com Ragù de Ossobuco',
        descricao:
          'Pappardelle al dente com ragù de ossobuco, tomate San Marzano, ervas frescas e parmesão. Um prato robusto e sofisticado.',
        porcao: '1 pessoa',
      },
      {
        id: 2,
        foto: 'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/food-2.png',
        preco: 85.90,
        nome: 'Lamen Tonkotsu',
        descricao:
          'Caldo cremoso de ossos de porco, macarrão artesanal, chashu, ovo marinado, nori e cebolinha. A tradição japonesa no seu melhor.',
        porcao: '1 pessoa',
      },
      {
        id: 3,
        foto: 'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/food-3.png',
        preco: 67.90,
        nome: 'Tiramisu',
        descricao:
          'O clássico italiano com camadas de biscoito champagne, creme de mascarpone e cacau em pó. Uma sobremesa que encanta.',
        porcao: '1 pessoa',
      },
    ],
  },
  {
    id: 2,
    titulo: 'Hioki Sushi',
    destacado: false,
    tipo: 'Japonês',
    avaliacao: 4.7,
    descricao:
      'No Hioki Sushi, cada peça é um trabalho de arte. Utilizamos os melhores peixes importados para criar combinações que celebram a tradição japonesa com um toque contemporâneo.',
    capa:
      'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/restaurant-cover-2.png',
    cardapio: [
      {
        id: 1,
        foto: 'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/food-4.png',
        preco: 55.90,
        nome: 'Combo Especial 10 Peças',
        descricao:
          'Seleção especial de 10 peças premium com salmão, atum, camarão e polvo. A perfeita introdução à nossa cozinha.',
        porcao: '2 pessoas',
      },
      {
        id: 2,
        foto: 'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/food-5.png',
        preco: 39.90,
        nome: 'Hot Philadelphia',
        descricao:
          'Roll crocante com cream cheese, salmão, pepino e cebolinha. Um clássico reinventado com perfeição.',
        porcao: '1 pessoa',
      },
    ],
  },
  {
    id: 3,
    titulo: 'Pizza Napolitana',
    destacado: true,
    tipo: 'Italiano',
    avaliacao: 4.8,
    descricao:
      'Autêntica pizza napolitana preparada com farinha italiana especial, tomate San Marzano e mozzarella de búfala. Cada pizza é assada em nosso forno a lenha importado de Nápoles.',
    capa:
      'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/restaurant-cover-3.png',
    cardapio: [
      {
        id: 1,
        foto: 'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/food-6.png',
        preco: 48.90,
        nome: 'Pizza Margherita',
        descricao:
          'A mais tradicional das pizzas napolitanas. Molho de tomate San Marzano, mozzarella de búfala fresca, manjericão e azeite extra virgem.',
        porcao: '2 pessoas',
      },
      {
        id: 2,
        foto: 'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/food-1.png',
        preco: 58.90,
        nome: 'Pizza Quattro Stagioni',
        descricao:
          'Quatro seções distintas: funghi, prosciutto, alcachofra e azeitonas. Um tour culinário pela Itália em cada fatia.',
        porcao: '2 pessoas',
      },
    ],
  },
  {
    id: 4,
    titulo: 'Caro Mio',
    destacado: false,
    tipo: 'Italiano',
    avaliacao: 4.5,
    descricao:
      'Caro Mio é uma experiência gastronômica autêntica da Itália. No coração do nosso restaurante, cada prato é preparado com ingredientes importados e técnicas tradicionais de geração em geração.',
    capa:
      'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/restaurant-cover-4.png',
    cardapio: [
      {
        id: 1,
        foto: 'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/food-2.png',
        preco: 72.90,
        nome: 'Risotto ai Funghi',
        descricao:
          'Arroz arbóreo cremoso com seleção de funghi frescos, parmesão envelhecido, manteiga trufada e ervas finas.',
        porcao: '1 pessoa',
      },
    ],
  },
  {
    id: 5,
    titulo: 'XBurguer',
    destacado: false,
    tipo: 'Lanches',
    avaliacao: 4.3,
    descricao:
      'XBurguer é o paraíso dos amantes de hambúrgueres artesanais. Com ingredientes premium e combinações ousadas, cada burger é uma explosão de sabor que vai muito além do convencional.',
    capa:
      'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/restaurant-cover-5.png',
    cardapio: [
      {
        id: 1,
        foto: 'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/food-3.png',
        preco: 34.90,
        nome: 'XXL Smash Burger',
        descricao:
          'Dois smash patties de 120g, queijo cheddar americano, alface americana, tomate, picles e molho especial da casa em pão brioche.',
        porcao: '1 pessoa',
      },
      {
        id: 2,
        foto: 'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/food-4.png',
        preco: 28.90,
        nome: 'Chicken Crispy',
        descricao:
          'Frango empanado crocante com maionese sriracha, coleslaw, picles apimentados e queijo suíço em pão de aveia.',
        porcao: '1 pessoa',
      },
    ],
  },
  {
    id: 6,
    titulo: 'Terapia Grill',
    destacado: true,
    tipo: 'Carnes / Grelhados',
    avaliacao: 4.6,
    descricao:
      'Terapia Grill é o templo das carnes grelhadas. Utilizamos apenas cortes nobres de gado criado em pastagem, preparados por especialistas que dominam a arte do grelhado perfeito.',
    capa:
      'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/restaurant-cover-6.png',
    cardapio: [
      {
        id: 1,
        foto: 'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/food-5.png',
        preco: 124.90,
        nome: 'Picanha na Brasa',
        descricao:
          'Picanha maturada de 400g grelhada ao ponto com chimichurri caseiro, vinagrete e pão de alho. Acompanha arroz e farofa.',
        porcao: '2 pessoas',
      },
      {
        id: 2,
        foto: 'https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/foods/food-6.png',
        preco: 98.90,
        nome: 'Costela BBQ',
        descricao:
          'Meia costela suína defumada por 6 horas com molho BBQ artesanal, batata assada e maionese de ervas.',
        porcao: '2 pessoas',
      },
    ],
  },
]
