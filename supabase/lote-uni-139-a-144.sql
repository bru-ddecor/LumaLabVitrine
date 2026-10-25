insert into public.catalogo_favoritos(produto) values
('jesus_referencia_de_amor'),
('aquieta_minhalma_ministerio_zoe'),
('jesus_o_mesmo_ontem_hoje_e_sempre'),
('fogo_em_seus_olhos'),
('7mz_vermelho_e_branco'),
('te_falta_odio_naruto')
on conflict do nothing;
