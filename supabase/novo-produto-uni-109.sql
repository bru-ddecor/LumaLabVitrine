insert into public.catalogo_favoritos(produto)
values ('o_que_voce_esta_esperando')
on conflict do nothing;
