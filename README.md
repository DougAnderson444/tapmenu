# TapMenu - Tailwind Styled TipTap Menu

Uses [Tiptap](https://tiptap.dev/), [Tailwindcss](https://tailwindcss.com/docs/guides/sveltekit) with [Iconify](https://www.npmjs.com/package/iconify-icon) to make a contet menu.

- [x] [Menu](https://tiptap.dev/)
- [x] [Icons](https://www.npmjs.com/package/iconify-icon)

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

<TapMenu>
	<p>Hello Entry World! 🌍️</p>
</TapMenu>
```

### Vanilla JS

```js
import TapMenu from '@douganderson444/tapmenu/esm/TapMenu.svelte.js';

new TapMenu({
	target: document.getElementById('target'),
	props: {
		content: '<p>Hello World 🌍️<p>'
	}
});
```

and

```html
<div id="target"><div></div></div>
```
