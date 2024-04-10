<script lang="ts">
	export let items: any[];
	export let command: Function;

	let selectedIndex = -1;
	let buttons = [];
	$: if ((buttons?.length || selectedIndex > 0) && buttons[selectedIndex])
		buttons[selectedIndex].focus();

	function onKeyDown(event: KeyboardEvent) {
		if (event.key === 'ArrowUp') {
			event.preventDefault();
			upHandler();
			return true;
		}

		if (event.key === 'ArrowDown') {
			event.preventDefault();
			downHandler();
			return true;
		}

		if (event.key === 'Enter') {
			event.preventDefault();
			enterHandler();
			return true;
		}

		if (event.key === 'Escape') buttons[selectedIndex].blur();

		return false;
	}

	function upHandler() {
		console.log('UP: ', selectedIndex, (selectedIndex + items.length - 1) % items.length);
		selectedIndex = (selectedIndex + items.length - 1) % items.length;
	}

	function downHandler() {
		selectedIndex = (selectedIndex + 1) % items.length;
	}

	function enterHandler() {
		selectItem(selectedIndex);
	}

	async function selectItem(index) {
		const item = items[index];
		console.log('Entering item', item, command);
		if (item) {
			await command(item);
		}
	}
</script>

<svelte:window on:keydown={onKeyDown} />

<div class="p-1 relative rounded-lg bg-white text-black overflow-hidden text-sm shadow">
	{#if items.length}
		{#each items as item, index (index)}
			<button
				bind:this={buttons[index]}
				class="block m-0 w-full text-left bg-transparent rounded-md border border-transparent px-1 py-3"
				on:click={(e) => selectItem(index)}>{item.title}</button
			>
		{/each}
	{:else}
		No Result
	{/if}
</div>

<style lang="postcss"></style>
