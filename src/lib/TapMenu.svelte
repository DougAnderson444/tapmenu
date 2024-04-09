<script>
	// @ts-nocheck

	import { onMount, createEventDispatcher } from 'svelte';
	import Menu from './BubbleMenu.svelte';
	import SlashCommand from './commands/slash';

	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import BubbleMenu from '@tiptap/extension-bubble-menu';
	import Link from '@tiptap/extension-link';
	import Image from '@tiptap/extension-image';
	import TextStyle from '@tiptap/extension-text-style';
	import Color from '@tiptap/extension-color';
	import Document from '@tiptap/extension-document';
	import Paragraph from '@tiptap/extension-paragraph';
	import TaskItem from '@tiptap/extension-task-item';
	import TaskList from '@tiptap/extension-task-list';
	import Text from '@tiptap/extension-text';

	export let content;

	let editor;
	let element;
	let menu;

	const dispatch = createEventDispatcher();

	onMount(async () => {
		editor = new Editor({
			element: element,
			editorProps: {
				attributes: {
					class: 'focus:outline-none'
				}
			},
			extensions: [
				TaskList,
				TaskItem.configure({
					nested: true
				}),
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
				TextStyle,
				SlashCommand
				// Already covered by StarterKit:
				// Document.extend({
				// 	content: 'taskList'
				// }),
				// Paragraph,
				// Text,
				// TaskItem.extend({
				// 	content: 'inline*'
				// }),
			],
			content,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			}
		});

		editor.on('update', ({ editor }) => {
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
<span contenteditable="true" bind:innerHTML={content} style="visibility: hidden; display: none;">
	<slot>
		<!-- Default slot value -->
		<p>Select to Edit</p>
	</slot>
</span>

<style lang="postcss">
	button {
		@apply mx-1 rounded;
	}
	a {
		@apply cursor-pointer;
	}
</style>
