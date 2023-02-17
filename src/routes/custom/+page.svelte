<script>
	import { onMount } from 'svelte';

	let target;
	onMount(async () => {
		const TapMenu = (await import('../../../dist/esm/TapMenu.svelte.js')).default;

		new TapMenu({
			target: document.body,
			props: {
				content: '<p>Hello <b>World</b><p>'
			}
		});
	});
</script>

<div id="target" />
