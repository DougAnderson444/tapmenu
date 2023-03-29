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

	let container: HTMLDivElement;

	function onChange(ex) {
		const encoded = ex?.length ? btoa(JSON.stringify(ex)) : '';
		updateAttributes({ draw: encoded });
	}

	onMount(function () {
		const base64 = node.attrs.draw;
		let str: string = base64 ? atob(base64) : null;

		const initialData = str ? { elements: JSON.parse(str) } : {};
		const reactProps = { onChange, initialData };

		const root = createRoot(container);
		root.render(React.createElement(Excalidraw, reactProps));
	});
</script>

<NodeViewWrapper class={'svelte-component ' + selected} style={null}>
	<span class="label">Excalidraw Component</span>

	<div bind:this={container} style="width: 500px; height: 600px;" />
</NodeViewWrapper>
