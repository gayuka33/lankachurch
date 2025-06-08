// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview AI-powered Bible verse search.
 *
 * Allows users to search for specific verses by title, chapter, and verse in Sinhala, Tamil, or English.
 *
 * - bibleVerseSearch - A function that handles the bible verse search process.
 * - BibleVerseSearchInput - The input type for the bibleVerseSearch function.
 * - BibleVerseSearchOutput - The return type for the bibleVerseSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BibleVerseSearchInputSchema = z.object({
  title: z.string().describe('The title of the Bible verse or passage.'),
  chapter: z.string().describe('The chapter of the Bible verse.'),
  verse: z.string().describe('The verse number to search for.'),
  language: z
    .enum(['Sinhala', 'Tamil', 'English'])
    .describe('The language to search in.'),
});
export type BibleVerseSearchInput = z.infer<typeof BibleVerseSearchInputSchema>;

const BibleVerseSearchOutputSchema = z.object({
  verseText: z
    .string()
    .describe('The text of the Bible verse found based on the search criteria.'),
  translation: z
    .string()
    .describe('The Bible translation used for the verse (e.g., NIV, KJV).'),
});
export type BibleVerseSearchOutput = z.infer<typeof BibleVerseSearchOutputSchema>;

export async function bibleVerseSearch(input: BibleVerseSearchInput): Promise<BibleVerseSearchOutput> {
  return bibleVerseSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'bibleVerseSearchPrompt',
  input: {schema: BibleVerseSearchInputSchema},
  output: {schema: BibleVerseSearchOutputSchema},
  prompt: `You are a knowledgeable assistant that helps users find specific Bible verses.
  Based on the user's request, you will search for the verse and provide the verse text and translation used.

  User's Request:
  Language: {{{language}}}
  Title: {{{title}}}
  Chapter: {{{chapter}}}
  Verse: {{{verse}}}

  Provide the verse text and the translation used in the output.`,
});

const bibleVerseSearchFlow = ai.defineFlow(
  {
    name: 'bibleVerseSearchFlow',
    inputSchema: BibleVerseSearchInputSchema,
    outputSchema: BibleVerseSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
