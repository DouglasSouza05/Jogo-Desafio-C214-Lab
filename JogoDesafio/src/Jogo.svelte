<script>
	import Jogador from "./Jogador.svelte";
	// Importando dependência externa Howler, para permitir som no navegador
	import { Howl, Howler } from "howler";

	const form = document.getElementById("form");
	// form.addEventListener("submit", function (event) {
	// 	event.preventDefault();
	// });

	function marcaGol() {
		console.log("Marcou 1 Gol!");
	}

	function handleGol(event) {
		// Impede o comportamento padrão do formulário
		event.preventDefault();

		const sound = new Howl({
			src: ["sounds/tetra.mp3"],
		});

		marcaGol();
		sound.play();
		console.log("Playing tetra.mp3");

		document.getElementById("infos").classList.remove("hidden");
	}
</script>

<main>
	<Jogador gol={handleGol} />
</main>
