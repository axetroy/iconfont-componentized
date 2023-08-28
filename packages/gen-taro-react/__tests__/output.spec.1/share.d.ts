declare function svgToBase64(svgString: string): string;
declare function generateSvgJSX(node: unknown, indent: number, props: Array<unknown>): string;

export { generateSvgJSX, svgToBase64 };
