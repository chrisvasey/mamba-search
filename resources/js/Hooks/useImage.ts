export default function useImage(name: string): string {
  return new URL(`/resources/images/${name}`, import.meta.url).href ?? '';
}