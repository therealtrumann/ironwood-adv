# ironwood-adv

Reconstrução pixel-fidelity, em HTML5/CSS3/JS puro, do advertorial de referência
(`aurivita_co_pages_adv4.pdf`), adaptado com a paleta bordô/dourado da marca IronWood.

## Como executar

Não há build nem dependências. Basta servir a pasta como arquivos estáticos:

```bash
cd ironwood-adv
python3 -m http.server 8000
```

Depois abra `http://localhost:8000/index.html` no navegador. Também funciona
abrindo `index.html` diretamente no navegador (`file://`).

## Estrutura

```
index.html       — marcação semântica com a copy exata do advertorial
styles.css       — paleta, tipografia, layout e responsividade
script.js        — define OFFER_URL e aplica a todos os links/botões de oferta
assets/          — reservado para os arquivos de mídia finais
screenshots/     — capturas de validação (ver abaixo)
reference/       — páginas do PDF renderizadas em PNG usadas para a análise visual
```

## Placeholders de mídia

Todos os espaços de imagem estão vazios (`div` com `data-image-slot`, `aria-label`
e comentário HTML indicando o conteúdo final esperado). Nenhuma imagem da
referência, do produto ou de banco de imagens foi inserida. São 10 slots:
`author-avatar`, `hero-product-photo`, `black-garlic-question-photo`,
`investigation-photo`, `circulation-mechanism-diagram`,
`endothelial-comparison-photo`, `viagra-comparison-photo`,
`professional-assessment-photo`, `testimonial-media` (retângulo preto sólido) e
`product-banner`.

## Link de oferta

Todos os botões/links de oferta usam a constante `OFFER_URL` em `script.js`
(atualmente `"#"`). Basta trocar esse valor para apontar para o checkout real.

## Validação visual

Screenshots gerados via Playwright (Chromium) em 1440×1200, 1024×1200, 768×1200
e 390×844, comparados manualmente contra as páginas do PDF renderizadas em
`reference/page-*.png`. Sem overflow horizontal, sem erros de console, único
`<h1>` por página, paleta derivada do bordô/dourado do IronWood (sem vermelho
sólido do PDF original).
