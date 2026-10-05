# Ctrl+Alt+Vagas
Projeto web para ajudar candidatos a encontrar vagas de tecnologia com base no perfil e nas habilidades informadas no formulário.

## Sobre o projeto
A aplicação coleta dados do candidato, como área de interesse, experiência e competências, e compara essas informações com as vagas disponíveis em um arquivo JSON. A partir dessa análise, as oportunidades são classificadas por nível de compatibilidade e exibidas em cards na página.

## Funcionalidades
- Formulário de cadastro do candidato
- Seleção de habilidades por checkbox
- Comparação entre perfil e requisitos das vagas
- Classificação por compatibilidade: alta, média e baixa
- Recomendações de estudo para vagas com menor afinidade
- Armazenamento do perfil no localStorage
- Layout responsivo para desktop e mobile
- Seção “Sobre” no rodapé e navegação pelos links do menu

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript
- JSON para dados das vagas

## Estrutura do projeto
- `index.html` — estrutura principal da página
- `assets/styles/index.styles.css` — estilos do layout e responsividade
- `assets/scripts/main.js` — fluxo principal do formulário e renderização
- `assets/scripts/ui.js` — renderização dos cards de vagas e estado inicial
- `assets/scripts/dados.js` — leitura do JSON e persistência no localStorage
- `assets/data/vagas.json` — banco de dados das vagas

## Como executar localmente
Como o projeto é um site estático, a forma mais simples é abrir o arquivo HTML no navegador.

Ou pode servir localmente por meio de um servidor simples:

```bash
cd /Users/priscilabeatriz/Desktop/projeto-skillmatch-web
python3 -m http.server 8000
```

Em seguida, abra no navegador:
```text
http://localhost:8000
```

## Observações
- O projeto foi pensado para rodar no navegador, sem framework ou build.
- A compatibilidade pode ser melhorada conforme a quantidade e qualidade dos dados das vagas e das habilidades do candidato.

## Autor
Priscila Beatriz
