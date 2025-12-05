<script lang="ts">
	import Editor from '$lib/Editor.svelte';
</script>

<h1>Multiple Trix Editors Test</h1>

<div class="editors-container">
	<div class="editor-wrapper">
		<h2>Editor 1 (Default IDs)</h2>
		<Editor 
			value="This is the content of the first editor."
			label="Editor 1"
		/>
	</div>

	<div class="editor-wrapper">
		<h2>Editor 2 (Custom IDs)</h2>
		<Editor 
			value="This is the content of the second editor."
			label="Editor 2"
			wrapperId="custom-editor-wrapper-2"
			hiddenInputId="custom-hidden-input-2"
			editorId="custom-editor-2"
		/>
	</div>

	<div class="editor-wrapper">
		<h2>Editor 3 (Custom IDs)</h2>
		<Editor 
			value="This is the content of the third editor."
			label="Editor 3"
			wrapperId="custom-editor-wrapper-3"
			hiddenInputId="custom-hidden-input-3"
			editorId="custom-editor-3"
		/>
	</div>
</div>

<style>
	.editors-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.editor-wrapper {
		border: 1px solid #ccc;
		padding: 1rem;
		border-radius: 4px;
	}

	h1 {
		margin-bottom: 2rem;
	}

	h2 {
		margin-top: 0;
		margin-bottom: 1rem;
	}
</style>