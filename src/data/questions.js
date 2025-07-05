const questions = [
  {
    question:
      "1. Qual obra de Machado de Assis é considerada uma das mais importantes da literatura brasileira por sua crítica social e uso inovador da ironia?",
    options: [
      "a) Dom Casmurro",
      "b) Memórias Póstumas de Brás Cubas",
      "c) O Primo Basílio",
      "d) Senhora",
    ],
    correctIndex: 1,
    explanation:
      "Memórias Póstumas de Brás Cubas de Machado de Assis é uma obra fundamental pela sua inovação narrativa e crítica à sociedade brasileira do século XIX. A ironia e o pessimismo são marcas que desconstroem o heroísmo clássico, criando um narrador que se propõe a contar suas memórias 'depois de morto'.",
  },
  {
    question:
      "2. O que caracteriza a estética do Modernismo brasileiro, especialmente na fase de 1922, no que diz respeito à linguagem e forma?",
    options: [
      "a) Valorização do subjetivismo e do lirismo romântico.",
      "b) Uso de linguagem rebuscada e culto à tradição literária clássica.",
      "c) Rejeição às formas tradicionais, experimentação com a linguagem e incorporação de elementos da cultura popular.",
      "d) Busca pela perfeição formal e respeito aos cânones europeus.",
    ],
    correctIndex: 2,
    explanation:
      "O Modernismo brasileiro na Semana de Arte Moderna de 1922 enfatizou a ruptura com as formas tradicionais, buscando uma linguagem mais livre, próxima da oralidade e incorporando elementos da cultura popular. Esse movimento valorizou a experimentação e a identidade nacional, desafiando o culto à tradição europeia.",
  },
  {
    question:
      "3. A obra Grande Sertão: Veredas, de João Guimarães Rosa, é um exemplo de qual característica estética da literatura brasileira?",
    options: [
      "a) Realismo mágico e regionalismo.",
      "b) Simbolismo e subjetividade.",
      "c) Modernismo e experimentação linguística.",
      "d) Realismo e crítica social.",
    ],
    correctIndex: 0,
    explanation:
      "Em Grande Sertão: Veredas, João Guimarães Rosa explora a linguagem de forma inovadora, criando uma narrativa complexa e regionalista. A obra representa o modernismo ao experimentar com a linguagem e mergulhar no universo sertanejo, tornando o romance um marco estético da literatura brasileira.",
  },
  {
    question:
      "4. O poema Os Lusíadas de Camões, mistura elementos de épica e lírica. No entanto, na literatura brasileira, qual autor também se destacou por uma poesia que mistura as dimensões épicas e líricas?",
    options: [
      "a) Manuel Bandeira.",
      "b) Carlos Drummond de Andrade.",
      "c) Vinícius de Moraes.",
      "d) Gonçalves Dias.",
    ],
    correctIndex: 3,
    explanation:
      "Gonçalves Dias é conhecido por misturar dimensões épicas e líricas, especialmente em sua obra 'I-Juca Pirama', um poema épico que explora o nacionalismo e a identidade brasileira, mesclando a tradição indígena com a lírica patriótica.",
  },
  {
    question:
      "5. A literatura de Clarice Lispector se distingue pela exploração da psicologia humana e da subjetividade. Qual obra da autora é particularmente famosa pela profundidade emocional e pela linguagem introspectiva?",
    options: [
      "a) A Hora da Estrela.",
      "b) Perto do Coração Selvagem.",
      "c) A Paixão segundo G.H.",
      "d) Felicidade Clandestina.",
    ],
    correctIndex: 1,
    explanation:
      "Perto do Coração Selvagem de Clarice Lispector é uma narrativa introspectiva que explora a complexidade emocional e o fluxo de consciência, características que tornam a obra um marco na análise da subjetividade humana na literatura brasileira.",
  },
  {
    question:
      "6. O que representa o movimento estético do 'romantismo' na literatura brasileira?",
    options: [
      "a) A busca pela liberdade criativa, pela imaginação e pelo nacionalismo.",
      "b) A preocupação com a estética da arte e a tentativa de imitar os grandes clássicos europeus.",
      "c) A crítica social através da descrição realista e detalhada da vida urbana.",
      "d) A abordagem racional da realidade através de uma linguagem científica e objetiva.",
    ],
    correctIndex: 0,
    explanation:
      "O Romantismo brasileiro foi marcado pelo desejo de originalidade e pela expressão do nacionalismo. A liberdade criativa e a exaltação da natureza e do folclore nacional ajudaram a consolidar uma identidade literária distinta dos modelos europeus.",
  },
  {
    question:
      "7. Na obra O Cortiço, de Aluísio de Azevedo, a ambientação social e urbana é uma forma de expressar a crítica social. O que caracteriza a estética naturalista dessa obra?",
    options: [
      "a) A idealização dos personagens e das paisagens naturais.",
      "b) A descrição científica dos personagens e a ênfase nas influências ambientais sobre o comportamento humano.",
      "c) O uso da subjetividade e da introspecção como formas de representar a alma humana.",
      "d) A busca por formas mais líricas e menos objetivas de representar a realidade.",
    ],
    correctIndex: 1,
    explanation:
      "O Cortiço de Aluísio Azevedo é um exemplo de naturalismo, onde os personagens são influenciados pelo meio social e pela hereditariedade. A descrição detalhada da realidade urbana expõe a vida nas camadas populares e as consequências das condições sociais na formação do caráter humano.",
  },
  {
    question:
      "8. O que torna a obra A Moreninha, de Joaquim Manuel de Macedo, um exemplo clássico do Romantismo brasileiro?",
    options: [
      "a) O enfoque em temas filósoficas profundos e a exploração do existencialismo.",
      "b) A representação idealizada do amor e da natureza, com forte ênfase no folclore e na cultura nacional.",
      "c) A crítica à sociedade carioca através de uma linguagem direta e realista.",
      "d) A análise psicológica detalhada dos personagens em situações cotidianas.",
    ],
    correctIndex: 1,
    explanation:
      "A Moreninha, de Joaquim Manuel de Macedo, exemplifica o Romantismo com a idealização do amor juvenil e da natureza, além de promover temas como a pureza, o amor idealizado e a exaltação do nacionalismo, típicos do movimento romântico.",
  },
  {
    question:
      "9. O autor Mário de Andrade, no contexto do Modernismo, buscou uma renovação estética da literatura brasileira. Qual obra sua representa esse movimento de ruptura com as tradições europeias?",
    options: [
      "a) Macunaíma.",
      "b) O Primo Basílio.",
      "c) Senhora.",
      "d) O Ateneu.",
    ],
    correctIndex: 0,
    explanation:
      "Macunaíma, de Mário de Andrade, é um manifesto modernista que busca romper com a tradição europeia, explorando a cultura popular e as raízes indígenas e africanas do Brasil. A obra é um ícone da identidade nacional e da renovação estética.",
  },
  {
    question:
      "10. O que define a 'literatura de cordel', uma expressão da literatura popular brasileira, do ponto de vista estético?",
    options: [
      "a) A busca por uma linguagem rebuscada e elevada.",
      "b) A simplicidade da linguagem e a utilização de rimas e versos rimados, com forte ligação com a oralidade e a cultura popular.",
      "c) A análise detalhada da realidade social através de uma narrativa direta e objetiva.",
      "d) A exploração do psicológico dos personagens, buscando uma profundidade emocional complexa.",
    ],
    correctIndex: 1,
    explanation:
      "A literatura de cordel é caracterizada pela linguagem simples e pelas rimas, sendo uma forma de literatura popular ligada à oralidade. Suas narrativas abordam temas do cotidiano, mitos e lendas, fortalecendo a cultura e a tradição popular brasileira.",
  },
];

export default questions;
