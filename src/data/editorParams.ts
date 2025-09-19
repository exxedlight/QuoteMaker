export interface EditorParams {
    author: string;
    workName: string;
    quote: string;

    backgroundPreview: string | null;
    additionalImgPreview: string | null;

    additionalImgTransparency: number;
    additionalImgSizeW: number | null;
    additionalImgSizeH: number | null;
    additionalImgOffsetX: number;
    additionalImgOffsetY: number;

    authorOffsetX: number | null;
    authorOffsetY: number | null;
    authorFontSize: number | null;

    workNameOffsetX: number | null;
    workNameOffsetY: number | null;
    workNameFontSize: number | null;

    quoteOffsetX: number | null;
    quoteOffsetY: number | null;
    quoteFontSize: number | null;
}