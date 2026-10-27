insert into public.catalogo_favoritos(produto) values
('paz_e_orgulho_arco_iris'),
('amor_e_amor_coracao_arco_iris'),
('feliz_dia_do_orgulho'),
('born_this_way_cores_do_orgulho'),
('amor_e_amor_maos_em_coracao')
on conflict do nothing;
