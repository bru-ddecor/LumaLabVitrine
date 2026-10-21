const kit = (id, name, files, keywords) => ({
  id, name, kind: 'kit', keywords,
  images: files.map(file => `/imagens/produtos/${id}/${file}.png`),
});

export const products = [
  kit('kit_blackpink', 'BLACKPINK', ['kit_blckpnk_deco', 'blckpnk2', 'blckpnk3'], 'k-pop kpop música girl group'),
  kit('kit_blue', 'Blue', ['kitblue', 'kitblue2', 'kitblue3'], 'azul aesthetic'),
  kit('kit_coquette', 'Coquette', ['cqttdeco', 'cqtt2', 'cqtt3'], 'laço delicado rosa'),
  kit('kit_dark', 'Dark', ['darkdeco', 'dark2', 'dark3'], 'escuro preto alternativo'),
  kit('kit_deathnote', 'Death Note', ['deathnotedeco', 'deathnote2', 'deathnote3'], 'anime mangá manga'),
  kit('kit_girly', 'Girly', ['grly_deco', 'grly2', 'grly3'], 'rosa feminino'),
];
