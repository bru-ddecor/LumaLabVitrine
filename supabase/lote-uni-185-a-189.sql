insert into public.catalogo_favoritos(produto) values
('estoica_o_estoiloca'),
('patrick_so_mais_um_capitulo'),
('solo_de_caveira'),
('habilidade_quebrar_codigos'),
('coracao_arco_iris')
on conflict do nothing;
