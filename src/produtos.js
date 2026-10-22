const kit = (id, arquivos, palavrasChave) => ({
  id,
  // O nome inicial vem da pasta; edite aqui quando quiser personalizá-lo.
  nome: id
    .replace(/^kit_/, "")
    .split("_")
    .map((palavra) => palavra[0].toUpperCase() + palavra.slice(1))
    .join(" "),
  tipo: "kit",
  // Cores, estilos, temas e detalhes presentes nas artes dos bottons.
  palavrasChave,
  imagens: arquivos.map((arquivo) => `/imagens/kits/${id}/${arquivo}.png`),
});

const produtos = [
  kit(
    "kit_blackpink",
    ["kit_blckpnk_deco", "blckpnk2", "blckpnk3"],
    "blackpink black pink preto rosa k-pop kpop pop música coreano girl group jennie jisoo lisa rosé rose blink",
  ),
  kit(
    "kit_blue",
    ["kitblue", "kitblue2", "kitblue3"],
    "azul blue preto black aesthetic lua lunar noite noturno céu estrelas mar oceano água ondas mãos anime garota monocromático",
  ),
  kit(
    "kit_coquette",
    ["cqttdeco", "cqtt2", "cqtt3"],
    "rosa pink bege creme marrom pastel coquette aesthetic delicado romântico fofo cute kawaii ursinho urso laço lacinho flores floral xadrez patchwork cervo veado bambi animais vintage cottagecore",
  ),
  kit(
    "kit_dark",
    ["darkdeco", "dark2", "dark3"],
    "preto black branco bege dark gótico goth gothic alternativo aesthetic sombrio terror horror caveira crânio esqueleto ossos cruz morcego halloween",
  ),
  kit(
    "kit_deathnote",
    ["deathnotedeco", "deathnote2", "deathnote3"],
    "death note deathnote anime mangá manga otaku geek preto branco vermelho light yagami kira ryuk misa amane l lawliet shinigami maçã suspense",
  ),
  kit(
    "kit_girly",
    ["grly_deco", "grly2", "grly3"],
    "rosa pink preto branco girly feminino aesthetic anime mangá manga kawaii fofo cute garota olhos olho coração patinha gato gatinho neko",
  ),
  kit(
    "kit_artecollection1",
    ["arte1_deco", "arte1_2", "arte1_3"],
    "arte art collection coleção pintura clássico retrato mulher renascentista aesthetic vintage azul verde dourado bege laranja ruivo flores margaridas cerejeira sakura monte fuji japão paisagem montanha carpas koi peixe mosaico lago",
  ),
  kit(
    "kit_artecollection2",
    ["arte2_deco", "arte2_2", "arte2_3"],
    "arte art collection coleção pintura clássico aesthetic mona lisa monalisa leonardo da vinci renascimento van gogh amendoeira flores floral céu nuvens paisagem campo pôr do sol azul verde turquesa lilás lavanda",
  ),
  kit(
    "kit_artecollection3",
    ["arte3_deco", "arte3_2", "arte3_3"],
    "arte art collection coleção pintura clássico aesthetic renascimento criação de adão michelangelo mãos anjo querubim música instrumento alaúde carpas koi peixes lago água céu nuvens verde azul laranja vermelho dourado",
  ),
  kit(
    "kit_brownaesthetic",
    ["brwndeco", "brwn2", "brwn3"],
    "marrom brown bege caramelo terracota sépia tons terrosos aesthetic vintage outono paris frança torre eiffel arquitetura viagem leopardo onça felino animal print vogue moda fashion xadrez",
  ),
  kit(
    "kit_darkpink",
    ["drkpnkdeco", "drkpnk2", "drkpnk3"],
    "rosa pink preto black dark pink darkpink aesthetic alternativo neon brilho estrelas olho olhos mãos esqueleto ossos silhueta",
  ),
  kit(
    "kit_lightpurple",
    ["lp_deco", "lp2", "lp3"],
    "lilás roxo purple lavanda branco pastel light purple lightpurple aesthetic delicado fofo cute kawaii coração digital impressão digital amor romance livro leitura frase happier coelho coelhinho flor",
  ),
  kit(
    "kit_magicpurple",
    ["mp_deco", "mp2", "mp3"],
    "lilás roxo purple lavanda violeta pastel magic purple magicpurple aesthetic mágico místico magia fantasia olho olhos velas chama fogo espiral hipnose borboleta asas fada fairycore",
  ),
  {
    id: "cansada_de_ser_adulta",
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
    id: "personalizado_musical",
    nome: "Seu artista, sua música",
    tipo: "personalizado",
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
      `${produto.nome} ${produto.palavrasChave} botton bottons ${produto.tipo === "kit" ? "kit 4 unidades 44mm 44 mm" : produto.tipo === "unitario" ? "individual unitario avulso 32mm 32 mm 44mm 44 mm 55mm 55 mm" : "personalizado"}`,
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
  if (produto.tipo === "unitario")
    return produto.precosPorTamanho[produto.tamanhoSelecionado] ?? null;
  return produto.precoCentavos ?? null;
}
function chaveProduto(produto) {
  return produto.tipo === "unitario"
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
export {
  produtos,
  buscarProdutos,
  tamanhosDisponiveis,
  precoProduto,
  chaveProduto,
  medidaProduto,
  resolverItemCesta,
};
