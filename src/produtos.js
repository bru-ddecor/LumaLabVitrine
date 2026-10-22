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
  imagens: arquivos.map((arquivo) => `/imagens/produtos/${id}/${arquivo}.png`),
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
      `${produto.nome} ${produto.palavrasChave} kit botton bottons 4 unidades 44mm 44 mm`,
    );
    return termos.every((termo) => texto.includes(termo));
  });
}

export { produtos, buscarProdutos };
