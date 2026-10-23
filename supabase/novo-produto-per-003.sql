insert into public.catalogo_favoritos(produto)
values ('uma_turma_de_lembrancas')
on conflict do nothing;
