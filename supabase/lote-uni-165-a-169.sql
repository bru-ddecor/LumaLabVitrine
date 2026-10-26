insert into public.catalogo_favoritos(produto) values
('garou_sorriso_do_cacador'),
('presas_de_brilho'),
('guts_olhar_nas_sombras'),
('sasuke_sharingan_nas_sombras'),
('olhar_estelar')
on conflict do nothing;
