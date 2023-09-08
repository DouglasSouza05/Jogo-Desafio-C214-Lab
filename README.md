# Jogo-Desafio-C214-Lab

Desafio do Jogo mostrado na aula Lab de C214, implementando novas funcionalidades.

# JogoDesafio

Este é um projeto simples desenvolvido usando o framework Svelte. Ele consiste em um mini jogo de futebol em que se marca Gols e reproduz áudios usando a biblioteca Howler.

## Arquivos Principais

### `Jogo.svelte`

`Jogo.svelte` é o componente principal do jogo. Ele controla a lógica do jogo, incluindo a contagem de gols e a reprodução de áudios. Aqui estão os principais pontos do código:

- Importação do componente `Jogador.svelte`.
- Importação da biblioteca Howler para lidar com áudios.
- Variáveis para controlar a contagem de gols e informações de descrição.
- A função `marcaGol()` incrementa o número de gols.
- A função `handleGol(event)` é chamada quando um gol é marcado.
- Ela cria instâncias de áudio usando a Howler e controla a reprodução com base na contagem de gols.
- Exibição da contagem de gols e informações de descrição na interface do usuário.

### `Jogador.svelte`

`Jogador.svelte` é um componente que renderiza a interface do usuário do jogo. Ele inclui um formulário onde o jogador pode inserir seu nome e marcar gols.

### HTML (index.html)

O arquivo HTML principal da aplicação inclui as seguintes partes:

- Importação de estilos globais e de construção.
- Link para a biblioteca de ícones Font Awesome.
- Carregamento do script JavaScript gerado pelo Svelte.
- Estrutura da página, incluindo uma imagem de gol.

### CSS (global.css)

O arquivo CSS define a aparência geral da aplicação. Ele inclui estilos para o layout, cores, formulário e botões.

## Executando o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1. Clone este repositório para o seu ambiente de desenvolvimento:

```bash
git clone https://github.com/DouglasSouza05/Jogo-Desafio-C214-Lab.git
```

2. Navegue até a pasta raiz do projeto:

```bash
cd JogoDesafio
```

3. Instale as dependências do projeto usando o npm:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento para executar o projeto:

```bash
npm run dev
```

## Recursos Principais

- Reprodução de áudios usando a biblioteca Howler.
