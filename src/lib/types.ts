export interface ITrixConfig {
    attachments?: Attachments;
    blockAttributes?: BlockAttributes;
    browser?: Browser;
    css?: Css;
    dompurify?: Dompurify;
    fileSize?: FileSize;
    input?: Input;
    keyNames?: KeyNames;
    lang?: Lang;
    parser?: Parser;
    textAttributes?: TextAttributes;
    toolbar?: Toolbar;
    undo?: Undo;
}

interface Undo {
    interval?: number;
}

interface Toolbar {
    getDefaultHTML?: () => any
}

interface TextAttributes {
    bold?: Bold;
    italic?: Bold;
    href?: Href;
    strike?: Bold;
    frozen?: Frozen;
}

interface Frozen {
    style?: Style;
}

interface Style {
    backgroundColor?: string;
}

interface Href {
    groupTagName?: string;
}

interface Bold {
    tagName?: string;
    inheritable?: boolean;
}

interface Parser {
    removeBlankTableCells?: boolean;
    tableCellSeparator?: string;
    tableRowSeparator?: string;
}

interface Lang {
    attachFiles?: string;
    bold?: string;
    bullets?: string;
    byte?: string;
    bytes?: string;
    captionPlaceholder?: string;
    code?: string;
    heading1?: string;
    indent?: string;
    italic?: string;
    link?: string;
    numbers?: string;
    outdent?: string;
    quote?: string;
    redo?: string;
    remove?: string;
    strike?: string;
    undo?: string;
    unlink?: string;
    url?: string;
    urlPlaceholder?: string;
    GB?: string;
    KB?: string;
    MB?: string;
    PB?: string;
    TB?: string;
}

interface KeyNames {
    '8'?: string;
    '9'?: string;
    '13'?: string;
    '27'?: string;
    '37'?: string;
    '39'?: string;
    '46'?: string;
    '68'?: string;
    '72'?: string;
    '79'?: string;
}

interface Input {
    level2Enabled?: boolean;
}

interface FileSize {
    prefix?: string;
    precision?: number;
    formatter?: (t3: string) => string
}

interface Dompurify {
    ADD_ATTR?: string[];
    SAFE_FOR_XML?: boolean;
    RETURN_DOM?: boolean;
}

interface Css {
    attachment?: string;
    attachmentCaption?: string;
    attachmentCaptionEditor?: string;
    attachmentMetadata?: string;
    attachmentMetadataContainer?: string;
    attachmentName?: string;
    attachmentProgress?: string;
    attachmentSize?: string;
    attachmentToolbar?: string;
    attachmentGallery?: string;
}

interface Browser {
    composesExistingText?: boolean;
    recentAndroid?: boolean;
    samsungAndroid?: boolean;
    forcesObjectResizing?: boolean;
    supportsInputEvents?: boolean;
}

interface BlockAttributes {
    default?: Default;
    quote?: Quote;
    heading1?: Heading1;
    code?: Code;
    bulletList?: Default;
    bullet?: Bullet;
    numberList?: Default;
    number?: Bullet;
    attachmentGallery?: AttachmentGallery;
}

interface AttachmentGallery {
    tagName?: string;
    exclusive?: boolean;
    terminal?: boolean;
    parse?: boolean;
    group?: boolean;
}

interface Bullet {
    tagName?: string;
    listAttribute?: string;
    group?: boolean;
    nestable?: boolean;
}

interface Code {
    tagName?: string;
    terminal?: boolean;
    htmlAttributes?: string[];
    text?: Text;
}

interface Text {
    plaintext?: boolean;
}

interface Heading1 {
    tagName?: string;
    terminal?: boolean;
    breakOnReturn?: boolean;
    group?: boolean;
}

interface Quote {
    tagName?: string;
    nestable?: boolean;
}

interface Default {
    tagName?: string;
    parse?: boolean;
}

interface Attachments {
    preview?: Preview;
    file?: File;
}

interface File {
    caption?: Caption2;
}

interface Caption2 {
    size?: boolean;
}

interface Preview {
    presentation?: string;
    caption?: Caption;
}

interface Caption {
    name?: boolean;
    size?: boolean;
}