<script>
	import Jogador from "./Jogador.svelte";
	// Importando dependência externa Howler, para permitir som no navegador
	import { Howl } from "howler";

	// Criando um objeto de som com o arquivo baixado
	const golSound = new Howl({
		src: ["sound/acabou-acabou-e-tetra-e-teeetraaa.mp3"]
	});

	function marcaGol(){
		console.log("Marcou 1 Gol!")

		golSound.play();
	}
</script>

<main>
	<h1>Exibindo informação quando marca Gol!</h1>
	<Jogador gol = {marcaGol} />
</main>