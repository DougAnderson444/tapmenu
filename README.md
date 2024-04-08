# TapMenu - Tailwind Styled TipTap Menu

Uses [Tiptap](https://tiptap.dev/), [Tailwindcss](https://tailwindcss.com/docs/guides/sveltekit) with [Iconify SVGs](https://iconify.design/) to make a contet menu.

- [x] [Menu](https://tiptap.dev/)
- [x] [Icons](https://www.npmjs.com/package/iconify-icon)
- [x] Slash Command for inserting while inline

![Demo](./images/readme.png)

## Demo

[View Demo](https://douganderson444.github.io/tapmenu/)

## Use

### Svelte

As shown in the `./src/routes/+page.svelte` demo code:

```svelte
<script>
	import { TapMenu } from '@douganderson444/tapmenu';
</script>

<TapMenu on:change={(e) => console.log('Content is now: ', e.detail)}>
	<p>Hello Entry World! 🌍️</p>
</TapMenu>
```

### Vanilla JS [Deprecated after v0.0.4]

Pass in the html `content` as a prop to enable the Menu to pop up when displaying it. Any changes will be propoated back on the `change` event for you to save/update, whatever

```js
import TapMenu from '@douganderson444/tapmenu/esm/TapMenu.svelte.js';

const contentedMenu = new TapMenu({
	target: document.getElementById('target'),
	props: {
		content: '<p>Hello World 🌍️<p>'
	}
});

contentedMenu.$on('change', (e) => {
	console.log('Content is now: ', e.detail);
});
```

and

```html
<div id="target"><div></div></div>
```
