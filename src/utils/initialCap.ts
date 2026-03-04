export const initialCap = (text: string) => {
  if (!text) return "";
  const str = text.toString();
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
