import { Node, mergeAttributes } from '@tiptap/core';
import { SvelteNodeViewRenderer } from 'svelte-tiptap';

import CounterComponent from './Component.svelte';

export const excalidrawTag = 'svelte-excalidraw-component';

export const Excalidraw = Node.create({
	name: 'svelteExcalidrawComponent',
	group: 'block',
	atom: true,
	draggable: true, // Optional: to make the node draggable
	inline: false,

	addAttributes() {
		return {
			draw: {
				default: ''
			}
		};
	},

	parseHTML() {
		return [{ tag: excalidrawTag }];
	},

	renderHTML({ HTMLAttributes }) {
		return [excalidrawTag, mergeAttributes(HTMLAttributes)];
	},

	addNodeView() {
		return SvelteNodeViewRenderer(CounterComponent);
	}
});
