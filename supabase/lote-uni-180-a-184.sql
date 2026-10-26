insert into public.catalogo_favoritos(produto) values
('olhar_violeta_flor_e_lagrima'),
('brasil_retrato_dourado'),
('toyota_supra_entre_cerejeiras'),
('orgulho_pan_rosa_amarelo_azul'),
('orgulho_pan_beijinho_em_cores')
on conflict do nothing;
