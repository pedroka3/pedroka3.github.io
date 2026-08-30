# Portfólio pessoal

Site de portfólio de página única, responsivo, com animações e seletor de tema.
Feito com **HTML, CSS e JavaScript puros** — sem build, sem instalar nada.

## Como abrir

Dê **duplo clique em `index.html`**. É só isso.

## Estrutura

```
Portifólio/
├── index.html          # estrutura da página
├── css/
│   ├── base.css        # reset, cores (tokens), paletas, tipografia, botões
│   ├── components.css  # cabeçalho, hero, timeline, cards, painel de tema, rodapé
│   └── animations.css  # animações e reveal ao rolar a página
├── js/
│   ├── data.js         # ◀ TODO O CONTEÚDO DO SITE FICA AQUI
│   ├── theme.js        # troca de cor e modo claro/escuro
│   └── main.js         # renderização, navegação e efeitos
└── assets/             # imagens, ícone e currículo
```

## Como editar o conteúdo

Abra **`js/data.js`** em qualquer editor de texto. Todo o texto do site está lá,
com marcações `[EDITAR]` nos pontos que você deve trocar:

| O que trocar | Onde |
|---|---|
| Nome, bio, cargo, números do topo | `profile` |
| Empresas, cargos e períodos | `experience` |
| Faculdade e cursos técnicos | `education` |
| Certificações | `certifications` (preencha `url` com o link da credencial e o card vira clicável) |
| Projetos, links e tecnologias | `projects` |
| Skills por categoria | `skills` |
| E-mail, telefone e redes sociais | `contact` |

Salve o arquivo e recarregue a página no navegador (F5).

Alguns textos ficam direto no `index.html` porque são fixos: o `<title>`,
as descrições de SEO/Open Graph e os títulos das seções.

### Trocar a foto de perfil

O avatar padrão é um desenho que acompanha o tema e a cor escolhida. Para usar
sua foto, coloque o arquivo em `assets/` (ex.: `assets/foto.jpg`) e, no
`index.html`, troque **todo o bloco `<svg class="avatar__img" …>` … `</svg>`**
por uma única linha:

```html
<img class="avatar__img" src="assets/foto.jpg" alt="Foto de Seu Nome">
```

A moldura arredondada e o recorte da imagem continuam funcionando.

### Adicionar o currículo

Coloque o PDF em `assets/curriculo.pdf`. O link já existe em `data.js`, na lista
`contact.links`. Se não for usar, remova aquela entrada da lista.

## Personalização visual

O visitante escolhe a cor e o modo pelo botão redondo no canto inferior direito.
A escolha fica salva no navegador dele (`localStorage`).

### Mudar a cor padrão do site

Em `js/theme.js`, altere `DEFAULT_ACCENT` para `'violet'`, `'mint'`, `'coral'`,
`'sky'`, `'amber'` ou `'lime'`.

### Criar uma paleta nova

1. Em `css/base.css`, copie um bloco de paleta e troque o nome e os valores:

```css
:root[data-accent="rosa"] { --a-400: #f9a8d4; --a-500: #ec4899; --a-600: #be185d; --a-rgb: 236 72 153; }
```

- `--a-400` é a versão clara (usada no modo escuro);
- `--a-600` é a versão escura (usada no modo claro);
- `--a-rgb` é o `--a-500` em componentes RGB separados por espaço — serve para
  gerar os brilhos e fundos transparentes.

2. Em `js/theme.js`, adicione a paleta na lista `PALETTES`:

```js
{ id: 'rosa', label: 'Rosa', color: '#ec4899' },
```

Se adicionar mais de 6 cores, ajuste `grid-template-columns: repeat(6, 1fr)` na
regra `.swatches` em `css/components.css`.

### Ajustar cores neutras (fundo, texto, bordas)

Estão nos blocos `:root[data-theme="light"]` e `:root[data-theme="dark"]` de
`css/base.css`. Nenhum componente usa cor fixa: tudo sai dessas variáveis.

## Como publicar

**GitHub Pages** — crie um repositório, envie os arquivos e ative
*Settings → Pages → Deploy from a branch → main / (root)*.

**Netlify ou Vercel** — arraste a pasta inteira na área de deploy do site.
Não há passo de build.

Qualquer hospedagem que sirva arquivos estáticos funciona.

## Detalhes técnicos

- **Zero dependências de JavaScript.** A única requisição externa são as fontes
  do Google Fonts. Para deixar o site 100% offline, remova as três tags `<link>`
  de fontes no `<head>` do `index.html` — as fontes do sistema assumem no lugar.
- **Acessibilidade:** navegação completa por teclado, `skip link`, marcação
  semântica, foco visível e `aria-current` no item ativo do menu.
- **Movimento reduzido:** quem ativa "reduzir movimento" no sistema operacional
  recebe a página sem animações.
- **Sem flash de tema:** um script curto no `<head>` aplica o tema salvo antes do
  primeiro desenho da página.
