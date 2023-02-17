/** @typedef {typeof __propDef.props}  TiptapProps */
/** @typedef {typeof __propDef.events}  TiptapEvents */
/** @typedef {typeof __propDef.slots}  TiptapSlots */
export default class Tiptap extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    update: CustomEvent<any>;
    editor: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TiptapProps = typeof __propDef.props;
export type TiptapEvents = typeof __propDef.events;
export type TiptapSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        update: CustomEvent<any>;
        editor: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
