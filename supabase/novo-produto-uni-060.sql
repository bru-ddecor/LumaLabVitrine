insert into public.catalogo_favoritos(produto)
values ('all_things_new')
on conflict do nothing;
