const kit = (id, arquivos, palavrasChave) => ({
  id,
  // O nome inicial vem da pasta; edite aqui quando quiser personalizá-lo.
  nome: id
    .replace(/^kit_/, "")
    .split("_")
    .map((palavra) => palavra[0].toUpperCase() + palavra.slice(1))
    .join(" "),
  tipo: "kit",
  palavrasChave: palavrasChave,
  imagens: arquivos.map((arquivo) => `/imagens/produtos/${id}/${arquivo}.png`),
});
const produtos = [
  kit(
    "kit_blackpink",
    ["kit_blckpnk_deco", "blckpnk2", "blckpnk3"],
    "k-pop kpop música girl group",
  ),
  kit("kit_blue", ["kitblue", "kitblue2", "kitblue3"], "azul aesthetic"),
  kit("kit_coquette", ["cqttdeco", "cqtt2", "cqtt3"], "laço delicado rosa"),
  kit("kit_dark", ["darkdeco", "dark2", "dark3"], "escuro preto alternativo"),
  kit(
    "kit_deathnote",
    ["deathnotedeco", "deathnote2", "deathnote3"],
    "anime mangá manga",
  ),
  kit("kit_girly", ["grly_deco", "grly2", "grly3"], "rosa feminino"),
];
export { produtos };
