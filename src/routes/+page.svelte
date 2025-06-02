<script lang="ts">
	import Editor from '$lib/Editor.svelte';

	let value = $state('');
</script>

<div style="width: 800px;">
	<Editor bind:value />
</div>
