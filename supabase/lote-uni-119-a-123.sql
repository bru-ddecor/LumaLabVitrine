insert into public.catalogo_favoritos(produto) values
('macaquinho_piscadinha'),
('mago_sem_paciencia_com_dinheiro'),
('olhar_de_desconfianca'),
('hacker_de_brinquedo'),
('im_gay_for_pretty_girls')
on conflict do nothing;
