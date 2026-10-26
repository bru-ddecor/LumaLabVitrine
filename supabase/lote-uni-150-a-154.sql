insert into public.catalogo_favoritos(produto) values
('nao_sei_amar_pouco_caramelo'),
('brasil_camisa_7'),
('engradados_de_boteco'),
('futebol_chuteira_e_bola'),
('futebol_bola_na_rede')
on conflict do nothing;
