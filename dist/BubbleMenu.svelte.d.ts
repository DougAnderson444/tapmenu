/** @typedef {typeof __propDef.props}  BubbleMenuProps */
/** @typedef {typeof __propDef.events}  BubbleMenuEvents */
/** @typedef {typeof __propDef.slots}  BubbleMenuSlots */
export default class BubbleMenu extends SvelteComponentTyped<{
    editor: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BubbleMenuProps = typeof __propDef.props;
export type BubbleMenuEvents = typeof __propDef.events;
export type BubbleMenuSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        editor: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
