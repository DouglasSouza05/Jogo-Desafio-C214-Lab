<script>
  import { select_option } from "svelte/internal";
	import Jogador from "./Jogador.svelte";
	// Importando dependência externa Howler, para permitir som no navegador
	import { Howl, Howler } from "howler";

	let golScore = 0;
	let description = "";
	let playingSound = null;


	const form = document.getElementById("form");
	// form.addEventListener("submit", function (event) {
	// 	event.preventDefault();
	// });

	function marcaGol() {
		golScore += 1;
		console.log(`Marcou ${golScore} Gols!`);
	}

	function handleGol(event) {
		// Impede o comportamento padrão do formulário
		event.preventDefault();

		const sound = new Howl({
			src: ["sounds/tetra.mp3"],
		});

		const soundBesta = new Howl({
			src: ["sounds/besta.mp3"],
		});
	

		marcaGol();
		// Howler.stop();
		// sound.play();
		
		if (playingSound === null) {
			sound.play();
			playingSound = sound;
			console.log("Playing tetra.mp3");
		} else if (playingSound != null && golScore < 10) {
			Howler.stop();
			sound.play();
			playingSound = sound;
			console.log("Playing tetra.mp3");
		} else if (playingSound != null && golScore >= 10) {
			Howler.stop();
			soundBesta.play();
			playingSound = soundBesta;
			console.log("Playing besta.mp3");
		} else {
			Howler.stop();
			playingSound = null;
			console.log("Playing é NADA");
		}

		const gols = document.getElementById("gols");
		const name = document.getElementById("name").value.toUpperCase();
		description = `O GRANDIOSÍSSIMO, TALENTOSO, ATACANTE NATO ${name} FEZ ${golScore} GOL(S).`;

		gols.textContent = golScore;
		document.getElementById("description").textContent = description;

		document.getElementById("infos").classList.remove("hidden");
	}
</script>

<main>
	<Jogador gol={handleGol} />
</main>
