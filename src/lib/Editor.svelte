<script lang="ts">
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';
	import 'trix/dist/trix.css';
	import type { ITrixConfig } from './types.js';

	interface IProps {
		value: string;
		onChange?: (value: string) => void;
		config?: ITrixConfig;
		disabled?: boolean;
		required?: boolean;
	}

	let {
		value = $bindable(),
		onChange = undefined,
		disabled = false,
		required = false,
		config
	}: IProps = $props();

	let Trix: any;
	let loaded = $state(false);
	let editor;
	let el = $state();

	const setAttachments = () => {
		if (config?.attachments?.preview?.presentation !== undefined)
			Trix.config.attachments.preview.presentation =
				config?.attachments?.preview?.presentation;
		if (config?.attachments?.preview?.caption?.name !== undefined)
			Trix.config.attachments.preview.name =
				config?.attachments?.preview?.caption?.name;
		if (config?.attachments?.preview?.caption?.size !== undefined)
			Trix.config.attachments.preview.caption.size =
				config?.attachments?.preview?.caption?.size;
		if (config?.attachments?.file !== undefined)
			Trix.config.attachments.file = config?.attachments?.file;
	};

	const setBlockAttributes = () => {
		// default
		if (config?.blockAttributes?.default?.tagName !== undefined)
			Trix.config.blockAttributes.default.tagName =
				config?.blockAttributes?.default?.tagName;
		if (config?.blockAttributes?.default?.parse !== undefined)
			Trix.config.blockAttributes.default.parse =
				config?.blockAttributes?.default?.parse;
		// quote
		if (config?.blockAttributes?.quote?.tagName !== undefined)
			Trix.config.blockAttributes.quote.tagName =
				config?.blockAttributes?.quote?.tagName;
		if (config?.blockAttributes?.quote?.nestable !== undefined)
			Trix.config.blockAttributes.quote.nestable =
				config?.blockAttributes?.quote?.nestable;
		// heading1
		if (config?.blockAttributes?.heading1?.tagName !== undefined)
			Trix.config.blockAttributes.heading1.tagName =
				config?.blockAttributes?.heading1?.tagName;
		if (config?.blockAttributes?.heading1?.terminal !== undefined)
			Trix.config.blockAttributes.heading1.terminal =
				config?.blockAttributes?.heading1?.terminal;
		if (config?.blockAttributes?.heading1?.breakOnReturn !== undefined)
			Trix.config.blockAttributes.heading1.breakOnReturn =
				config?.blockAttributes?.heading1?.breakOnReturn;
		if (config?.blockAttributes?.heading1?.group !== undefined)
			Trix.config.blockAttributes.heading1.group =
				config?.blockAttributes?.heading1?.group;
		// code
		if (config?.blockAttributes?.code?.tagName !== undefined)
			Trix.config.blockAttributes.code.tagName =
				config?.blockAttributes?.code?.tagName;
		if (config?.blockAttributes?.code?.terminal !== undefined)
			Trix.config.blockAttributes.code.terminal =
				config?.blockAttributes?.code?.terminal;
		if (config?.blockAttributes?.code?.htmlAttributes !== undefined)
			Trix.config.blockAttributes.code.htmlAttributes =
				config?.blockAttributes?.code?.htmlAttributes;
		if (config?.blockAttributes?.code?.text !== undefined)
			Trix.config.blockAttributes.code.text =
				config?.blockAttributes?.code?.text;
		// bulletList
		if (config?.blockAttributes?.bulletList?.tagName !== undefined)
			Trix.config.blockAttributes.bulletList.tagName =
				config?.blockAttributes?.bulletList?.tagName;
		if (config?.blockAttributes?.bulletList?.parse !== undefined)
			Trix.config.blockAttributes.bulletList.parse =
				config?.blockAttributes?.bulletList?.parse;
		// bullet
		if (config?.blockAttributes?.bullet?.tagName !== undefined)
			Trix.config.blockAttributes.bullet.tagName =
				config?.blockAttributes?.bullet?.tagName;
		if (config?.blockAttributes?.bullet?.listAttribute !== undefined)
			Trix.config.blockAttributes.bullet.listAttribute =
				config?.blockAttributes?.bullet?.listAttribute;
		if (config?.blockAttributes?.bullet?.group !== undefined)
			Trix.config.blockAttributes.bullet.group =
				config?.blockAttributes?.bullet?.group;
		if (config?.blockAttributes?.bullet?.nestable !== undefined)
			Trix.config.blockAttributes.bullet.nestable =
				config?.blockAttributes?.bullet?.nestable;
		// numberList
		if (config?.blockAttributes?.numberList?.tagName !== undefined)
			Trix.config.blockAttributes.numberList.tagName =
				config?.blockAttributes?.numberList?.tagName;
		if (config?.blockAttributes?.numberList?.parse !== undefined)
			Trix.config.blockAttributes.numberList.parse =
				config?.blockAttributes?.numberList?.parse;
		// number
		if (config?.blockAttributes?.number?.tagName !== undefined)
			Trix.config.blockAttributes.number.tagName =
				config?.blockAttributes?.number?.tagName;
		if (config?.blockAttributes?.number?.listAttribute !== undefined)
			Trix.config.blockAttributes.number.listAttribute =
				config?.blockAttributes?.number?.listAttribute;
		if (config?.blockAttributes?.number?.group !== undefined)
			Trix.config.blockAttributes.number.group =
				config?.blockAttributes?.number?.group;
		if (config?.blockAttributes?.number?.nestable !== undefined)
			Trix.config.blockAttributes.number.nestable =
				config?.blockAttributes?.number?.nestable;
		// attachmentGallery
		if (config?.blockAttributes?.attachmentGallery?.tagName !== undefined)
			Trix.config.blockAttributes.attachmentGallery.tagName =
				config?.blockAttributes?.attachmentGallery?.tagName;
		if (config?.blockAttributes?.attachmentGallery?.exclusive !== undefined)
			Trix.config.blockAttributes.attachmentGallery.exclusive =
				config?.blockAttributes?.attachmentGallery?.exclusive;
		if (config?.blockAttributes?.attachmentGallery?.terminal !== undefined)
			Trix.config.blockAttributes.attachmentGallery.terminal =
				config?.blockAttributes?.attachmentGallery?.terminal;
		if (config?.blockAttributes?.attachmentGallery?.parse !== undefined)
			Trix.config.blockAttributes.attachmentGallery.parse =
				config?.blockAttributes?.attachmentGallery?.parse;
		if (config?.blockAttributes?.attachmentGallery?.group !== undefined)
			Trix.config.blockAttributes.attachmentGallery.group =
				config?.blockAttributes?.attachmentGallery?.group;
	};

	const setCss = () => {
		if (config?.css) {
			Trix.config.css = {
				...Trix.config.css,
				...config.css
			};
		}
	};

	const setBrowser = () => {
		if (config?.browser) {
			Trix.config.browser = {
				...Trix.config.browser,
				...config.browser
			};
		}
	};

	const setDompurify = () => {
		if (config?.dompurify) {
			Trix.config.dompurify = {
				...Trix.config.dompurify,
				...config.dompurify
			};
		}
	};

	const setFileSize = () => {
		if (config?.fileSize) {
			Trix.config.fileSize = {
				...Trix.config.fileSize,
				...config.fileSize
			};
		}
	};

	const setInput = () => {
		if (config?.input) {
			Trix.config.input = {
				...Trix.config.input,
				...config.input
			};
		}
	};

	const setKeyNames = () => {
		if (config?.keyNames) {
			Trix.config.keyNames = {
				...Trix.config.keyNames,
				...config.keyNames
			};
		}
	};

	const setLang = () => {
		if (config?.lang) {
			Trix.config.lang = {
				...Trix.config.lang,
				...config.lang
			};
		}
	};

	const setParser = () => {
		if (config?.parser) {
			Trix.config.parser = {
				...Trix.config.parser,
				...config.parser
			};
		}
	};

	const setTextAttributes = () => {
		// bold
		if (config?.textAttributes?.bold?.tagName !== undefined)
			Trix.config.textAttributes.bold.tagName =
				config?.textAttributes?.bold?.tagName;
		if (config?.textAttributes?.bold?.inheritable !== undefined)
			Trix.config.textAttributes.bold.inheritable =
				config?.textAttributes?.bold?.inheritable;
		// italic
		if (config?.textAttributes?.italic?.tagName !== undefined)
			Trix.config.textAttributes.italic.tagName =
				config?.textAttributes?.italic?.tagName;
		if (config?.textAttributes?.italic?.inheritable !== undefined)
			Trix.config.textAttributes.italic.inheritable =
				config?.textAttributes?.italic?.inheritable;
		// strike
		if (config?.textAttributes?.strike?.tagName !== undefined)
			Trix.config.textAttributes.strike.tagName =
				config?.textAttributes?.strike?.tagName;
		if (config?.textAttributes?.strike?.inheritable !== undefined)
			Trix.config.textAttributes.strike.inheritable =
				config?.textAttributes?.strike?.inheritable;
		// href
		if (config?.textAttributes?.href?.groupTagName !== undefined)
			Trix.config.textAttributes.href.groupTagName =
				config?.textAttributes?.href?.groupTagName;
		// href
		if (config?.textAttributes?.frozen?.style?.backgroundColor !== undefined)
			Trix.config.textAttributes.frozen.style.backgroundColor =
				config?.textAttributes?.frozen?.style.backgroundColor;
	};

	const setToolbar = () => {
		if (config?.toolbar) {
			Trix.config.toolbar = {
				...Trix.config.toolbar,
				...config.toolbar
			};
		}
	};

	const setUndo = () => {
		if (config?.undo) {
			Trix.config.undo = {
				...Trix.config.undo,
				...config.undo
			};
		}
	};

	const beforeInitialize = () => {
		setAttachments();
		setBlockAttributes();
		setCss();
		setBrowser();
		setDompurify();
		setFileSize();
		setInput();
		setKeyNames();
		setLang();
		setParser();
		setTextAttributes();
		setToolbar();
		setUndo();
	};

	const _onChange = (e: any) => {
		value = e?.target?.value;
		if (onChange) {
			onChange(e?.target?.value);
		}
	};

	const initialize = () => {
		document.addEventListener('trix-before-initialize', beforeInitialize);

		document.addEventListener('trix-change', _onChange);
		loaded = true;

		setTimeout(() => {
			editor = document.querySelector('trix-editor');
			// console.log(editor);
		}, 900);
	};

	$inspect(el);

	onMount(async () => {
		Trix = (await import('trix')).default;
		initialize();
	});
</script>

{#if BROWSER && loaded}
	<main>
		<input id="svelte-trix-input" type="hidden" name="content" />
		<trix-editor bind:this={el} {disabled} {required} input="svelte-trix-input"
		></trix-editor>
	</main>
{/if}
