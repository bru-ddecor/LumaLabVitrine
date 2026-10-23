insert into public.catalogo_favoritos(produto)
values ('seu_pet_sempre_por_perto')
on conflict do nothing;
