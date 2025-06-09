
'use server';

/**
 * @fileOverview AI chatbot that simulates conversations with Jesus in Sinhala, Tamil, or English,
 * with optional file (image) upload.
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
  fileDataUri: z.string().optional().describe("Optional file data URI (Base64 encoded). Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  fileName: z.string().optional().describe("Optional name of the uploaded file."),
  fileMimeType: z.string().optional().describe("Optional MIME type of the uploaded file."),
  isImage: z.boolean().optional().describe("Internal flag indicating if the file is an image, set by the calling function.")
});
export type JesusChatbotInput = z.infer<typeof JesusChatbotInputSchema>;

const JesusChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user message.'),
});
export type JesusChatbotOutput = z.infer<typeof JesusChatbotOutputSchema>;

export async function jesusChatbot(input: Omit<JesusChatbotInput, 'isImage'>): Promise<JesusChatbotOutput> {
  const isImage = !!input.fileDataUri && !!input.fileMimeType && input.fileMimeType.startsWith('image/');
  return jesusChatbotFlow({...input, isImage });
}

const prompt = ai.definePrompt({
  name: 'jesusChatbotPrompt',
  input: {schema: JesusChatbotInputSchema},
  output: {schema: JesusChatbotOutputSchema},
  prompt: `You are simulating a conversation with Jesus Christ. Respond in a way that is consistent with the teachings and character of Jesus as portrayed in the Bible. Use the {{{language}}} language.

User: {{{message}}}
{{#if fileDataUri}}
(The user has also uploaded a file named "{{#if fileName}}{{fileName}}{{else}}attached file{{/if}}" of type "{{#if fileMimeType}}{{fileMimeType}}{{else}}unknown type{{/if}}".)
  {{#if isImage}}
    Image context: {{media url=fileDataUri}}
  {{else}}
    (The file is not an image, but its presence and metadata are noted.)
  {{/if}}
{{/if}}

Jesus: `,
});

const jesusChatbotFlow = ai.defineFlow(
  {
    name: 'jesusChatbotFlow',
    inputSchema: JesusChatbotInputSchema,
    outputSchema: JesusChatbotOutputSchema,
  },
  async (inputWithIsImage) => {
    const {output} = await prompt(inputWithIsImage);
    return output!;
  }
);
