import { Extension } from '@tiptap/core';
import Suggestion from '@tiptap/suggestion';
import suggestion from './suggestion';
import { insertMenuLRUCache } from '$lib/commands/commands';

export const Commands = Extension.create({
	name: 'commands',

	addOptions() {
		return {
			suggestion: {
				char: '/',
				command: ({ editor, range, props }) => {
					props.command({ editor, range });
					insertMenuLRUCache.put(props.title);
				}
			}
		};
	},

	addProseMirrorPlugins() {
		return [
			Suggestion({
				editor: this.editor,
				...this.options.suggestion
			})
		];
	}
});

export default Commands.configure({
	suggestion
});
