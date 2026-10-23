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
('personalizado_musical'),
('kakashi_raio_entre_paginas'),
('gojo_sorriso_infinito'),
('gatinho_lingua_de_fora'),
('gatinho_olhar_de_veludo'),
('luffy_espirito_travesso'),
('lendas_em_batalha'),
('cavaleiro_juramento_rubro'),
('amar_nesta_economia'),
('semente_do_amor'),
('fala_comigo_nao_eu_namoro'),
('sanji_passo_em_chamas'),
('me_ame_anavitoria'),
('mikey_tons_de_calmaria'),
('em_algum_lugar_pra_relaxar'),
('sou_feliz_e_agradeco'),
('nerd_universo_particular'),
('cachorrinho_charme_de_bandana'),
('espelho_tudo_a_seu_favor'),
('sorriso_sombrio'),
('grito_das_teias'),
('abraco_eterno'),
('uma_turma_de_lembrancas'),
('colecao_sharingan'),
('mini_bottons_musicais'),
('seu_pet_sempre_por_perto'),
('sorriso_de_aco'),
('refugio_das_sombras'),
('coro_dos_esqueletos'),
('gato_terceiro_olhar'),
('voce_no_seu_anime'),
('made_to_worship'),
('jesus_salva'),
('i_just_need_god'),
('jesus_king'),
('fruit_of_the_spirit'),
('purify_my_heart_lord'),
('salmos_23_4_nao_temerei'),
('all_things_new'),
('decidiu_salvar_voce'),
('god_is_bigger_than_your_fear'),
('ate_que_o_senhor_venha'),
('cristo_e_suficiente'),
('o_senhor_e_meu_pastor'),
('tu_porem_permaneca_em_mim'),
('eren_tita_de_ataque'),
('portugal_camisa_7'),
('fight_like_a_girl'),
('bulking_bad'),
('hot_girls_love_muay_thai'),
('authentic_girls_club'),
('homem_vitruviano_anatomia_do_rock'),
('kit_rock_rubro'),
('mother_of_dragons')
on conflict do nothing;
