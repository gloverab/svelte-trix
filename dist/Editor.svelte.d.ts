import 'trix/dist/trix.css';
import type { ITrixConfig } from './types.js';
interface IProps {
    value?: string;
    editor?: any;
    config?: ITrixConfig;
    onChange?: (value: string) => void;
    onFileAccept?: (event: Event) => void;
    onAttachmentAdd?: (event: Event) => void;
    onAttachmentRemove?: (event: Event) => void;
    onSelectionChange?: (event: Event) => void;
    onFocus?: (event: Event) => void;
    onBlur?: (event: Event) => void;
    onPaste?: (event: Event) => void;
    onActionInvoke?: (event: Event) => void;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    hideAttachmentButton?: boolean;
    wrapperId?: string;
    hiddenInputId?: string;
    editorId?: string;
}
declare const Editor: import("svelte").Component<IProps, {}, "value" | "editor">;
type Editor = ReturnType<typeof Editor>;
export default Editor;
