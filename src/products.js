const kit = (id, files, keywords) => ({
  id,
  // O nome inicial vem da pasta; edite aqui quando quiser personalizá-lo.
  name: id.replace(/^kit_/, '').split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' '),
  kind: 'kit', keywords,
  images: files.map(file => `/imagens/produtos/${id}/${file}.png`),
});

export const products = [
  kit('kit_blackpink', ['kit_blckpnk_deco', 'blckpnk2', 'blckpnk3'], 'k-pop kpop música girl group'),
  kit('kit_blue', ['kitblue', 'kitblue2', 'kitblue3'], 'azul aesthetic'),
  kit('kit_coquette', ['cqttdeco', 'cqtt2', 'cqtt3'], 'laço delicado rosa'),
  kit('kit_dark', ['darkdeco', 'dark2', 'dark3'], 'escuro preto alternativo'),
  kit('kit_deathnote', ['deathnotedeco', 'deathnote2', 'deathnote3'], 'anime mangá manga'),
  kit('kit_girly', ['grly_deco', 'grly2', 'grly3'], 'rosa feminino'),
];
