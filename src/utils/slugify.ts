// src/utils/slugify.ts
export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Rozbija znaki diakrytyczne (np. 'ą' na 'a' + ogonek)
    .replace(/[\u0300-\u036f]/g, '') // Usuwa ogonki
    .replace(/\s+/g, '-') // Spacje na myślniki
    .replace(/[^\w-]+/g, '') // Usuwa wszystko co nie jest literą, cyfrą lub myślnikiem
    .trim();
};