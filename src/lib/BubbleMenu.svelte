<script>
	// @ts-nocheck
	import LinkIcon from './icons/LinkIcon.svelte';
	import ImageIcon from './icons/ImageIcon.svelte';
	import TextSize from './icons/TextSize.svelte';

	export let editor;

	const setLink = (e) => {
		const previousUrl = editor.getAttributes('link').href;
		const url = window.prompt('URL', previousUrl);

		// cancelled
		if (url === null) {
			return;
		}

		// empty
		if (url === '') {
			editor.chain().focus().extendMarkRange('link').unsetLink().run();

			return;
		}

		// update link
		editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
	};

	const addImage = () => {
		openChooseImageDialog();
		// const url = window.prompt('URL');

		// if (url) {
		// 	editor.chain().focus().setImage({ src: url }).run();
		// }
	};
	const toggleBold = () => editor.chain().focus().toggleBold().run();

	function openChooseImageDialog() {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'image/*';
		input.onchange = (event) => {
			uploadImage(event);
		};
		input.click();
	}
	async function uploadImage(event) {
		const file = event.target.files[0];
		const base64 = await convertBase64(file);
		insertImage(base64);
	}

	function convertBase64(file) {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	}
	function insertImage(url) {
		if (url) {
			editor.chain().focus().setImage({ src: url }).run();
		}
	}
	const toggleTextSize = () => editor.chain().focus().toggleHeading({ level: 1 }).run();
	const setColor = (event) => editor.chain().focus().setColor(event.target.value).run();
</script>

<div class="bg-neutral-800 text-white rounded-md shadow-md px-4 py-2">
	<button
		class="text-xl"
		on:click={toggleTextSize}
		class:active={editor.isActive('heading', { level: 1 })}
	>
		<TextSize />
	</button>
	<button on:click={toggleBold} class="text-lg font-semibold p-2 leading-tight">B</button>
	<button on:click={setLink} class="p-2">
		<LinkIcon />
	</button>
	<button on:click={addImage} class="p-2">
		<ImageIcon />
	</button>
	<input
		type="color"
		class="w-7"
		on:input={setColor}
		value={editor.getAttributes('textStyle').color}
	/>
</div>

<style lang="postcss">
	button.active {
		@apply bg-white text-black rounded;
	}
	button {
		@apply p-2;
	}
</style>
