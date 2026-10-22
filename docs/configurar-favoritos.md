# Curtidas públicas sem login

A integração está preparada, mas só será ativada quando o Supabase estiver conectado. Sem as variáveis, a vitrine funciona normalmente e os corações ficam ocultos.

## Conectar

1. Entre em https://supabase.com/dashboard e crie um projeto. Guarde a senha do banco com você.
2. Abra **SQL Editor**, crie uma consulta, cole o conteúdo de `supabase/favoritos.sql` e clique em **Run**.
3. Na janela **Connect** ou nas configurações de API do projeto, copie a **Project URL** e a chave pública **publishable** (a chave `anon` antiga também funciona). Nunca use `service_role` nem chave secreta no front-end.
4. Na Vercel, abra o projeto → **Settings → Environment Variables** e adicione:
   - `VITE_SUPABASE_URL`: URL do projeto.
   - `VITE_SUPABASE_PUBLISHABLE_KEY`: chave pública.
5. Faça um novo deploy na Vercel para aplicar as variáveis. Para desenvolvimento local, coloque essas mesmas variáveis em `.env.local` e reinicie o Vite. Arquivos `.env` são ignorados pelo Git.

## Funcionamento

Cada navegador guarda um identificador aleatório, sem cadastro ou login. A combinação produto + navegador é única no banco. Clicar novamente retira a curtida. O mesmo produto em Destaques e na categoria compartilha o coração e a contagem; tamanhos compartilham a mesma curtida. Outros visitantes recebem as contagens ao abrir, voltar à janela ou após até 30 segundos. A cesta continua independente.

As tabelas não ficam acessíveis diretamente pela API pública. As funções expõem somente totais e o estado do navegador enviado, sem listar identificadores dos visitantes. As gravações aceitam somente produtos cadastrados. Este limite por navegador não impede alguém de limpar os dados, usar outro navegador ou fabricar identificadores; não é uma proteção contra fraude determinada.

Ao cadastrar novos produtos, adicione os IDs em `public.catalogo_favoritos` pelo SQL Editor, sem alterar os anteriores. Exemplo: `insert into public.catalogo_favoritos(produto) values ('novo_id') on conflict do nothing;`.

## Conferir após conectar

- Curta um produto e confirme o aumento de uma unidade; descurta e confira a redução.
- Atualize a página: a curtida deve continuar marcada.
- Abra outro navegador: o total é compartilhado, mas o coração começa desmarcado.
- Confira o mesmo produto em Destaques e na categoria.
- Confirme que a cesta e o envio ao WhatsApp continuam funcionando.

A conexão real precisa ser verificada depois que o projeto e as variáveis estiverem disponíveis.
