<script>
    export let gol;
</script>

<div>
    <main id="main-container">
        <section id="soccer-game">
            <form on:submit={gol}>
                <h1>Svelte Soccer Minigame</h1>
                <div class="input-box">
                    <label for="name"> Digite seu nome </label>
                    <div id="input-field">
                        <i class="fa-solid fa-file-signature" />
                        <input
                            type="text"
                            id="name"
                            placeholder="Ex: Douglas"
                            required
                        />
                    </div>
                </div>
                <!-- <button on:click={gol}>Marcar Gol</button> -->
                <button type="submit">Marcar Gol</button>
            </form>

            <div id="infos" class="hidden">
                <h1>Exibindo informações dos seus Gols!</h1>
                <div id="result">
                    <div id="gol-scores">
                        <span>Seus Gols:</span>
                        <span id="gols" />
                    </div>
                </div>
                <div id="description">
                    <span />
                </div>
            </div>
        </section>
    </main>
</div>
