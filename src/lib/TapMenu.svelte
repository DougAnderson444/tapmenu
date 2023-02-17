<script>
	// @ts-nocheck

	import { onMount, createEventDispatcher } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import BubbleMenu from '@tiptap/extension-bubble-menu';
	import Link from '@tiptap/extension-link';
	import Menu from './BubbleMenu.svelte';
	import Image from '@tiptap/extension-image';
	import TextStyle from '@tiptap/extension-text-style';
	import Color from '@tiptap/extension-color';

	export let content = '';

	let editor;
	let element;
	let menu;

	const dispatch = createEventDispatcher();

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				BubbleMenu.configure({
					element: menu
				}),
				Link.configure({
					autolink: true,
					protocols: ['http', 'https', 'mailto']
				}),
				Image.configure({
					allowBase64: true
					// inline: true
				}),
				Color.configure({
					types: ['textStyle']
				}),
				StarterKit,
				TextStyle
			],
			content,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			}
		});

		editor.on('update', ({ editor }) => {
			// The content has changed.
			dispatch('update', editor?.getHTML() || content);
		});

		dispatch('editor', editor);
		dispatch('update', editor?.getHTML() || content);

		return () => {
			if (editor) editor.destroy();
		};
	});
</script>

<div bind:this={element} class="outline-none" />
<div bind:this={menu}>
	{#if editor}
		<Menu {editor} />
	{/if}
</div>

<!-- Get slot contents: Add a hidden span or div to bind the slot text: -->
<span contenteditable="true" bind:innerHTML={content} style="visibility: hidden;">
	<slot>
		<!-- Default slot value -->
		<p>Select to Edit</p>
	</slot>
</span>

<style lang="postcss">
	button {
		@apply mx-1 rounded;
	}
</style>
