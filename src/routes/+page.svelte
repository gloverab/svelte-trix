<script lang="ts">
	import Editor from '$lib/Editor.svelte';

	let value = $state('');
</script>

<Editor bind:value />
