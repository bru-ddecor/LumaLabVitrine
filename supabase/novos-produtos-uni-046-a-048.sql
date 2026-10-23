insert into public.catalogo_favoritos(produto)
values
('sorriso_sombrio'),
('grito_das_teias'),
('abraco_eterno')
on conflict do nothing;
