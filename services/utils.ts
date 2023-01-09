export function extractStyles(
  strings: TemplateStringsArray,
  ...exprResults: (string | boolean | undefined)[]
) {
  const rawStyles = strings
    .flatMap((x) => x.split('\n'))
    .flatMap((x) => x.split(' '))
    .map((x) => x.trim())
    .filter(Boolean);
  const result = new Set([...exprResults, ...rawStyles]);

  return Array.from(result).filter(Boolean).join(' ');
}
