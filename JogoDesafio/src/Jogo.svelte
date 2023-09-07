<script>
	import Jogador from "./Jogador.svelte";
	// Importando dependência externa Howler, para permitir som no navegador
	import { Howl, Howler } from "howler";

	function marcaGol() {
		console.log("Marcou 1 Gol!");
	}

	function handleGol() {
		const sound = new Howl({
			src: ["sounds/tetra.mp3"],
		});

		marcaGol();
		sound.play();
		console.log("Playing tetra.mp3");
	}
</script>

<main>
	<h1>Exibindo informação quando marca Gol!</h1>
	<Jogador gol={handleGol} />
</main>
