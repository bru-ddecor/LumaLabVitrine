insert into public.catalogo_favoritos(produto)
values ('sem_sinal')
on conflict do nothing;
