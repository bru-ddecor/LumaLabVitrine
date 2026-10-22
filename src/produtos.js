// Referências são explícitas e permanentes: não dependem da ordem do catálogo.
const kit = (id, nome, referencia, arquivos, palavrasChave) => ({
  id,
  nome,
  referencia,
  tipo: "kit",
  // Cores, estilos, temas e detalhes presentes nas artes dos bottons.
  palavrasChave: `${id.replace(/^kit_/, "").replaceAll("_", " ")} ${palavrasChave}`,
  imagens: arquivos.map((arquivo) => `/imagens/kits/${id}/${arquivo}.png`),
});

const produtos = [
  kit(
    "kit_blackpink",
    "BLACKPINK — Pink Venom",
    "KIT-001",
    ["kit_blckpnk_deco", "blckpnk2", "blckpnk3"],
    "blackpink black pink preto rosa k-pop kpop pop música coreano girl group jennie jisoo lisa rosé rose blink",
  ),
  kit(
    "kit_blue",
    "Maré Lunar",
    "KIT-002",
    ["kitblue", "kitblue2", "kitblue3"],
    "azul blue preto black aesthetic lua lunar noite noturno céu estrelas mar oceano água ondas mãos anime garota monocromático",
  ),
  kit(
    "kit_coquette",
    "Jardim de Afetos",
    "KIT-003",
    ["cqttdeco", "cqtt2", "cqtt3"],
    "rosa pink bege creme marrom pastel coquette aesthetic delicado romântico fofo cute kawaii ursinho urso laço lacinho flores floral xadrez patchwork cervo veado bambi animais vintage cottagecore",
  ),
  kit(
    "kit_dark",
    "Entre Sombras",
    "KIT-004",
    ["darkdeco", "dark2", "dark3"],
    "preto black branco bege dark gótico goth gothic alternativo aesthetic sombrio terror horror caveira crânio esqueleto ossos cruz morcego halloween",
  ),
  kit(
    "kit_deathnote",
    "Death Note — Pacto Sombrio",
    "KIT-005",
    ["deathnotedeco", "deathnote2", "deathnote3"],
    "death note deathnote anime mangá manga otaku geek preto branco vermelho light yagami kira ryuk misa amane l lawliet shinigami maçã suspense",
  ),
  kit(
    "kit_girly",
    "Doce Devaneio",
    "KIT-006",
    ["grly_deco", "grly2", "grly3"],
    "rosa pink preto branco girly feminino aesthetic anime mangá manga kawaii fofo cute garota olhos olho coração patinha gato gatinho neko",
  ),
  kit(
    "kit_artecollection1",
    "Galeria — Poemas Visuais",
    "KIT-007",
    ["arte1_deco", "arte1_2", "arte1_3"],
    "arte art collection coleção pintura clássico retrato mulher renascentista aesthetic vintage azul verde dourado bege laranja ruivo flores margaridas cerejeira sakura monte fuji japão paisagem montanha carpas koi peixe mosaico lago",
  ),
  kit(
    "kit_artecollection2",
    "Galeria — Céu em Flor",
    "KIT-008",
    ["arte2_deco", "arte2_2", "arte2_3"],
    "arte art collection coleção pintura clássico aesthetic mona lisa monalisa leonardo da vinci renascimento van gogh amendoeira flores floral céu nuvens paisagem campo pôr do sol azul verde turquesa lilás lavanda",
  ),
  kit(
    "kit_artecollection3",
    "Galeria — Ecos do Tempo",
    "KIT-009",
    ["arte3_deco", "arte3_2", "arte3_3"],
    "arte art collection coleção pintura clássico aesthetic renascimento criação de adão michelangelo mãos anjo querubim música instrumento alaúde carpas koi peixes lago água céu nuvens verde azul laranja vermelho dourado",
  ),
  kit(
    "kit_brownaesthetic",
    "Café em Paris",
    "KIT-010",
    ["brwndeco", "brwn2", "brwn3"],
    "marrom brown bege caramelo terracota sépia tons terrosos aesthetic vintage outono paris frança torre eiffel arquitetura viagem leopardo onça felino animal print vogue moda fashion xadrez",
  ),
  kit(
    "kit_darkpink",
    "Rosa Elétrico",
    "KIT-011",
    ["drkpnkdeco", "drkpnk2", "drkpnk3"],
    "rosa pink preto black dark pink darkpink aesthetic alternativo neon brilho estrelas olho olhos mãos esqueleto ossos silhueta",
  ),
  kit(
    "kit_lightpurple",
    "Cartas em Lavanda",
    "KIT-012",
    ["lp_deco", "lp2", "lp3"],
    "lilás roxo purple lavanda branco pastel light purple lightpurple aesthetic delicado fofo cute kawaii coração digital impressão digital amor romance livro leitura frase happier coelho coelhinho flor",
  ),
  kit(
    "kit_magicpurple",
    "Feitiço Violeta",
    "KIT-013",
    ["mp_deco", "mp2", "mp3"],
    "lilás roxo purple lavanda violeta pastel magic purple magicpurple aesthetic mágico místico magia fantasia olho olhos velas chama fogo espiral hipnose borboleta asas fada fairycore",
  ),
  {
    id: "cansada_de_ser_adulta",
    referencia: "UNI-001",
    nome: "Cansada de ser adulta",
    tipo: "unitario",
    palavrasChave:
      "unitário individual avulso verde amarelo lilás roxo pato patinho mochila óculos cansada de ser adulta adulto humor divertido frase meme faculdade trabalho rotina",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/cansada_de_ser_adulta/${arquivo}`,
    ),
  },
  {
    id: "zoro_one_piece",
    referencia: "UNI-002",
    nome: "Zoro — One Piece",
    tipo: "unitario",
    palavrasChave:
      "zoro roronoa one piece onepiece anime mangá manga otaku geek espadachim samurai espada katana pirata preto black verde green branco white frase if you die i will kill you",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/zoro_one_piece/${arquivo}`,
    ),
  },
  {
    id: "gojo_jujutsu_kaisen",
    referencia: "UNI-003",
    nome: "Gojo — Jujutsu Kaisen",
    tipo: "unitario",
    palavrasChave:
      "gojo satoru jujutsu kaisen jjk anime mangá manga otaku geek feiticeiro professor azul blue branco white preto black cabelo branco olhos azuis óculos escuros",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/gojo_jujutsu_kaisen/${arquivo}`,
    ),
  },
  {
    id: "itachi_olhar_do_corvo",
    referencia: "UNI-004",
    nome: "Itachi — Olhar do Corvo",
    tipo: "unitario",
    palavrasChave:
      "itachi uchiha naruto shippuden akatsuki sharingan ninja shinobi aldeia folha konoha corvo corvos olho olhos vermelho preto black red anime mangá manga otaku geek",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/itachi_olhar_do_corvo/${arquivo}`,
    ),
  },
  {
    id: "doflamingo_sorriso_do_caos",
    referencia: "UNI-005",
    nome: "Doflamingo — Sorriso do Caos",
    tipo: "unitario",
    palavrasChave:
      "doflamingo donquixote one piece onepiece joker dressrosa vilão pirata anime mangá manga otaku geek rosa pink vermelho red preto black óculos escuros penas sorriso caos",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/doflamingo_sorriso_do_caos/${arquivo}`,
    ),
  },
  {
    id: "luffy_espirito_livre",
    referencia: "UNI-006",
    nome: "Luffy — Espírito Livre",
    tipo: "unitario",
    palavrasChave:
      "luffy monkey d one piece onepiece chapéu palha pirata mugiwara anime mangá manga otaku geek vermelho red amarelo yellow preto black branco white sorriso divertido aventura liberdade",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/luffy_espirito_livre/${arquivo}`,
    ),
  },
  {
    id: "snoopy_eu_posso",
    referencia: "UNI-007",
    nome: "Snoopy — Eu Posso, Eu Consigo",
    tipo: "unitario",
    palavrasChave:
      "snoopy peanuts charlie brown cachorro cachorrinho cão beagle desenho quadrinhos cartoon preto black branco white bege creme minimalista monocromático fofo cute frase eu podo eu posso eu consigo motivação motivacional confiança incentivo positivo humor",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/snoopy_eu_posso/${arquivo}`,
    ),
  },
  {
    id: "erika_pra_presidente",
    destaque: true,
    referencia: "UNI-008",
    nome: "Erika pra Presidente",
    tipo: "unitario",
    palavrasChave:
      "política eleições democracia representação erika erica presidente presidenta o povo quer a erika pra presidente frase meme humor divertido cultura pop branco white preto black bege cabelo loiro dourado retrato fotografia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/erika_pra_presidente/${arquivo}`,
    ),
  },
  {
    id: "itachi_poder_do_susanoo",
    referencia: "UNI-009",
    nome: "Itachi — Poder do Susanoo",
    tipo: "unitario",
    palavrasChave:
      "itachi uchiha naruto shippuden akatsuki sharingan mangekyou susanoo susano poder ninja shinobi anime mangá manga otaku geek preto black vermelho red branco white azul blue esqueleto costelas mão energia nuvens quadrinhos",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/itachi_poder_do_susanoo/${arquivo}`,
    ),
  },
  {
    id: "naruto_legado_dos_mestres",
    referencia: "UNI-010",
    nome: "Naruto — Legado dos Mestres",
    tipo: "unitario",
    palavrasChave:
      "naruto uzumaki jiraiya minato namikaze shippuden mestre aluno família pai filho ninja shinobi hokage sannin konoha aldeia folha anime mangá manga otaku geek laranja orange vermelho red preto black amarelo yellow cabelo loiro branco pergaminho legado",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["/imagens/unitarios/naruto_legado_dos_mestres/01.jpg"],
  },
  {
    id: "ace_chama_livre",
    referencia: "UNI-011",
    nome: "Ace — Chama Livre",
    tipo: "unitario",
    palavrasChave:
      "ace portgas d one piece onepiece punhos fogo chama chamas incêndio mera mera no mi pirata barba branca anime mangá manga otaku geek laranja orange amarelo yellow vermelho red preto black bege chapéu colar contas tatuagem asce caveira quadrinhos",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/ace_chama_livre/${arquivo}`,
    ),
  },
  {
    id: "gatinho_nuvem_de_amor",
    referencia: "UNI-012",
    nome: "Gatinho — Nuvem de Amor",
    tipo: "unitario",
    palavrasChave:
      "gato gatinho gatinha felino filhote pet animal animais cat kitten rosa pink marrom brown bege pastel coração amor nuvem nuvens céu estrelas estrelinhas brilho fofo cute kawaii delicado romântico coquette aesthetic bigodes tigrado",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/gatinho_nuvem_de_amor/${arquivo}`,
    ),
  },
  {
    id: "bruxa_nada_conveniente",
    referencia: "UNI-013",
    nome: "Bruxa — Nada Conveniente",
    tipo: "unitario",
    palavrasChave:
      "bruxa bruxinha bruxaria magia místico witch witchy aesthetic fantasia halloween chapéu mulher silhueta gato preto gatinho cobra serpente lua crescente estrelas folhas folhagem natureza bege creme vinho bordô vermelho laranja verde preto frase eu não vim ao mundo pra ser conveniente atitude personalidade",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/bruxa_nada_conveniente/${arquivo}`,
    ),
  },
  {
    id: "doflamingo_rei_de_dressrosa",
    referencia: "UNI-014",
    nome: "Doflamingo — Rei de Dressrosa",
    tipo: "unitario",
    palavrasChave:
      "doflamingo donquixote one piece onepiece joker dressrosa rei vilão pirata shichibukai anime mangá manga otaku geek rosa pink vermelho red lilás roxo purple amarelo yellow preto black branco white penas casaco óculos escuros cabelo loiro sentado trono mãos sorriso quadrinhos",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/doflamingo_rei_de_dressrosa/${arquivo}`,
    ),
  },
  {
    id: "ryuk_sombra_lunar",
    referencia: "UNI-015",
    nome: "Ryuk — Sombra Lunar",
    tipo: "unitario",
    palavrasChave:
      "ryuk ryuuk death note deathnote shinigami anime mangá manga otaku geek roxo purple violeta preto black lua cheia lunar noite noturno sombra silhueta asas penas fios postes céu dark gótico goth sombrio mistério sobrenatural aesthetic",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/ryuk_sombra_lunar/${arquivo}`,
    ),
  },
  {
    id: "sorriso_nas_sombras",
    referencia: "UNI-016",
    nome: "Sorriso nas Sombras",
    tipo: "unitario",
    palavrasChave:
      "terror horror assustador sombrio sombra sombras dark gótico goth gothic alternativo aesthetic halloween sobrenatural mistério criatura monstro sorriso dentes olhos brilhantes rosto mãos cabeça cabelo longo preto black branco white bege creme monocromático ilustração hachuras",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/sorriso_nas_sombras/${arquivo}`,
    ),
  },
  {
    id: "entre_luz_e_sombra",
    referencia: "UNI-017",
    nome: "Entre Luz e Sombra",
    tipo: "unitario",
    palavrasChave:
      "mão mãos dedos toque encontro conexão luz sombra contraste preto black branco white bege sépia marrom dark aesthetic arte criação de adão michelangelo releitura renascimento clássico mão escura mão clara minimalista dramático",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/entre_luz_e_sombra/${arquivo}`,
    ),
  },
  {
    id: "naruto_caminho_ninja",
    referencia: "UNI-018",
    nome: "Naruto — Caminho Ninja",
    tipo: "unitario",
    palavrasChave:
      "naruto uzumaki shippuden ninja shinobi konoha aldeia folha hokage anime mangá manga otaku geek preto black branco white creme bege vermelho red personagem costas bandana cabelo espetado corda espiral símbolo letras japonesas minimalista contraste",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/naruto_caminho_ninja/${arquivo}`,
    ),
  },
  {
    id: "trio_do_lamen",
    referencia: "UNI-019",
    nome: "Trio do Lámen",
    tipo: "unitario",
    palavrasChave:
      "naruto uzumaki luffy monkey d one piece onepiece goku son dragon ball dragonball anime mangá manga otaku geek shonen crossover trio lámen ramen macarrão comida tigela hashi pauzinhos comendo fome concurso divertido humor preto black laranja orange vermelho red azul blue branco white chapéu palha bandana",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/trio_do_lamen/${arquivo}`,
    ),
  },
  {
    id: "morticia_gomez_amor_sombrio",
    referencia: "UNI-020",
    nome: "Mortícia e Gomez — Amor Sombrio",
    tipo: "unitario",
    palavrasChave:
      "mortícia morticia mortisha gomez addams família familia addams casal amor romance romântico coração corações beijo mão apaixonados desenho cartoon preto black branco white cinza grey monocromático dark gótico goth gothic alternativo aesthetic vestido listras terno",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagemCesta: "/imagens/unitarios/morticia_gomez_amor_sombrio/02.jpg",
    imagens: ["01.jpg", "02.jpg"].map(
      (arquivo) => `/imagens/unitarios/morticia_gomez_amor_sombrio/${arquivo}`,
    ),
  },
  {
    id: "naruto_setimo_hokage",
    referencia: "UNI-021",
    nome: "Naruto — Sétimo Hokage",
    tipo: "unitario",
    palavrasChave:
      "naruto uzumaki sétimo hokage nanadaime boruto shippuden ninja shinobi konoha aldeia folha anime mangá manga otaku geek preto black branco white bege creme monocromático minimalista silhueta costas manto capa chamas fogo kanji letras japonesas cabelo espetado",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/naruto_setimo_hokage/${arquivo}`,
    ),
  },
  {
    id: "poe_beleza_rara",
    referencia: "UNI-022",
    nome: "Poe — Beleza Rara",
    tipo: "unitario",
    palavrasChave:
      "edgar allan poe literatura literário escritor autor livro leitura poesia poema frase citação não há beleza rara sem algo de estranho nas proporções preto black branco white cinza bege creme sépia dark academia gótico goth aesthetic clássico tipografia letras",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/poe_beleza_rara/${arquivo}`,
    ),
  },
  {
    id: "kakashi_ninja_copiador",
    referencia: "UNI-023",
    nome: "Kakashi — Ninja Copiador",
    tipo: "unitario",
    palavrasChave:
      "kakashi hatake naruto shippuden ninja copiador shinobi sensei professor sharingan chidori raikiri konoha aldeia folha hokage anime mangá manga otaku geek azul blue branco white preto black verde oliva vermelho máscara bandana cabelo branco prateado colete mãos selo raio relâmpago",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/kakashi_ninja_copiador/${arquivo}`,
    ),
  },
  {
    id: "gumball_darwin",
    referencia: "PAR-001",
    nome: "Gumball e Darwin — Dupla Inseparável",
    tipo: "parzinho",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 1100, 44: 1500, 55: 1800 },
    descricao:
      "Dois bottons que combinam, para usar juntos ou dividir com alguém especial.",
    palavrasChave:
      "par parzinho dupla dois 2 unidades gumball darwin incrível mundo desenho cartoon network amizade amigos irmãos azul blue laranja orange preto branco olhos sorriso fofo cute kawaii presente combinar",
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/parzinhos/gumball_darwin/${arquivo}`,
    ),
  },
  {
    id: "marceline_jujuba_doce_sintonia",
    referencia: "PAR-002",
    nome: "Marceline e Jujuba — Doce Sintonia",
    tipo: "parzinho",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 1100, 44: 1500, 55: 1800 },
    descricao:
      "Uma dupla de Hora de Aventura para usar juntinha ou dividir com alguém especial.",
    palavrasChave:
      "par parzinho dupla dois 2 unidades marceline marshall princesa jujuba bubblegum bubbline hora de aventura adventure time cartoon network desenho casal amor amizade vampira presas dentes coroa princesa rosa pink preto black branco white amarelo dourado azul fofo cute kawaii minimalista presente",
    imagens: ["01.jpg", "02.jpg"].map(
      (arquivo) =>
        `/imagens/parzinhos/marceline_jujuba_doce_sintonia/${arquivo}`,
    ),
  },
  {
    id: "mutano_ravena_sintonia_tita",
    referencia: "PAR-003",
    nome: "Mutano e Ravena — Sintonia Titã",
    tipo: "parzinho",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 1100, 44: 1500, 55: 1800 },
    descricao:
      "Uma dupla dos Jovens Titãs para usar junto ou dividir com alguém especial.",
    palavrasChave:
      "par parzinho dupla dois 2 unidades mutano ravena beast boy beastboy raven jovens titãs teen titans titans go dc cartoon network desenho herói super heróis casal amizade verde green roxo purple violeta azul blue preto black branco white olhos rosto capuz fofo cute presente",
    imagens: ["/imagens/parzinhos/mutano_ravena_sintonia_tita/01.jpg"],
  },
  {
    id: "amigos_de_ooo",
    referencia: "PAR-004",
    nome: "Hora de Aventura — Amigos de Ooo",
    tipo: "parzinho",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 1100, 44: 1500, 55: 1800 },
    descricao:
      "Jake e a turma de Ooo em dois bottons para usar juntos ou dividir uma aventura.",
    palavrasChave:
      "par parzinho dupla dois 2 unidades hora de aventura adventure time cartoon network finn jake cachorro cão princesa jujuba marceline princesa caroço rei gelado bmo ooo amigos amizade desenho amarelo yellow laranja azul blue rosa pink verde roxo colorido fofo cute kawaii espada fantasia presente",
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/parzinhos/amigos_de_ooo/${arquivo}`,
    ),
  },
  {
    id: "hello_kitty_treino_fofo",
    referencia: "PAR-005",
    nome: "Hello Kitty — Treino Fofo",
    tipo: "parzinho",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 1100, 44: 1500, 55: 1800 },
    descricao:
      "Uma dupla cheia de energia e fofura para acompanhar seus treinos ou dividir com sua parceria de academia.",
    palavrasChave:
      "hello kitty hellokitty sanrio par parzinho dupla dois 2 unidades academia treino musculação fitness gym esporte exercício bicicleta ergométrica spinning cardio barra peso halteres laço rosa pink branco white pastel coração flores estrelas fofo cute kawaii girly aesthetic amizade presente",
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/parzinhos/hello_kitty_treino_fofo/${arquivo}`,
    ),
  },
  {
    id: "meninas_superpoderosas",
    referencia: "TRI-001",
    nome: "Meninas Superpoderosas — Trio de Poder",
    tipo: "trio",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 1500, 44: 2000, 55: 2400 },
    imagemCesta: "/imagens/trios/meninas_superpoderosas/02.jpg",
    descricao:
      "Florzinha, Lindinha e Docinho: três bottons para levar esse trio de poder com você ou dividir com suas melhores companhias.",
    palavrasChave:
      "trio trios três 3 unidades meninas superpoderosas powerpuff girls florzinha lindinha docinho blossom bubbles buttercup cartoon network desenho heroínas super heroínas amizade amigas irmãs azul blue rosa pink verde green amarelo laço fofo cute kawaii presente",
    imagens: ["01.jpg", "02.jpg"].map(
      (arquivo) => `/imagens/trios/meninas_superpoderosas/${arquivo}`,
    ),
  },
  {
    id: "gatinha_comunista",
    referencia: "UNI-024",
    nome: "Gatinha Comunista — Vitroles",
    tipo: "unitario",
    destaque: true,
    palavrasChave:
      "gatinha comunista vitroles música musical banda canção letra trecho spotify playlist indie rock pop brasileiro mpb política comunismo esquerda socialismo vermelho red preto black frase minha gatinha comunista eu preciso te dizer que eu acho que o vermelho fica tão bem em você romance humor",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/gatinha_comunista/${arquivo}`,
    ),
  },
  {
    id: "ultimo_ato_de_amor",
    referencia: "UNI-025",
    nome: "Último Ato de Amor",
    tipo: "unitario",
    palavrasChave:
      "monster energy ultra energético bebida lata taurina branco white preto black cinza prata azul frase texto meme amor último ato de amor eu nunca mais vou te procurar mas me tornarei tudo aquilo que prometi término superação recomeço promessa romântico melancólico aesthetic fotografia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/ultimo_ato_de_amor/${arquivo}`,
    ),
  },
  {
    id: "nao_aguento_segunda_feira",
    referencia: "UNI-026",
    nome: "Não Aguento Segunda-feira",
    tipo: "unitario",
    palavrasChave:
      "meme memes humor engraçado divertido ironia reação televisão tv ao vivo joão kleber não aguenta a chegada da segunda feira e desmaia trabalho rotina cansaço cansado cansada preguiça fim de semana azul blue preto black marrom frase internet brasileiro",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/nao_aguento_segunda_feira/${arquivo}`,
    ),
  },
  {
    id: "damon_elena_ultimo_folego",
    referencia: "UNI-027",
    nome: "Damon e Elena — Último Fôlego",
    tipo: "unitario",
    palavrasChave:
      "damon salvatore elena gilbert delena the vampire diaries diários de um vampiro tvd série vampiros romance casal amor paixão frase último fôlego se eu tivesse que escolher entre respirar e te amar usaria meu último fôlego para dizer que te amo preto black marrom dourado fotografia sobrenatural romântico",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagemCesta: "/imagens/unitarios/damon_elena_ultimo_folego/02.jpg",
    imagens: ["01.jpg", "02.jpg"].map(
      (arquivo) => `/imagens/unitarios/damon_elena_ultimo_folego/${arquivo}`,
    ),
  },
  {
    id: "lembranca_aniversario",
    referencia: "PER-002",
    nome: "Lembrança de Aniversário",
    precoCentavos: 800,
    tipo: "personalizado",
    precoAtacadoCentavos: 690,
    precoAtacadoNormalCentavos: 720,
    quantidadeMinimaAtacado: 100,
    descricao:
      "Transforme um dia especial em uma lembrança para guardar! Personalize seu botton com o tema da festa, nome, idade e uma foto de sua escolha. Um carinho para presentear os convidados e celebrar esse momento com você.",
    mensagemPersonalizacao:
      "Olá! Gostaria de bottons personalizados para lembrancinha de aniversário. Podemos combinar tema, nome, idade, foto, tamanho, quantidade e orçamento?",
    palavrasChave:
      "personalizado lembrancinha lembrança aniversário festa convidados comemoração infantil bebê criança foto nome idade data safari girafa folhas verde azul amarelo bege presente celebração um ano",
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/personalizados/lembranca_aniversario/${arquivo}`,
    ),
  },
  {
    id: "kakashi_raio_entre_paginas",
    referencia: "UNI-028",
    nome: "Kakashi — Raio entre Páginas",
    tipo: "unitario",
    palavrasChave:
      "kakashi hatake naruto shippuden ninja copiador sensei professor shinobi konoha sharingan chidori raikiri raio raios relâmpago energia livros leitura páginas cachorro cães ninken anime mangá manga otaku geek azul blue branco white cinza prateado verde oliva preto máscara bandana colete",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagemCesta: "/imagens/unitarios/kakashi_raio_entre_paginas/02.jpg",
    imagens: ["01.jpg", "02.jpg"].map(
      (arquivo) => `/imagens/unitarios/kakashi_raio_entre_paginas/${arquivo}`,
    ),
  },
  {
    id: "gojo_sorriso_infinito",
    referencia: "UNI-029",
    nome: "Gojo — Sorriso Infinito",
    tipo: "unitario",
    palavrasChave:
      "gojo satoru jujutsu kaisen jjk feiticeiro sensei professor infinito anime mangá manga otaku geek azul blue branco white lilás roxo vermelho amarelo preto cabelo branco prateado óculos redondos escuros lentes azuis sorriso língua divertido colorido",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/gojo_sorriso_infinito/${arquivo}`,
    ),
  },
  {
    id: "gatinho_lingua_de_fora",
    referencia: "UNI-030",
    nome: "Gatinho — Língua de Fora",
    tipo: "unitario",
    palavrasChave:
      "gato gatinho gatinha gato preto felino pet animal animais cat kitten black cat preto black branco white rosa pink língua linguinha de fora blep olhos grandes bigodes fofo cute kawaii meme humor engraçado divertido fotografia retrato",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/gatinho_lingua_de_fora/${arquivo}`,
    ),
  },
  {
    id: "gatinho_olhar_de_veludo",
    referencia: "UNI-031",
    nome: "Gatinho — Olhar de Veludo",
    tipo: "unitario",
    palavrasChave:
      "gato gatinho gatinha gato preto felino filhote pet animal animais cat kitten black cat preto black vinho bordô marsala vermelho red veludo tecido olhos dourados amarelos âmbar bigodes fofo cute dark gótico goth aesthetic fotografia retrato aconchego",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/gatinho_olhar_de_veludo/${arquivo}`,
    ),
  },
  {
    id: "luffy_espirito_travesso",
    referencia: "UNI-032",
    nome: "Luffy — Espírito Travesso",
    tipo: "unitario",
    palavrasChave:
      "luffy monkey d one piece onepiece mugiwara pirata chapéu palha anime mangá manga otaku geek preto black vermelho red amarelo dourado laranja branco white azul sorriso língua careta travesso divertido humor caveira letras japonesas",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/luffy_espirito_travesso/${arquivo}`,
    ),
  },
  {
    id: "personalizado_musical",
    referencia: "PER-001",
    nome: "Seu artista, sua música",
    tipo: "personalizado",
    precoAtacadoCentavos: 690,
    precoAtacadoNormalCentavos: 720,
    quantidadeMinimaAtacado: 100,
    precoCentavos: 800,
    descricao:
      "Escolha seu artista favorito para o botton e uma música especial para personalizar a embalagem. Um presente com significado para alguém que ama música — ou para você!",
    palavrasChave:
      "personalizado personalizados personalização música musical artista cantor cantora banda favorito embalagem presente presentear spotify código amarelo laranja verde azul ilustração",
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/personalizados/anavitoriasong/${arquivo}`,
    ),
  },
];

function normalizarBusca(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function buscarProdutos(busca) {
  const termos = normalizarBusca(busca).split(/\s+/).filter(Boolean);
  return produtos.filter((produto) => {
    const texto = normalizarBusca(
      `${produto.nome} ${produto.palavrasChave} botton bottons ${produto.tipo === "kit" ? "kit 4 unidades 44mm 44 mm" : ["unitario", "parzinho", "trio"].includes(produto.tipo) ? "individual unitario avulso 32mm 32 mm 44mm 44 mm 55mm 55 mm" : "personalizado"}`,
    );
    return termos.every((termo) => texto.includes(termo));
  });
}

const tamanhosDisponiveis = [
  { valor: 32, rotulo: "32 mm", medida: "32 mm • 3,2 cm" },
  { valor: 44, rotulo: "44 mm", medida: "44 mm • 4,4 cm" },
  { valor: 55, rotulo: "55 mm", medida: "55 mm • 5,5 cm" },
];
function precoProduto(produto) {
  if (produto.tipo === "kit") return 2350;
  if (["unitario", "parzinho", "trio"].includes(produto.tipo))
    return produto.precosPorTamanho[produto.tamanhoSelecionado] ?? null;
  return produto.precoCentavos ?? null;
}
function chaveProduto(produto) {
  return ["unitario", "parzinho", "trio"].includes(produto.tipo)
    ? `${produto.id}::${produto.tamanhoSelecionado}`
    : produto.id;
}
function medidaProduto(produto) {
  return (
    tamanhosDisponiveis.find(
      (tamanho) =>
        tamanho.valor ===
        (produto.tipo === "kit" ? 44 : produto.tamanhoSelecionado),
    )?.medida || ""
  );
}
function resolverItemCesta(chave) {
  const [id, tamanho, ...extras] = chave.split("::");
  if (extras.length) return null;
  const produto = produtos.find((produto) => produto.id === id);
  if (!produto || produto.tipo === "personalizado") return null;
  if (produto.tipo === "kit") return tamanho === undefined ? produto : null;
  if (
    !produto.tamanhos.includes(Number(tamanho)) ||
    String(Number(tamanho)) !== tamanho
  )
    return null;
  const selecionado = { ...produto, tamanhoSelecionado: Number(tamanho) };
  return precoProduto(selecionado) !== null ? selecionado : null;
}
// Uso interno: a medida diferencia as variantes sem alterar o código da arte.
function referenciaProduto(produto) {
  return ["unitario", "parzinho", "trio"].includes(produto.tipo) &&
    produto.tamanhoSelecionado
    ? `${produto.referencia}-${produto.tamanhoSelecionado}`
    : produto.referencia;
}
export {
  produtos,
  referenciaProduto,
  buscarProdutos,
  tamanhosDisponiveis,
  precoProduto,
  chaveProduto,
  medidaProduto,
  resolverItemCesta,
};
