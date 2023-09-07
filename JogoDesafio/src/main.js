import Jogo from "./Jogo.svelte";

const jogo = new Jogo({
  target: document.body,
  props: {
    name: "world",
  },
});

export default jogo;
