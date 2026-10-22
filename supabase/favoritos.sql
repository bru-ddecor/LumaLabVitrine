-- Execute no SQL Editor de um projeto Supabase. Pode ser executado novamente.
create table if not exists public.catalogo_favoritos (
  produto text primary key
);
create table if not exists public.favoritos_produtos (
  produto text not null references public.catalogo_favoritos(produto),
  navegador uuid not null,
  criado_em timestamptz not null default now(),
  primary key (produto, navegador)
);
alter table public.catalogo_favoritos enable row level security;
alter table public.favoritos_produtos enable row level security;
revoke all on public.catalogo_favoritos from anon, authenticated;
revoke all on public.favoritos_produtos from anon, authenticated;

create or replace function public.consultar_favoritos(navegador uuid)
returns table(produto text, total bigint, curtido boolean)
language sql security definer set search_path = '' as $$
  select c.produto, count(f.navegador),
    coalesce(bool_or(f.navegador = $1), false)
  from public.catalogo_favoritos c
  left join public.favoritos_produtos f on f.produto = c.produto
  group by c.produto;
$$;

create or replace function public.definir_favorito(navegador uuid, produto_escolhido text, curtir boolean)
returns table(produto text, total bigint, curtido boolean)
language plpgsql security definer set search_path = '' as $$
begin
  if $1 is null or $3 is null or not exists (
    select 1 from public.catalogo_favoritos c where c.produto = $2
  ) then
    raise exception 'Produto ou navegador inválido';
  end if;
  if $3 then
    insert into public.favoritos_produtos(produto, navegador)
    values ($2, $1) on conflict on constraint favoritos_produtos_pkey do nothing;
  else
    delete from public.favoritos_produtos f
    where f.produto = $2 and f.navegador = $1;
  end if;
  return query select c.produto, c.total, c.curtido
    from public.consultar_favoritos($1) c where c.produto = $2;
end;
$$;
revoke all on function public.consultar_favoritos(uuid) from public;
revoke all on function public.definir_favorito(uuid, text, boolean) from public;
grant execute on function public.consultar_favoritos(uuid) to anon, authenticated;
grant execute on function public.definir_favorito(uuid, text, boolean) to anon, authenticated;

-- Identificadores permanentes do catálogo atual.
insert into public.catalogo_favoritos(produto) values
('kit_blackpink'),
('kit_blue'),
('kit_coquette'),
('kit_dark'),
('kit_deathnote'),
('kit_girly'),
('kit_artecollection1'),
('kit_artecollection2'),
('kit_artecollection3'),
('kit_brownaesthetic'),
('kit_darkpink'),
('kit_lightpurple'),
('kit_magicpurple'),
('cansada_de_ser_adulta'),
('zoro_one_piece'),
('gojo_jujutsu_kaisen'),
('itachi_olhar_do_corvo'),
('doflamingo_sorriso_do_caos'),
('luffy_espirito_livre'),
('snoopy_eu_posso'),
('erika_pra_presidente'),
('itachi_poder_do_susanoo'),
('naruto_legado_dos_mestres'),
('ace_chama_livre'),
('gatinho_nuvem_de_amor'),
('bruxa_nada_conveniente'),
('doflamingo_rei_de_dressrosa'),
('ryuk_sombra_lunar'),
('sorriso_nas_sombras'),
('entre_luz_e_sombra'),
('naruto_caminho_ninja'),
('trio_do_lamen'),
('morticia_gomez_amor_sombrio'),
('naruto_setimo_hokage'),
('poe_beleza_rara'),
('kakashi_ninja_copiador'),
('gumball_darwin'),
('marceline_jujuba_doce_sintonia'),
('mutano_ravena_sintonia_tita'),
('amigos_de_ooo'),
('hello_kitty_treino_fofo'),
('meninas_superpoderosas'),
('gatinha_comunista'),
('ultimo_ato_de_amor'),
('nao_aguento_segunda_feira'),
('damon_elena_ultimo_folego'),
('lembranca_aniversario'),
('personalizado_musical')
on conflict do nothing;
