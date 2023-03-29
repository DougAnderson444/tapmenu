<script lang="ts">
	import { onMount } from 'svelte';
	import React from 'react';
	import { createRoot } from 'react-dom/client';

	import { NodeViewWrapper } from 'svelte-tiptap';
	import { Excalidraw } from '@excalidraw/excalidraw';
	import type { NodeViewProps } from '@tiptap/core';

	export let node: NodeViewProps['node'];
	export let updateAttributes: NodeViewProps['updateAttributes'];
	export let selected: NodeViewProps['selected'] = false;

	const e = React.createElement;
	let container: HTMLDivElement;

	onMount(function () {
		const root = createRoot(container);
		root.render(e(Excalidraw));
	});

	const handleClick = () => {
		updateAttributes({ count: node.attrs.count + 1 });
	};
</script>

<NodeViewWrapper class={'svelte-component ' + selected}>
	<span class="label">Excalidraw Component</span>

	<div bind:this={container} style:width="500px" style:height="500px" />
</NodeViewWrapper>
