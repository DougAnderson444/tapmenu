<script>
	// @ts-nocheck
	import LinkIcon from './icons/LinkIcon.svelte';
	import ImageIcon from './icons/ImageIcon.svelte';
	import TextSize from './icons/TextSize.svelte';
	import EnterUrl from './URLInput.svelte';
	import { uploadImage } from '$lib/utils';

	export let editor;

	editor.on('transaction', ({ editor, transaction }) => (editLink = false));

	let editLink = false;

	const setLink = (e) => {
		const url = e.detail;

		// empty
		if (url === '') {
			editor.chain().focus().extendMarkRange('link').unsetLink().run();

			return;
		}

		// update link
		editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
		editLink = false;
	};

	const toggleBold = () => editor.chain().focus().toggleBold().run();

	async function insertImage() {
		const url = await uploadImage();

		if (url) {
			editor.chain().focus().setImage({ src: url }).run();
		}
	}

	const toggleTextSize = () => editor.chain().focus().toggleHeading({ level: 1 }).run();
	const setColor = (event) => editor.chain().focus().setColor(event.target.value).run();
</script>

{#if !editLink}
	<div class="bg-neutral-800 text-white rounded-md shadow-md px-4 py-2">
		<button
			class="text-xl"
			on:click={toggleTextSize}
			class:active={editor.isActive('heading', { level: 1 })}
		>
			<TextSize />
		</button>
		<button on:click={toggleBold} class="text-lg font-semibold p-2 leading-tight">B</button>
		<button on:click={(e) => (editLink = !editLink)} class="p-2">
			<LinkIcon />
		</button>
		<button on:click={insertImage} class="p-2">
			<ImageIcon />
		</button>
		<input
			type="color"
			class="w-7"
			on:input={setColor}
			value={editor.getAttributes('textStyle').color}
		/>
	</div>
{/if}

{#if editLink && editor}
	<EnterUrl previousUrl={editor.getAttributes('link').href} on:value={setLink} />
{/if}

<style lang="postcss">
	button.active {
		@apply bg-white text-black rounded;
	}
	button {
		@apply p-2;
	}
</style>
