insert into public.catalogo_favoritos(produto) values
('sem_sinal'),
('programmer'),
('esqueleto_em_chamas'),
('what_a_time_to_be_alive'),
('despertai_efesios_5_14')
on conflict do nothing;
