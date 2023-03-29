import { createKeysLocalStorageLRUCache } from './helpers/lru-cache';
import { uploadImage } from '$lib/utils';

export const insertMenuLRUCache = createKeysLocalStorageLRUCache({
	storageKey: 'TIPTAP_INSERT_MENU',
	capacity: 3
});

export const QUICK_INSERT_COMMANDS = [
	{
		title: 'H1',
		command: ({ editor, range }) => {
			editor.chain().focus().deleteRange(range).setNode('heading', { level: 1 }).run();
		}
	},
	{
		title: 'bold',
		command: ({ editor, range }) => {
			editor.chain().focus().deleteRange(range).setMark('bold').run();
		}
	},
	{
		title: 'italic',
		command: ({ editor, range }) => {
			editor.chain().focus().deleteRange(range).setMark('italic').run();
		}
	},
	{
		title: 'image',
		command: async ({ editor, range }) => {
			const url = await uploadImage();
			editor.chain().focus().setImage({ src: url }).run();
		}
	}
];

export const transformToCommands = (commands, data: string[]) => {
	return (data || [])
		.map((title) => commands.find((command) => command.title === title))
		.filter(Boolean);
};
