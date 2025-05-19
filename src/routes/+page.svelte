<script lang="ts">
	import Editor from '$lib/Editor.svelte';
	import type { ITrixConfig } from '$lib/types.js';

	let value = $state('');

	$inspect(value);

	const config: ITrixConfig = {
		attachments: {
			preview: {
				presentation: 'hello'
			}
		},
		blockAttributes: {
			attachmentGallery: {
				tagName: 'h3'
			}
		},
		css: {
			attachment: 'hello5!'
		}
	};
</script>

<Editor {config} bind:value />
<p>
	Create your package using @sveltejs/package and preview/showcase your work
	with SvelteKit
</p>
<h1>Welcome to your library project</h1>
<p>
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
	documentation
</p>
