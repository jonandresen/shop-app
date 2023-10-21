export function PrettifyForList(word: string): string {
  if (word.length === 0) return word;
  const loweredWord = word.toLowerCase();
  if (loweredWord.length === 1) return loweredWord.toLocaleUpperCase();
  return loweredWord[0].toLocaleUpperCase() + loweredWord.substring(1);
}
