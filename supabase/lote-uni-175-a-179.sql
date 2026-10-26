insert into public.catalogo_favoritos(produto) values
('olhar_em_verde'),
('reflexo_cromado'),
('entre_chamas_e_sombras'),
('ghostface_pausa_para_um_drink'),
('olhar_digital_coracao_violeta')
on conflict do nothing;
