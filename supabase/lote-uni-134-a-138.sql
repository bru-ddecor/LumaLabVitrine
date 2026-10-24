insert into public.catalogo_favoritos(produto) values
('marin_kitagawa_sorriso_em_rosa'),
('olhares_em_rosa_garota_e_gatinho'),
('ghost_vermelho_sombrio'),
('voce_nao_e_seu_passado'),
('ide_por_todo_mundo')
on conflict do nothing;
