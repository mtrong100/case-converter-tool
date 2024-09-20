export const toLowerCase = (text: string): string => {
  return text.trim().toLowerCase();
};

export const toSentenceCase = (text: string): string => {
  const trimmedText = text.trim();
  return (
    trimmedText.charAt(0).toUpperCase() + trimmedText.slice(1).toLowerCase()
  );
};

export const toUpperCase = (text: string): string => {
  return text.trim().toUpperCase();
};

export const toCapitalizeWords = (text: string): string => {
  return text
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const toHashtag = (text: string): string => {
  return text
    .trim()
    .toLowerCase()
    .split(" ")
    .filter(Boolean) // Remove any extra spaces
    .map((word) => `#${word}`)
    .join(" ");
};
