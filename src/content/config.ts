import { defineCollection, z } from "astro:content";

const books = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum([
        "romans",
        "romantasy",
        "fantastyka",
        "erotyka",
        "sf",
        "poradniki",
        "kryminał",
        "sensacja",
        "thriller",
        "poezja",
        "dziecięca",
        "inne",
      ]),
      // Obrazek jest opcjonalny - jeśli go nie ma, Zod zwróci undefined
      cover: image().optional(),
      publishDate: z.date(),
      // isNew: z.boolean().default(false),
      buyUrl: z.string().url().optional(), // Może jeszcze nie być w sprzedaży
      author: z.string().default("Grzegorz Kossowski"),
      publisher: z.string().optional(),
      isbn: z.string().optional(), // ISBN może być pusty
      pages: z.number().optional(),
      format: z.string().default("Ebook (EPUB, MOBI)"),
      language: z.string().default("polski"),
      price: z.number().optional(),
    }),
});

export const collections = { books };
