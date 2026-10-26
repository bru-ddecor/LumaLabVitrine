insert into public.catalogo_favoritos(produto) values
('ace_entre_chamas'),
('luffy_sob_o_chapeu_de_palha'),
('sem_paciencia_garoto_anime'),
('obito_sharingan_e_rinnegan'),
('luffy_sorriso_de_wano')
on conflict do nothing;
