<script>
	import { TapMenu } from '$lib';
	let content = '';
</script>

<div class="p-8">
	<div class="border rounded p-2 my-6">
		<h1>TapMenu - Svelte/Tailwind Context Menu</h1>
		<div class="bg-neutral-200 p-2">
			<TapMenu on:update={(e) => (content = e.detail)}>
				<p>Hello World! 🌍️</p>
				<p>
					<span class="bg-yellow-300"> Highlight/Select</span> to bring up bubble menu.
				</p>
			</TapMenu>
		</div>
	</div>

	<div class="border rounded p-2">
		<h1>Your content:</h1>
		<pre class="whitespace-pre-wrap">{content}</pre>
	</div>
</div>

<style lang="postcss">
	pre {
		white-space: pre-wrap; /* Since CSS 2.1 */
		white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
		white-space: -pre-wrap; /* Opera 4-6 */
		white-space: -o-pre-wrap; /* Opera 7 */
		word-wrap: break-word; /* Internet Explorer 5.5+ */
	}
</style>
