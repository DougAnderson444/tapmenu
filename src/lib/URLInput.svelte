<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let previousUrl = 'https://';
	let value = previousUrl;
	const clicked = (e) => dispatch('value', value);
</script>

<div class="bg-neutral-800 text-white rounded-md shadow-md px-4 py-2">
	<form class="flex">
		<input type="text" bind:value class="rounded p-1 text-black" autofocus /><button
			on:click={clicked}
			class="m-1">Go</button
		>
	</form>
</div>

<style lang="postcss">
</style>
