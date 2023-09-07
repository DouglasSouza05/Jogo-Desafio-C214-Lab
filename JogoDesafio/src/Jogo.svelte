<script>
	import Jogador from "./Jogador.svelte";

	function marcaGol(){
		console.log("Marcou 1 Gol!")
	}
</script>

<main>
	<h1>Exibindo informação quando marca Gol!</h1>
	<Jogador gol = {marcaGol} />
</main>