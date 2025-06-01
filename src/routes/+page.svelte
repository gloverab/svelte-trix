<script lang="ts">
	import Editor from '$lib/Editor.svelte';
	import type { ITrixConfig } from '$lib/types.js';

	let value = $state('');
	let Trix = $state();

	let isDisabled = $state(false);

	const toggleDisable = () => {
		isDisabled = !isDisabled;
	};
</script>

<Editor disabled={isDisabled} bind:value bind:Trix />

<button onclick={toggleDisable}>{isDisabled ? 'Undisable' : 'disable'}</button>
<p>
	Create your package using @sveltejs/package and preview/showcase your work
	with SvelteKit
</p>
<h1>Welcome to your library project</h1>
<p>
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
	documentation
</p>
