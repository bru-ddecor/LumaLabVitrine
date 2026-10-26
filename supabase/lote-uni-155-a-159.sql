insert into public.catalogo_favoritos(produto) values
('hora_do_gol_futebol'),
('vida_sem_gols'),
('amor_pelo_futebol'),
('neymar_camisa_10_brasil'),
('brasil_camisa_19_em_campo')
on conflict do nothing;
