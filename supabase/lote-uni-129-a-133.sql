insert into public.catalogo_favoritos(produto) values
('jujutsu_kaisen_turma_chibi'),
('tokyo_olhares_e_dragao'),
('anya_e_bond_spy_family'),
('ghostface_ligacao_de_arrepiar'),
('baddie_rosa_e_atitude')
on conflict do nothing;
