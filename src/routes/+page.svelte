<script>
	import { onMount } from 'svelte';
	import { TapMenu } from '$lib';
	import demo from './_demo.html?raw';

	const LOCAL_STORAGE_KEY = 'content';
	let content = '';
	let handleContentUpdate = (e) => (content = e.detail);

	onMount(() => {
		handleContentUpdate = (e) => {
			// update content display, AND
			content = e.detail;
			//save to localstorage
			localStorage.setItem(LOCAL_STORAGE_KEY, e.detail);
		};

		// load if localStorage "content"
		const maybeContent = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (maybeContent) {
			content = maybeContent;
			console.log('Context set to ', { content });
		}
	});
</script>

<div class="p-8">
	<div class="border rounded p-2 my-6">
		<h1>TapMenu + Svelte + Tailwind</h1>
		<div class="bg-neutral-200 p-2">
			{#if content}
				<TapMenu on:update={handleContentUpdate} {content} />
			{:else}
				<TapMenu on:update={handleContentUpdate}>
					{@html demo}
					<!-- <p>Hello World! 🌍️</p>
				<p>
					<span class="bg-yellow-300"> Highlight/Select</span> to bring up bubble menu.
				</p>-->
				</TapMenu>
			{/if}
		</div>
	</div>

	<div class="border rounded p-2">
		<h1>Your content:</h1>
		<pre class="whitespace-pre-wrap">{content}</pre>
	</div>
</div>

<style lang="postcss">
	/* Line Wrap the pre tag elements  */
	pre {
		white-space: pre-wrap; /* Since CSS 2.1 */
		white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
		white-space: -pre-wrap; /* Opera 4-6 */
		white-space: -o-pre-wrap; /* Opera 7 */
		word-wrap: break-word; /* Internet Explorer 5.5+ */
	}
</style>
