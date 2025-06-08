'use server';

/**
 * @fileOverview AI chatbot that simulates conversations with Jesus in Sinhala, Tamil, or English.
 *
 * - jesusChatbot - A function that handles the chatbot interactions.
 * - JesusChatbotInput - The input type for the jesusChatbot function.
 * - JesusChatbotOutput - The return type for the jesusChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JesusChatbotInputSchema = z.object({
  language: z.enum(['Sinhala', 'Tamil', 'English']).describe('The language to use for the conversation.'),
  message: z.string().describe('The user message to send to the chatbot.'),
});
export type JesusChatbotInput = z.infer<typeof JesusChatbotInputSchema>;

const JesusChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user message.'),
});
export type JesusChatbotOutput = z.infer<typeof JesusChatbotOutputSchema>;

export async function jesusChatbot(input: JesusChatbotInput): Promise<JesusChatbotOutput> {
  return jesusChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'jesusChatbotPrompt',
  input: {schema: JesusChatbotInputSchema},
  output: {schema: JesusChatbotOutputSchema},
  prompt: `You are simulating a conversation with Jesus Christ. Respond in a way that is consistent with the teachings and character of Jesus as portrayed in the Bible. Use the {{{language}}} language.

User: {{{message}}}

Jesus: `,
});

const jesusChatbotFlow = ai.defineFlow(
  {
    name: 'jesusChatbotFlow',
    inputSchema: JesusChatbotInputSchema,
    outputSchema: JesusChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
