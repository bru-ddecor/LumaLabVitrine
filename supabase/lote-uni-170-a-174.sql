insert into public.catalogo_favoritos(produto) values
('videogame_retro_mais_uma_fase'),
('vamo_um_dia_de_cada_vez'),
('cubo_magico_entre_formulas'),
('gatinho_jardim_sombrio'),
('menina_entre_monstros_e_sombras')
on conflict do nothing;
