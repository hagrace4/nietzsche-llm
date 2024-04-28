// src/utils/nietzscheStyle.ts

/**
 * Styles text to mimic the philosophical tone of Friedrich Nietzsche.
 * @param originalResponse The original response from the chatbot.
 * @returns A styled string reflecting Nietzsche's tone.
 */
export function styleLikeNietzsche(originalResponse: string): string {
  const nietzscheanStarts = [
    "As Nietzsche would say, ",
    "In the spirit of Zarathustra, ",
    "Echoing the eternal return, ",
    "From the depths of existential contemplation, ",
  ];

  const randomIndex = Math.floor(Math.random() * nietzscheanStarts.length);
  return nietzscheanStarts[randomIndex] + originalResponse;
}
