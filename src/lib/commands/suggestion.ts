import { SvelteRenderer } from 'svelte-tiptap';
import tippy from 'tippy.js';

import CommandsList from './CommandsList.svelte';
import { insertMenuLRUCache, QUICK_INSERT_COMMANDS, transformToCommands } from './commands';

// more ideas: https://github.com/fantasticit/think/blob/2455378daa30231322dc2e113df681433591e963/packages/client/src/tiptap/core/extensions/slash.ts#L71
export default {
	items: ({ query }) => {
		const recentUsed = insertMenuLRUCache.get() as string[];
		const restCommands = QUICK_INSERT_COMMANDS.filter(
			(command) => !recentUsed.includes(command.title)
		).slice(0, 10);
		console.log({ recentUsed }, { restCommands }, transformToCommands(recentUsed));

		return [...transformToCommands(QUICK_INSERT_COMMANDS, recentUsed), ...restCommands].filter(
			(command) => command.title.toLowerCase().startsWith(query.toLowerCase())
		);
	},

	render: () => {
		let component;
		let popup;

		return {
			onStart: (props) => {
				const { clientRect, command, decorationNode, editor, items } = props;

				const target = document.createElement('div');

				const svelteComponent: SvelteComponent = new CommandsList({
					target,
					props: { items, command }
				});

				component = new SvelteRenderer(svelteComponent, {
					element: target
				});

				if (!props.clientRect) {
					return;
				}

				popup = tippy('body', {
					getReferenceClientRect: props.clientRect,
					appendTo: () => document.body,
					content: component.dom,
					showOnCreate: true,
					interactive: true,
					trigger: 'manual',
					placement: 'bottom-start'
				});
			},

			onUpdate(props) {
				component.updateProps(props);

				if (!props.clientRect) {
					return;
				}

				popup[0].setProps({
					getReferenceClientRect: props.clientRect
				});
			},

			onKeyDown(props) {
				if (props.event.key === 'Escape') {
					popup[0].hide();

					return true;
				}

				return component.ref?.onKeyDown(props);
			},

			onExit() {
				popup[0].destroy();
				component.destroy();
			}
		};
	}
};
