import { categoriasIndividuais } from "./categorias-individuais";

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
  {
    id: "kit_ambar_amor_proprio",
    referencia: "KIT-017",
    nome: "Âmbar — Amor-próprio",
    tipo: "kit",
    categoria: "ubuntu",
    palavrasChave:
      "ubuntu raízes negras cultura negra cultura africana afro afropaty afropatys representatividade identidade âmbar amor próprio autoestima motivacional afirmações i love myself love my body i am enough loved strong happy brave wanted borboleta monarca mulher abraço kintsugi dourado rachaduras mão unhas anéis bola oito sinuca bilhar marrom laranja terracota bege preto tons terrosos aesthetic kit quatro 4 bottons",
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/kits/kit_ambar_amor_proprio/${arquivo}`,
    ),
  },
  {
    id: "kit_a_garota_mais_sortuda",
    referencia: "KIT-016",
    nome: "“A garota mais sortuda”",
    tipo: "kit",
    palavrasChave:
      "the luckiest girl a garota mais sortuda sensitive content conteúdo sensível gato gatinho preto olhos verdes batom maquiagem lábios partitura notas música musical vinho bordô vermelho bege creme preto feminino aesthetic vintage kit quatro 4 bottons",
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/kits/kit_a_garota_mais_sortuda/${arquivo}`,
    ),
  },
  {
    id: "kit_rock_rubro",
    referencia: "KIT-014",
    nome: "Rock Rubro",
    tipo: "kit",
    palavrasChave:
      "rock rubro música musical baixo contrabaixo guitarra estrela vermelha boca lábios beijo garota flores vermelho vinho bordô preto bege creme alternativo vintage retrô kit quatro 4 bottons",
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/kits/kit_rock_rubro/${arquivo}`,
    ),
  },
  kit(
    "kit_blackpink",
    "BLACKPINK — Pink Venom",
    "KIT-001",
    ["kit_blckpnk_deco", "blckpnk2", "blckpnk3"],
    "blackpink black pink preto rosa k-pop kpop pop música coreano girl group jennie jisoo lisa rosé rose blink",
  ),
  {
    id: "kit_one_piece_chapeu_de_palha",
    referencia: "KIT-015",
    nome: "One Piece — Legado do Chapéu de Palha",
    tipo: "kit",
    palavrasChave:
      "one piece luffy monkey d luffy shanks chapéu de palha mugiwara pirata piratas anime mangá manga otaku caveira bandeira jolly roger vermelho preto amarelo branco kit quatro 4 bottons",
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/kits/kit_one_piece_chapeu_de_palha/${arquivo}`,
    ),
  },
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
    categoria: "humor",
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
    categoria: "anime",
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
    categoria: "anime",
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
    categoria: "anime",
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
    categoria: "anime",
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
    categoria: "anime",
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
    categoria: "desenhos",
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
    categoria: "politica",
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
    categoria: "anime",
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
    categoria: "anime",
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
    categoria: "anime",
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
    categoria: "pets",
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
    categoria: "dark",
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
    categoria: "anime",
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
    categoria: "anime",
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
    categoria: "dark",
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
    categoria: "dark",
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
    categoria: "anime",
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
    categoria: "anime",
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
    categoria: "filmes-e-series",
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
    categoria: "anime",
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
    categoria: "frases",
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
    categoria: "anime",
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
    categoria: "desenhos",
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
    categoria: "desenhos",
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
    categoria: "desenhos",
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
    categoria: "desenhos",
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
    categoria: "desenhos",
    categoriasAdicionais: ["academia"],
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
    categoria: "desenhos",
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
    categoria: "politica",
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
    categoria: "frases",
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
    categoria: "humor",
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
    categoria: "filmes-e-series",
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
    precoAtacadoCentavos: 400,
    precosAtacadoPorTamanho: { 32: 293, 44: 400, 55: 480 },
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
    categoria: "anime",
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
    categoria: "anime",
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
    categoria: "pets",
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
    categoria: "pets",
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
    categoria: "anime",
    palavrasChave:
      "luffy monkey d one piece onepiece mugiwara pirata chapéu palha anime mangá manga otaku geek preto black vermelho red amarelo dourado laranja branco white azul sorriso língua careta travesso divertido humor caveira letras japonesas",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/luffy_espirito_travesso/${arquivo}`,
    ),
  },
  {
    id: "lendas_em_batalha",
    referencia: "UNI-033",
    nome: "Lendas em Batalha",
    tipo: "unitario",
    categoria: "games",
    palavrasChave:
      "kratos god of war doom slayer doomguy geralt de rivia the witcher guts berserk jogos videogame games gamer crossover anime mangá manga geek guerreiro batalha fantasia ação dark preto black branco white cinza vermelho red retrato símbolos",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/lendas_em_batalha/${arquivo}`,
    ),
  },
  {
    id: "cavaleiro_juramento_rubro",
    referencia: "UNI-034",
    nome: "Cavaleiro — Juramento Rubro",
    tipo: "unitario",
    categoria: "dark",
    palavrasChave:
      "cavaleiro guerreiro knight armadura elmo capacete espada lâmina medieval fantasia dark fantasy rpg batalha juramento gótico goth sombrio preto black vermelho red branco white cinza prata metal ilustração",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagemCesta: "/imagens/unitarios/cavaleiro_juramento_rubro/02.jpg",
    imagens: ["01.jpg", "02.jpg"].map(
      (arquivo) => `/imagens/unitarios/cavaleiro_juramento_rubro/${arquivo}`,
    ),
  },
  {
    id: "amar_nesta_economia",
    referencia: "UNI-035",
    nome: "Amar? Nesta Economia?",
    tipo: "unitario",
    categoria: "humor",
    palavrasChave:
      "meme memes humor engraçado divertido ironia sarcasmo amar nesta economia amor romance relacionamento solteiro crise dinheiro frase internet selfie espelho celular óculos escuros jaqueta preto black vermelho red verde fotografia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["/imagens/unitarios/amar_nesta_economia/01.jpg"],
  },
  {
    id: "semente_do_amor",
    referencia: "UNI-036",
    nome: "Semente do Amor",
    tipo: "unitario",
    categoria: "estampas-e-cores",
    palavrasChave:
      "semente amor quem cultiva a semente do amor segue em frente e não se apavora frase música musical letra canção mpb brasil brasileiro esperança motivação carinho rosa pink vinho bordô marsala vermelho estrela estrelas pipa rosto sorriso ilustração tipografia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/semente_do_amor/${arquivo}`,
    ),
  },
  {
    id: "fala_comigo_nao_eu_namoro",
    referencia: "UNI-037",
    nome: "Fala Comigo Não, Eu Namoro",
    tipo: "unitario",
    categoria: "humor",
    palavrasChave:
      "fala cmg nao eu namoro fala comigo não eu namoro meme memes humor engraçado divertido ironia caveira crânio esqueleto ossos ceifador capuz manto morte dark gótico goth preto black cinza branco vermelho red frase relacionamento namoro casal compromisso",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/fala_comigo_nao_eu_namoro/${arquivo}`,
    ),
  },
  {
    id: "sanji_passo_em_chamas",
    referencia: "UNI-038",
    nome: "Sanji — Passo em Chamas",
    tipo: "unitario",
    categoria: "anime",
    palavrasChave:
      "sanji vinsmoke one piece onepiece perna negra black leg diable jambe cozinheiro pirata mugiwara anime mangá manga otaku geek chute fogo chama chamas amarelo yellow laranja orange preto black branco white cabelo loiro terno gravata quadrinhos",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/sanji_passo_em_chamas/${arquivo}`,
    ),
  },
  {
    id: "me_ame_anavitoria",
    referencia: "UNI-039",
    nome: "Me Ame ao Som de ANAVITÓRIA",
    tipo: "unitario",
    categoria: "musica",
    palavrasChave:
      "anavitória anavitoria ana vitória ana caetano vitória falcão música musical mpb pop folk brasileiro duo cantoras me ame ao som de amor romance romântico frase tipografia letras colagem recortes vintage retrô vermelho red bege creme sépia presente",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/me_ame_anavitoria/${arquivo}`,
    ),
  },
  {
    id: "mikey_tons_de_calmaria",
    referencia: "UNI-040",
    nome: "Mikey — Tons de Calmaria",
    tipo: "unitario",
    categoria: "anime",
    palavrasChave:
      "mikey manjiro sano tokyo revengers toman anime mangá manga otaku geek cabelo loiro olhos azuis camisa azul blue rosa pink bege creme pastel estrela patinha fofo cute kawaii delicado retrato ilustração",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["/imagens/unitarios/mikey_tons_de_calmaria/01.jpg"],
  },
  {
    id: "em_algum_lugar_pra_relaxar",
    referencia: "UNI-041",
    nome: "Em Algum Lugar pra Relaxar",
    tipo: "unitario",
    categoria: "musica",
    palavrasChave:
      "em algum lugar pra relaxar frase descanso relaxar tranquilidade paz pausa música musical letra canção rosa pink pastel amarelo yellow azul blue verde vermelho roxo colorido estrelas brilho colagem recortes letras tipografia retrô vintage divertido aesthetic",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/em_algum_lugar_pra_relaxar/${arquivo}`,
    ),
  },
  {
    id: "sou_feliz_e_agradeco",
    referencia: "UNI-042",
    nome: "Sou Feliz e Agradeço",
    tipo: "unitario",
    categoria: "musica",
    palavrasChave:
      "sou feliz e agradeço por tudo que deus me deu frase fé gratidão agradecimento felicidade deus cristão cristã cristianismo religioso gospel esperança rosa pink magenta branco white creme xadrez quadriculado damier letras cursivas tipografia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagemCesta: "/imagens/unitarios/sou_feliz_e_agradeco/02.jpg",
    imagens: ["01.jpg", "02.jpg"].map(
      (arquivo) => `/imagens/unitarios/sou_feliz_e_agradeco/${arquivo}`,
    ),
  },
  {
    id: "nerd_universo_particular",
    referencia: "UNI-043",
    nome: "Nerd — Universo Particular",
    tipo: "unitario",
    categoria: "nerd",
    palavrasChave:
      "nerd geek nasa espaço espacial universo cosmos astronomia ciência órbita estrelas céu noite galáxia tecnologia azul marinho blue preto black branco white vermelho red letras tipografia humor",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/nerd_universo_particular/${arquivo}`,
    ),
  },
  {
    id: "cachorrinho_charme_de_bandana",
    referencia: "UNI-044",
    nome: "Cachorrinho — Charme de Bandana",
    tipo: "unitario",
    categoria: "pets",
    palavrasChave:
      "cachorro cachorrinho cão cãozinho dog puppy pet animal animais bandana lenço azul blue preto black branco white bege focinho olhos grandes orelhas fofo cute fotografia retrato amizade companheiro",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) =>
        `/imagens/unitarios/cachorrinho_charme_de_bandana/${arquivo}`,
    ),
  },
  {
    id: "espelho_tudo_a_seu_favor",
    referencia: "UNI-045",
    nome: "Espelho — Tudo a Seu Favor",
    tipo: "unitario",
    categoria: "estampas-e-cores",
    palavrasChave:
      "everything is working out for you tudo a seu favor frase inglês autoestima amor próprio autocuidado confiança motivação afirmação positiva esperança espelho dourado gold rosa pink salmão preto black marrom mulher negra cabelo cacheado crespo mãos ilustração aesthetic",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/espelho_tudo_a_seu_favor/${arquivo}`,
    ),
  },
  {
    id: "sorriso_sombrio",
    referencia: "UNI-046",
    nome: "Sorriso Sombrio",
    tipo: "unitario",
    categoria: "dark",
    palavrasChave:
      "rosto sorriso sombrio dentes maquiagem correntes retrato terror horror gótico goth dark preto black branco white cinza alternativo",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["/imagens/unitarios/sorriso_sombrio/01.jpg"],
  },
  {
    id: "grito_das_teias",
    referencia: "UNI-047",
    nome: "Grito das Teias",
    tipo: "unitario",
    categoria: "dark",
    palavrasChave:
      "caveira crânio esqueleto cérebro olho olhos grito boca dentes teia teias aranha terror horror gótico goth dark preto black branco white ilustração",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["/imagens/unitarios/grito_das_teias/01.jpg"],
  },
  {
    id: "abraco_eterno",
    referencia: "UNI-048",
    nome: "Abraço Eterno",
    tipo: "unitario",
    categoria: "dark",
    palavrasChave:
      "esqueleto esqueletos caveira crânio ossos abraço casal amor eterno romance serpente ouroboros círculo sigilo símbolo místico gótico goth dark terror preto black branco white ilustração",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["/imagens/unitarios/abraco_eterno/01.jpg"],
  },
  {
    id: "uma_turma_de_lembrancas",
    referencia: "PER-003",
    nome: "Uma Turma de Lembranças",
    tipo: "personalizado",
    precoCentavos: 800,
    precoAtacadoCentavos: 400,
    precosAtacadoPorTamanho: { 32: 293, 44: 400, 55: 480 },
    precoAtacadoNormalCentavos: 720,
    quantidadeMinimaAtacado: 100,
    descricao:
      "Um tema em comum, um nome especial em cada botton! Esta encomenda de uma van escolar ganhou versões personalizadas para cada criança. Inspire-se para presentear sua turma, comemorar uma data ou criar uma lembrança para seu grupo, com os temas e nomes que você escolher.",
    mensagemPersonalizacao:
      "Olá! Gostaria de bottons personalizados para uma turma ou grupo, com o nome de cada pessoa. Podemos combinar os temas, nomes, embalagem, tamanho e quantidade?",
    palavrasChave:
      "personalizado turma grupo van escolar transporte escola crianças infantil nomes nome individual lembrancinha lembrança presente meninas superpoderosas florzinha lindinha docinho futebol jogador neymar seleção brasil bola azul verde amarelo rosa pink coração estrelas embalagem",
    imagens: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"].map(
      (arquivo) => `/imagens/personalizados/uma_turma_de_lembrancas/${arquivo}`,
    ),
  },
  {
    id: "colecao_sharingan",
    referencia: "COL-001",
    nome: "Coleção Sharingan — Olhares Uchiha",
    tipo: "colecao",
    precoCentavos: 700,
    descricao:
      "Seis olhares, uma paixão por Naruto. Esta coleção nasceu de uma encomenda de um fã de Sharingans, reunindo Itachi, Obito, Madara, Kakashi, Sasuke e Shisui. Monte sua coleção com os personagens e a quantidade que preferir. Combine os detalhes pelo WhatsApp.",
    palavrasChave:
      "coleção colecoes sharingan mangekyou uchiha naruto shippuden itachi obito madara kakashi sasuke shisui anime mangá manga otaku geek seis 6 bottons olhos ninja vermelho preto laranja azul roxo verde personalizado fã",
    imagens: ["/imagens/colecoes/sharingan/01.jpg"],
  },
  {
    id: "mini_bottons_musicais",
    referencia: "COL-002",
    nome: "Sua Banda em Mini Bottons",
    tipo: "colecao",
    exibirEmPersonalizados: true,
    detalheMedida: "MINI BOTTONS · 32 MM • 3,2 CM",
    descricao:
      "Colecione mini bottons personalizados da sua banda ou artista favorito. Leve seus álbuns, músicas e símbolos preferidos para onde você for! Os mini bottons das fotos têm 32 mm • 3,2 cm.",
    mensagemPersonalizacao:
      "Olá! Gostaria de uma coleção de mini bottons personalizados da minha banda ou artista favorito. Podemos combinar a banda ou artista e a quantidade?",
    palavrasChave:
      "32mm 32 mm 3,2cm banda bandas música musica musical songs song coleção colecao coleções colecoes mini minibottons mini bottons personalizados artista artistas álbum album álbuns albums cantor cantora fã fandom twenty one pilots twentyonepilots top tøp tyler joseph josh dun trench blurryface scaled and icy vessel clancy regional at best rock pop alternativo indie amarelo vermelho preto rosa azul branco símbolos logo",
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/colecoes/mini_bottons_musicais/${arquivo}`,
    ),
  },
  {
    id: "seu_pet_sempre_por_perto",
    referencia: "PER-004",
    nome: "Seu Pet, Sempre por Perto",
    tipo: "personalizado",
    precoCentavos: 800,
    precoAtacadoCentavos: 400,
    precosAtacadoPorTamanho: { 32: 293, 44: 400, 55: 480 },
    precoAtacadoNormalCentavos: 720,
    quantidadeMinimaAtacado: 100,
    descricao: "Transforme a foto do seu pet em um botton personalizado e leve esse amor para todo lugar! Um carinho para usar na bolsa, na mochila ou presentear quem também é apaixonado pelo seu companheiro.",
    mensagemPersonalizacao: "Olá! Gostaria de transformar a foto do meu pet em um botton personalizado. Podemos combinar a foto, o nome, o estilo da arte, o tamanho e a quantidade?",
    palavrasChave:
      "personalizado pet pets foto fotografia animal animais cachorro cachorrinho cão dog rottweiler gato gatinho cat retrato ilustração nome lembrança presente amor companheiro patinha coração azul blue vermelho red dourado teddy",
    imagens: ["01.jpg", "02.jpg"].map(
      (arquivo) => `/imagens/personalizados/seu_pet_sempre_por_perto/${arquivo}`,
    ),
  },
  {
    id: "sorriso_de_aco",
    referencia: "UNI-049",
    nome: "Sorriso de Aço",
    tipo: "unitario",
    categoria: "dark",
    palavrasChave:
      "caveira crânio esqueleto dentes sorriso rosto máscara ciborgue cyborg cyberpunk robô robótico mecânico tecnologia colagem xadrez quadriculado preto black branco white cinza monocromático dark gótico goth industrial alternativo grunge terror horror aesthetic",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/sorriso_de_aco/${arquivo}`,
    ),
  },
  {
    id: "refugio_das_sombras",
    referencia: "UNI-050",
    nome: "Refúgio das Sombras",
    tipo: "unitario",
    categoria: "dark",
    palavrasChave:
      "floresta bosque árvores galhos cabana casa refúgio caminho paisagem natureza pássaros preto black branco white cinza monocromático desenho ilustração hachuras gravura dark sombrio gótico goth mistério terror horror outono inverno aesthetic",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/refugio_das_sombras/${arquivo}`,
    ),
  },
  {
    id: "coro_dos_esqueletos",
    referencia: "UNI-051",
    nome: "Coro dos Esqueletos",
    tipo: "unitario",
    categoria: "dark",
    palavrasChave:
      "caveira caveiras crânio crânios esqueleto esqueletos ossos dentes olhos grito bocas teia textura terror horror dark gótico goth macabro sombrio metal alternativo preto black branco white monocromático ilustração desenho",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/coro_dos_esqueletos/${arquivo}`,
    ),
  },
  {
    id: "gato_terceiro_olhar",
    referencia: "UNI-052",
    nome: "Gato — Terceiro Olhar",
    tipo: "unitario",
    categoria: "dark",
    palavrasChave:
      "gato gatinho felino cat terceiro olho olhos místico surreal fantasia dark gótico goth terror horror preto black branco white cinza monocromático ilustração desenho ornamentos joia bigodes rosto retrato alternativo aesthetic",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagemCesta: "/imagens/unitarios/gato_terceiro_olhar/01.jpg",
    imagens: ["01.jpg", "02.jpg"].map(
      (arquivo) => `/imagens/unitarios/gato_terceiro_olhar/${arquivo}`,
    ),
  },
  {
    id: "voce_no_seu_anime",
    referencia: "PER-005",
    nome: "Você no Seu Anime Favorito",
    tipo: "personalizado",
    precoCentavos: 800,
    precoAtacadoCentavos: 400,
    precosAtacadoPorTamanho: { 32: 293, 44: 400, 55: 480 },
    precoAtacadoNormalCentavos: 720,
    quantidadeMinimaAtacado: 100,
    descricao: "Transforme-se em um personagem no universo do seu anime favorito! Sua foto ganha uma arte personalizada para virar um botton cheio de personalidade — para você ou para presentear alguém especial.",
    mensagemPersonalizacao: "Olá! Quero me transformar em um personagem do meu anime favorito em um botton personalizado. Podemos combinar a foto, o anime, o nome e os detalhes da arte?",
    palavrasChave:
      "personalizado personalização anime mangá manga otaku geek foto retrato personagem ilustração one piece onepiece wanted procurado cartaz recompensa pirata marine nome presente amarelo dourado bege marrom azul",
    imagens: ["01.jpg", "02.jpg"].map(
      (arquivo) => `/imagens/personalizados/voce_no_seu_anime/${arquivo}`,
    ),
  },
  {
    id: "made_to_worship",
    referencia: "UNI-053",
    nome: "Made to Worship",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "cristãos cristão cristã cristãs cristianismo fé deus jesus gospel louvor adoração worship made to worship feito para adorar frase inglês rosa pink creme bege branco flores floral margaridas amarelo magenta tipografia retrô delicado",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/made_to_worship/${arquivo}`,
    ),
  },
  {
    id: "jesus_salva",
    referencia: "UNI-054",
    nome: "Jesus Salva",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "jesus salva cristãos cristão cristã cristãs cristianismo fé deus salvação evangelho gospel religioso frase preto black branco white monocromático minimalista letras tipografia retrô ondulada",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/jesus_salva/${arquivo}`,
    ),
  },
  {
    id: "i_just_need_god",
    referencia: "UNI-055",
    nome: "I Just Need God",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "i just need god eu só preciso de deus cristãos cristão cristã cristãs cristianismo jesus fé evangelho gospel religioso frase inglês preto black branco white monocromático minimalista letras tipografia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/i_just_need_god/${arquivo}`,
    ),
  },
  {
    id: "jesus_king",
    referencia: "UNI-056",
    nome: "Jesus King",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "jesus king rei cristãos cristão cristã cristãs cristianismo fé deus evangelho gospel bíblia versículo timóteo 1 timoteo 6 15 religioso frase branco white vermelho red amarelo yellow azul blue marinho tipografia retrô hambúrguer humor",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/jesus_king/${arquivo}`,
    ),
  },
  {
    id: "fruit_of_the_spirit",
    referencia: "UNI-057",
    nome: "Fruit of the Spirit",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "fruit of the spirit fruto frutos espírito santo cristãos cristão cristã cristãs cristianismo deus jesus fé gospel bíblia gálatas amor alegria paz paciência benignidade bondade fidelidade mansidão domínio próprio joy kindness love gentleness peace goodness forbearance faithfulness self control banana fruta azul blue amarelo yellow laranja creme bege branco tipografia inglês",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/fruit_of_the_spirit/${arquivo}`,
    ),
  },
  {
    id: "purify_my_heart_lord",
    referencia: "UNI-058",
    nome: "Purify My Heart, Lord",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "purify my heart lord purifica meu coração senhor cristãos cristão cristã cristãs cristianismo deus jesus fé oração adoração gospel frase inglês flores floral pétalas folhas rosa pink lilás verde amarelo bege creme pastel delicado tipografia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/purify_my_heart_lord/${arquivo}`,
    ),
  },
  {
    id: "salmos_23_4_nao_temerei",
    referencia: "UNI-059",
    nome: "Salmos 23:4 — Não Temerei",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "salmos salmo 23 4 sl bíblia versículo ainda que eu ande pelo vale da sombra da morte não temerei cristãos cristão cristã cristãs cristianismo deus jesus fé coragem confiança gospel frase branco white preto black rosa pink magenta tipografia grafite letras urbano",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/salmos_23_4_nao_temerei/${arquivo}`,
    ),
  },
  {
    id: "all_things_new",
    referencia: "UNI-060",
    nome: "All Things New",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "all things new the old is gone the new is here tudo se fez novo nova criatura renovação recomeço 2 coríntios corinthians 5 17 bíblia versículo cristãos cristão cristã cristãs cristianismo deus jesus fé gospel preto black rosa pink branco white borboleta borboletas estrelas frase inglês tipografia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/all_things_new/${arquivo}`,
    ),
  },
  {
    id: "decidiu_salvar_voce",
    referencia: "UNI-061",
    nome: "Decidiu Salvar Você",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "jesus não evitou a cruz porque decidiu salvar você cristãos cristão cristã cristãs cristianismo deus fé salvação cruz coroa espinhos silhueta rosto perfil gospel evangelho frase verde green preto black branco white tipografia textura",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/decidiu_salvar_voce/${arquivo}`,
    ),
  },
  {
    id: "god_is_bigger_than_your_fear",
    referencia: "UNI-062",
    nome: "“Deus é maior que o seu medo”",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "god is bigger than your fear deus é maior que seu medo cristãos cristão cristã cristãs cristianismo jesus fé coragem confiança gospel frase inglês vinho bordô marsala vermelho red rosa pink brilho glitter estrela tipografia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/god_is_bigger_than_your_fear/${arquivo}`,
    ),
  },
  {
    id: "ate_que_o_senhor_venha",
    referencia: "UNI-063",
    nome: "Até que o Senhor Venha",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "até que o senhor venha 1 coríntios corintios 11 26 bíblia versículo jesus volta retorno cristãos cristão cristã cristãs cristianismo deus fé esperança gospel coroa rei ampulheta tempo estrela azul blue marinho branco white brilho textura tipografia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/ate_que_o_senhor_venha/${arquivo}`,
    ),
  },
  {
    id: "cristo_e_suficiente",
    referencia: "UNI-064",
    nome: "Cristo é Suficiente",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "cristo é suficiente jesus deus cristãos cristão cristã cristãs cristianismo fé evangelho gospel religioso frase retrato rosto colagem papel rasgado letras tipografia vinho bordô vermelho red dourado gold preto black branco white cinza",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/cristo_e_suficiente/${arquivo}`,
    ),
  },
  {
    id: "o_senhor_e_meu_pastor",
    referencia: "UNI-065",
    nome: "“O Senhor é meu pastor; nada me faltará”",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "the lord is my shepherd i lack nothing o senhor é meu pastor nada me faltará salmos salmo 23 1 bíblia versículo cristãos cristão cristã cristãs cristianismo deus jesus fé confiança gospel frase inglês creme bege amarelo claro pastel rosa pink estrela ondas tipografia retrô",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/o_senhor_e_meu_pastor/${arquivo}`,
    ),
  },
  {
    id: "tu_porem_permaneca_em_mim",
    referencia: "UNI-066",
    nome: "Tu, Porém — Permaneça em Mim",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "tu porém permaneça em mim eles podem você não peixes peixe cardume contracorrente azul claro turquesa branco cristãos cristão cristã cristãs cristianismo jesus deus fé evangelho gospel frase",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/tu_porem_permaneca_em_mim/${arquivo}`,
    ),
  },
  {
    id: "eren_tita_de_ataque",
    referencia: "UNI-067",
    nome: "Eren — Titã de Ataque",
    tipo: "unitario",
    categoria: "anime",
    palavrasChave:
      "eren yeager jaeger titã de ataque attack on titan shingeki no kyojin anime mangá otaku gigante perfil cabelo preto longo vapor fumaça vermelho preto branco",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/eren_tita_de_ataque/${arquivo}`,
    ),
  },
  {
    id: "portugal_camisa_7",
    referencia: "UNI-068",
    nome: "Portugal — Camisa 7",
    tipo: "unitario",
    categoria: "esportes",
    palavrasChave:
      "portugal camisa 7 sete seleção portuguesa futebol jogador esporte capitão braçadeira retrato ilustração preto branco cinza monocromático gráficos números",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/portugal_camisa_7/${arquivo}`,
    ),
  },
  {
    id: "fight_like_a_girl",
    referencia: "UNI-069",
    nome: "“Lute como uma garota”",
    tipo: "unitario",
    categoria: "esportes",
    palavrasChave:
      "fight like a girl lute como uma garota menina mulher mulheres força feminina empoderamento feminismo luta boxe luvas vermelhas esporte frase inglês branco preto vermelho laço",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/fight_like_a_girl/${arquivo}`,
    ),
  },
  {
    id: "bulking_bad",
    referencia: "UNI-070",
    nome: "Bulking Bad — “Ganhando massa”",
    tipo: "unitario",
    categoria: "academia",
    palavrasChave:
      "bulking bad breaking bad ganhando massa muscular academia musculação treino fitness maromba fisiculturismo músculos força humor meme paródia trocadilho série tabela periódica preto verde branco chapéu óculos",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/bulking_bad/${arquivo}`,
    ),
  },
  {
    id: "hot_girls_love_muay_thai",
    referencia: "UNI-071",
    nome: "“Garotas gostosas amam Muay Thai”",
    tipo: "unitario",
    categoria: "esportes",
    palavrasChave:
      "hot girls love muay thai garotas gostosas lindas bonitas amam luta artes marciais boxe tailandês lutadora mulher mulheres feminino treino academia esporte chute silhueta frase inglês branco preto vermelho",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/hot_girls_love_muay_thai/${arquivo}`,
    ),
  },
  {
    id: "authentic_girls_club",
    referencia: "UNI-072",
    nome: "“Clube das garotas autênticas”",
    tipo: "unitario",
    categoria: "estampas-e-cores",
    palavrasChave:
      "authentic girls club clube das garotas autênticas meninas mulheres autenticidade feminino boca lábios beijo rosa vermelho branco frase inglês tipografia retrô",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/authentic_girls_club/${arquivo}`,
    ),
  },
  {
    id: "homem_vitruviano_anatomia_do_rock",
    referencia: "UNI-073",
    nome: "Homem Vitruviano — Anatomia do Rock",
    tipo: "unitario",
    categoria: "musica",
    palavrasChave:
      "homem vitruviano anatomia do rock leonardo da vinci arte renascimento releitura guitarra guitarrista música musical instrumento desenho braços círculo quadrado bege creme preto",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagemCesta: "/imagens/unitarios/homem_vitruviano_anatomia_do_rock/01.jpg",
    imagens: ["01.jpg", "02.jpg"].map(
      (arquivo) => `/imagens/unitarios/homem_vitruviano_anatomia_do_rock/${arquivo}`,
    ),
  },
  {
    id: "mother_of_dragons",
    referencia: "UNI-074",
    nome: "“Mãe dos Dragões” — Game of Thrones",
    tipo: "unitario",
    categoria: "filmes-e-series",
    palavrasChave:
      "mother of dragons mãe dos dragões game of thrones got daenerys targaryen khaleesi drogon dragão fantasia série asas branco preto vermelho frase inglês letras góticas",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/mother_of_dragons/${arquivo}`,
    ),
  },
  {
    id: "you_are_the_target",
    referencia: "UNI-075",
    nome: "“Se você não consegue identificar o alvo, você é o alvo”",
    tipo: "unitario",
    categoria: "games",
    palavrasChave:
      "call of duty mobile cod codm jogo games if you can't identify the target you are the target se você não consegue identificar o alvo você é o alvo mira frase inglês tipografia letras riscado preto branco vermelho minimalista",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/you_are_the_target/${arquivo}`,
    ),
  },
  {
    id: "im_going_back_to_505",
    referencia: "UNI-076",
    nome: "I’m Going Back to 505 — Arctic Monkeys",
    tipo: "unitario",
    categoria: "musica",
    palavrasChave:
      "i'm going back to 505 im going back to 505 estou voltando para o 505 arctic monkeys música musical banda indie rock alternative alex turner favourite worst nightmare frase inglês branco preto vermelho números minimalista tipografia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/im_going_back_to_505/${arquivo}`,
    ),
  },
  {
    id: "barbie_ciencia_da_computacao",
    referencia: "UNI-077",
    nome: "“Esta Barbie estuda Ciência da Computação”",
    tipo: "unitario",
    categoria: "programacao",
    palavrasChave:
      "this barbie studies computer science esta essa barbie estuda ciência da computação computacao programação tecnologia informática faculdade universitária estudante curso ti desenvolvedora programadora rosa pink branco frase inglês tipografia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/barbie_ciencia_da_computacao/${arquivo}`,
    ),
  },
  {
    id: "me_writing_great_code",
    referencia: "UNI-078",
    nome: "“Eu escrevendo um ótimo código”",
    tipo: "unitario",
    categoria: "programacao",
    palavrasChave:
      "me writing great code eu escrevendo um ótimo código programação programador programadora desenvolvedor desenvolvedora tecnologia informática ti computação chatgpt openai claude inteligência artificial ia ai meme humor branco preto laranja",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/me_writing_great_code/${arquivo}`,
    ),
  },
  {
    id: "skyline_gtr_olhar_jdm",
    referencia: "UNI-079",
    nome: "Skyline GT-R — Olhar JDM",
    tipo: "unitario",
    categoria: "carros",
    palavrasChave:
      "nissan skyline gt-r gtr r34 jdm carro carros automóvel automotivo japonês japão tuning esportivo anime mangá manga garota olhos olhar preto branco cinza monocromático colagem",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/skyline_gtr_olhar_jdm/${arquivo}`,
    ),
  },
  {
    id: "skyline_gtr_encontro_subterraneo",
    referencia: "UNI-080",
    nome: "Skyline GT-R — Encontro Subterrâneo",
    tipo: "unitario",
    categoria: "carros",
    palavrasChave:
      "nissan skyline gt-r gtr r34 nismo jdm meet underground encontro subterrâneo garagem estacionamento carro carros automóvel automotivo japonês japão tóquio tokyo tuning esportivo noite noturno preto branco azul claro turquesa",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/skyline_gtr_encontro_subterraneo/${arquivo}`,
    ),
  },
  {
    id: "ctrl_alt_slay",
    referencia: "UNI-081",
    nome: "Ctrl + Alt + Slay — “Arrase”",
    tipo: "unitario",
    categoria: "programacao",
    palavrasChave:
      "ctrl alt slay arrase arrasar control alt delete del teclado teclas atalho computador programação programador programadora desenvolvedor desenvolvedora dev tecnologia informática ti humor trocadilho rosa pink preto bege estrelas ampulheta cursor chamas grade retrô y2k",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/ctrl_alt_slay/${arquivo}`,
    ),
  },
  {
    id: "i_love_nerds",
    referencia: "UNI-082",
    nome: "“Eu amo nerds”",
    tipo: "unitario",
    categoria: "nerd",
    palavrasChave:
      "i love nerds eu amo nerds nerd geek coração rosa pink pixel pixelado pixel art 8 bits oito bits branco preto humor frase inglês amor",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/i_love_nerds/${arquivo}`,
    ),
  },
  {
    id: "cod_mobile_guerreira_rubra",
    referencia: "UNI-083",
    nome: "Rin Yoshida — Call of Duty Mobile",
    tipo: "unitario",
    categoria: "games",
    palavrasChave:
      "rin yoshida call of duty mobile COD CODm jogo games gamer personagem guerreira rubra arma rifle armadura cabelo curto vermelho vinho bordô preto dourado roxo energia fantasia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/cod_mobile_guerreira_rubra/${arquivo}`,
    ),
  },
  {
    id: "lisa_violeta",
    referencia: "UNI-084",
    nome: "LISA — Violeta",
    tipo: "unitario",
    categoria: "idols",
    palavrasChave:
      "lisa lalisa blackpink black pink blink kpop k-pop pop música cantora idol idols violeta roxo lilás lavanda preto colagem flor coroa retrato",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/lisa_violeta/${arquivo}`,
    ),
  },
  {
    id: "targaryen_dragoes",
    referencia: "UNI-085",
    nome: "Targaryen — “Dragões”",
    tipo: "unitario",
    categoria: "filmes-e-series",
    palavrasChave:
      "targaryen dragons dragões dragão game of thrones got house of the dragon casa do dragão daenerys khaleesi fantasia série paródia café cafeteria logo emblema vermelho preto branco",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/targaryen_dragoes/${arquivo}`,
    ),
  },
  {
    id: "sua_direcao_importa_mais",
    referencia: "UNI-086",
    nome: "“Sua direção é mais importante que sua velocidade”",
    tipo: "unitario",
    categoria: "motivacional",
    categoriasAdicionais: ["estampas-e-cores"],
    palavrasChave:
      "your direction is more important than your speed sua direção é mais importante que sua velocidade motivacional motivação inspiração progresso caminho ritmo calma frase inglês peixes peixe dourado laranja rosa creme bege pastel aesthetic tipografia estrelas",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/sua_direcao_importa_mais/${arquivo}`,
    ),
  },
  {
    id: "hot_mess",
    referencia: "UNI-087",
    nome: "Hot Mess — “Uma bagunça de charme”",
    tipo: "unitario",
    categoria: "humor",
    palavrasChave:
      "hot mess uma bagunça de charme bagunçada caos caótica humor frase inglês rosa pink vermelho vinho branco chama fogo tipografia retrô paródia hot wheels",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/hot_mess/${arquivo}`,
    ),
  },
  {
    id: "chill_relaxe",
    referencia: "UNI-088",
    nome: "Chill — “Relaxe”",
    tipo: "unitario",
    categoria: "estampas-e-cores",
    palavrasChave:
      "chill relaxe relaxar calma tranquilidade descanso frase inglês tipografia letras onduladas ondas retrô vintage aesthetic minimalista vermelho vinho bordô creme bege branco",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/chill_relaxe/${arquivo}`,
    ),
  },
  {
    id: "dont_quit_do_it",
    referencia: "UNI-089",
    nome: "“Não desista — Faça acontecer”",
    tipo: "unitario",
    categoria: "motivacional",
    palavrasChave:
      "don't quit dont quit do it não desista faça acontecer faça isso motivacional motivação inspiração persistência coragem atitude frase inglês rosa pink preto tipografia letras riscadas",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/dont_quit_do_it/${arquivo}`,
    ),
  },
  {
    id: "slay_tabela_periodica",
    referencia: "UNI-090",
    nome: "Slay — “Arrase” · Tabela Periódica",
    tipo: "unitario",
    categoria: "nerd",
    palavrasChave:
      "slay arrase arrasar tabela periódica química ciência elementos químicos enxofre lantânio ítrio sulfur lanthanum yttrium s la y nerd geek estudante faculdade humor trocadilho inglês branco rosa pink magenta cinza",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/slay_tabela_periodica/${arquivo}`,
    ),
  },
  {
    id: "nova_york_estatua_da_liberdade",
    referencia: "UNI-091",
    nome: "Nova York — Estátua da Liberdade",
    tipo: "unitario",
    categoria: "estampas-e-cores",
    palavrasChave:
      "new york nova york ny nyc estátua da liberdade statue of liberty estados unidos eua usa viagem turismo cidade monumento arquitetura estrelas selo emblema azul marinho amarelo dourado vintage retrô",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/nova_york_estatua_da_liberdade/${arquivo}`,
    ),
  },
  {
    id: "hello_kitty_eu_amo_nerds",
    referencia: "UNI-092",
    nome: "Hello Kitty — “Eu amo nerds”",
    tipo: "unitario",
    categoria: "nerd",
    palavrasChave:
      "hello kitty sanrio i love nerds eu amo nerds nerd geek óculos coração vermelho laço branco preto fofo kawaii cute desenho personagem amor frase inglês",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/hello_kitty_eu_amo_nerds/${arquivo}`,
    ),
  },
  {
    id: "vinil_o_toque_da_musica",
    referencia: "UNI-093",
    nome: "Vinil — O Toque da Música",
    tipo: "unitario",
    categoria: "musica",
    palavrasChave:
      "vinil disco lp música musical toque mãos criação de adão michelangelo arte renascimento releitura conexão musical journey stereo retrô vintage preto azul claro",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagemCesta: "/imagens/unitarios/vinil_o_toque_da_musica/01.jpg",
    imagens: ["01.jpg", "02.jpg"].map(
      (arquivo) => `/imagens/unitarios/vinil_o_toque_da_musica/${arquivo}`,
    ),
  },
  {
    id: "eu_amo_chatgpt",
    referencia: "UNI-094",
    nome: "“Eu amo ChatGPT”",
    tipo: "unitario",
    categoria: "humor",
    categoriasAdicionais: ["programacao"],
    palavrasChave:
      "i love chat gpt chatgpt eu amo chatgpt openai inteligência artificial ia ai programação programador programadora desenvolvedor desenvolvedora dev tecnologia informática humor coração vermelho branco preto frase inglês",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/eu_amo_chatgpt/${arquivo}`,
    ),
  },
  {
    id: "gym_mode_on",
    referencia: "UNI-095",
    nome: "“Modo academia ativado”",
    tipo: "unitario",
    categoria: "academia",
    palavrasChave:
      "gym mode on modo academia ativado ligado musculação treino fitness maromba halter peso força exercício esporte frase inglês preto branco cinza tipografia interruptor botão",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/gym_mode_on/${arquivo}`,
    ),
  },
  {
    id: "forca_classica",
    referencia: "UNI-096",
    nome: "Força Clássica",
    tipo: "unitario",
    categoria: "academia",
    palavrasChave:
      "força clássica academia musculação treino fitness maromba fisiculturismo músculos bíceps pose estátua escultura grega romana clássico louros coroa preto branco cinza monocromático",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagemCesta: "/imagens/unitarios/forca_classica/01.jpg",
    imagens: ["01.jpg", "02.jpg"].map(
      (arquivo) => `/imagens/unitarios/forca_classica/${arquivo}`,
    ),
  },
  {
    id: "focus_foco",
    referencia: "UNI-097",
    nome: "Focus — “Foco”",
    tipo: "unitario",
    categoria: "academia",
    palavrasChave:
      "focus foco academia musculação treino fitness maromba disciplina concentração força músculos costas estátua escultura clássica preto branco cinza monocromático frase inglês",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/focus_foco/${arquivo}`,
    ),
  },
  {
    id: "corpo_em_construcao_mente_em_missao",
    referencia: "UNI-098",
    nome: "“Corpo em construção, mente em missão”",
    tipo: "unitario",
    categoria: "academia",
    palavrasChave:
      "body under construction mind on a mission corpo em construção mente em missão academia musculação treino fitness maromba disciplina força halteres pesos caveira crânio preto branco frase inglês tipografia desgastada",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/corpo_em_construcao_mente_em_missao/${arquivo}`,
    ),
  },
  {
    id: "never_stop_nunca_pare",
    referencia: "UNI-099",
    nome: "Never Stop — “Nunca pare”",
    tipo: "unitario",
    categoria: "academia",
    palavrasChave:
      "never stop nunca pare discipline focus disciplina foco academia musculação treino fitness maromba força músculos costas estátua escultura clássica grafite graffiti setas rosa pink preto branco cinza frase inglês",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/never_stop_nunca_pare/${arquivo}`,
    ),
  },
  {
    id: "pink_freud",
    referencia: "UNI-100",
    nome: "Pink Freud",
    tipo: "unitario",
    categoria: "nerd",
    categoriasAdicionais: ["musica"],
    palavrasChave:
      "pink freud pink floyd sigmund freud psicanálise psicologia nerd música musical rock progressivo banda the dark side of the moon prisma triângulo arco-íris espectro luz paródia trocadilho preto branco rosa",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/pink_freud/${arquivo}`,
    ),
  },
  {
    id: "spock_vida_longa_e_prospera",
    referencia: "UNI-101",
    nome: "Spock — “Vida longa e próspera”",
    tipo: "unitario",
    categoria: "nerd",
    palavrasChave:
      "spock star trek jornada nas estrelas live long and prosper vida longa e próspera saudação vulcana vulcano ficção científica espaço nerd geek personagem série retrô pop art verde limão azul preto frase inglês",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/spock_vida_longa_e_prospera/${arquivo}`,
    ),
  },
  {
    id: "valorize_suas_melhores_curvas",
    referencia: "UNI-102",
    nome: "Valorize suas melhores curvas",
    tipo: "unitario",
    categoria: "nerd",
    palavrasChave:
      "valorize suas melhores curvas cérebro cerebro mente inteligência conhecimento estudo ciência psicologia neurociência nerd geek frase rosa pink branco preto raios desenho",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/valorize_suas_melhores_curvas/${arquivo}`,
    ),
  },
  {
    id: "eren_fragmentos_de_liberdade",
    referencia: "UNI-103",
    nome: "Eren — Fragmentos de Liberdade",
    tipo: "unitario",
    categoria: "anime",
    palavrasChave:
      "eren yeager jaeger attack on titan shingeki no kyojin titã de ataque anime mangá manga otaku colagem quadros páginas olhos olhar cabelo preso coque preto branco cinza monocromático liberdade",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/eren_fragmentos_de_liberdade/${arquivo}`,
    ),
  },
  {
    id: "game_of_litrones",
    referencia: "UNI-104",
    nome: "Game of Litrones",
    tipo: "unitario",
    categoria: "filmes-e-series",
    palavrasChave:
      "game of litrones game of thrones got série fantasia paródia trocadilho litrones litrão cerveja bebida letras logo tipografia branco preto minimalista",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/game_of_litrones/${arquivo}`,
    ),
  },
  {
    id: "pense_como_um_proton",
    referencia: "UNI-105",
    nome: "Pense como um próton — Sempre positivo",
    tipo: "unitario",
    categoria: "nerd",
    palavrasChave:
      "pense como um próton sempre positivo proton átomo física química ciência carga positiva positividade nerd geek estudo estudante sorriso amarelo branco preto órbitas desenho frase",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/pense_como_um_proton/${arquivo}`,
    ),
  },
  {
    id: "trabalhe_duro_aproveite_a_vida",
    referencia: "UNI-106",
    nome: "“Trabalhe duro, mas aproveite a vida também”",
    tipo: "unitario",
    categoria: "motivacional",
    palavrasChave:
      "work hard but make sure you enjoy life too trabalhe duro mas aproveite a vida também trabalho equilíbrio descanso motivacional motivação inspiração frase inglês tela monitor televisão pixel tipografia retrô azul claro preto",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/trabalhe_duro_aproveite_a_vida/${arquivo}`,
    ),
  },
  {
    id: "obanai_mitsuri_encontro_ao_entardecer",
    referencia: "UNI-107",
    nome: "Obanai e Mitsuri — Encontro ao Entardecer",
    tipo: "unitario",
    categoria: "anime",
    palavrasChave:
      "obanai iguro mitsuri kanroji obamitsu demon slayer kimetsu no yaiba anime mangá manga otaku hashira pilar serpente amor casal romance encontro entardecer pôr do sol rosa verde roxo cobra tranças",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/obanai_mitsuri_encontro_ao_entardecer/${arquivo}`,
    ),
  },
  {
    id: "comic_sans_proibida",
    referencia: "UNI-108",
    nome: "Comic Sans Proibida",
    tipo: "unitario",
    categoria: "humor",
    palavrasChave:
      "comic sans proibida proibido não use fonte tipografia design designer gráfico letras humor meme placa proibição vermelho branco preto",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/comic_sans_proibida/${arquivo}`,
    ),
  },
  {
    id: "o_que_voce_esta_esperando",
    referencia: "UNI-109",
    nome: "“O que você está esperando?”",
    tipo: "unitario",
    categoria: "motivacional",
    palavrasChave:
      "what are you waiting for o que você está esperando motivacional motivação inspiração atitude ação comece sinal verde semáforo trânsito azul branco preto frase inglês",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/o_que_voce_esta_esperando/${arquivo}`,
    ),
  },
  {
    id: "sounds_gay_im_in",
    referencia: "UNI-110",
    nome: "“Parece gay, tô dentro!”",
    tipo: "unitario",
    categoria: "orgulho",
    palavrasChave:
      "sounds gay i'm in im in parece gay tô dentro estou dentro lgbt lgbtq lgbtqia orgulho pride diversidade arco-íris humor pin-up pinup retrô vintage mulher ilustração creme bege coral salmão preto frase inglês",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/sounds_gay_im_in/${arquivo}`,
    ),
  },
  {
    id: "yeshua_coracao_de_fe",
    referencia: "UNI-111",
    nome: "Yeshúa — Coração de Fé",
    tipo: "unitario",
    categoria: "cristaos",
    palavrasChave:
      "yeshua yeshúa jesus cristo deus fé cristãos cristão cristã cristãs cristianismo gospel evangelho coração anatômico vermelho branco preto tipografia letras",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/yeshua_coracao_de_fe/${arquivo}`,
    ),
  },
  {
    id: "soul_sister",
    referencia: "UNI-112",
    nome: "Soul Sister — “Irmã de alma”",
    tipo: "unitario",
    categoria: "ubuntu",
    palavrasChave:
      "soul sister irmã de alma ubuntu raízes negras cultura negra afro afropaty afropatys representatividade identidade mulher ilustração rosto argolas brincos cabelo tipografia preto branco frase inglês",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/soul_sister/${arquivo}`,
    ),
  },
  {
    id: "sabotage_vim_pra_sabotar",
    referencia: "UNI-113",
    nome: "Sabotage — Vim pra Sabotar seu Raciocínio",
    tipo: "unitario",
    categoria: "musica",
    categoriasAdicionais: ["ubuntu"],
    palavrasChave:
      "sabotage vim pra sabotar seu raciocínio rap rapper hip hop hiphop música musical brasileiro nacional ubuntu raízes negras cultura negra retrato colagem vermelho amarelo branco preto tipografia",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/sabotage_vim_pra_sabotar/${arquivo}`,
    ),
  },
  {
    id: "sabotage_quem_nao_fez_faz",
    referencia: "UNI-114",
    nome: "Sabotage — Quem Não Fez, Faz",
    tipo: "unitario",
    categoria: "musica",
    categoriasAdicionais: ["ubuntu"],
    palavrasChave:
      "sabotage quem não fez faz usa a mente e corre atrás rap rapper hip hop hiphop música musical brasileiro nacional ubuntu raízes negras cultura negra ilustração retrato frase branco preto marrom azul claro",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/sabotage_quem_nao_fez_faz/${arquivo}`,
    ),
  },
  {
    id: "preciso_de_cafeina",
    referencia: "UNI-115",
    nome: "“Preciso de cafeína”",
    tipo: "unitario",
    categoria: "frases",
    palavrasChave:
      "need caffeine addict preciso de cafeína café coffee cafeinado cafeteria bebida frase inglês vermelho branco tipografia letras cursivas retrô vintage",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/preciso_de_cafeina/${arquivo}`,
    ),
  },
  {
    id: "spotify_orgulho_bi",
    referencia: "UNI-116",
    nome: "Spotify — Orgulho Bi",
    tipo: "unitario",
    categoria: "orgulho",
    palavrasChave:
      "spotify código ondas música musical orgulho bi bissexual bissexualidade bandeira lgbt lgbtq lgbtqia pride diversidade rosa pink roxo azul preto degradê",
    tamanhos: [32, 44, 55],
    precosPorTamanho: { 32: 550, 44: 750, 55: 900 },
    imagens: ["01.jpg", "02.jpg", "03.jpg"].map(
      (arquivo) => `/imagens/unitarios/spotify_orgulho_bi/${arquivo}`,
    ),
  },
  {
    id: "personalizado_musical",
    referencia: "PER-001",
    nome: "Seu artista, sua música",
    tipo: "personalizado",
    precoAtacadoCentavos: 400,
    precosAtacadoPorTamanho: { 32: 293, 44: 400, 55: 480 },
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
      `${produto.nome} ${categoriasIndividuais.find((categoria) => categoria.id === produto.categoria)?.nome || ""} ${produto.palavrasChave} botton bottons ${produto.tipo === "kit" ? "kit 4 unidades 44mm 44 mm" : ["unitario", "parzinho", "trio"].includes(produto.tipo) ? "individual unitario avulso 32mm 32 mm 44mm 44 mm 55mm 55 mm" : "personalizado"}`,
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
  if (!produto || ["personalizado", "colecao"].includes(produto.tipo))
    return null;
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
