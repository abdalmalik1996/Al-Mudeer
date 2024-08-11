export function iconHandler(icon) {
  const url = `@/assets/icon/${icon}.svg`;
  return new URL(url, import.meta.url).href;
}
