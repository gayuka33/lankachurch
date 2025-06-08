import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { JesusChatbotClient } from '@/components/ai/jesus-chatbot-client';

export default function JesusChatbotPage() {
  return (
    <>
      {/* The PageHeader is now inside the client component for better context during interaction */}
      <SectionContainer>
        <JesusChatbotClient />
      </SectionContainer>
      <SectionContainer wrapperClassName="bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-4">About this Tool</h2>
            <p className="text-muted-foreground leading-relaxed">
                This AI chatbot is designed to simulate conversations with Jesus, providing responses that align with His teachings and character as found in the Holy Bible. It aims to be a tool for reflection, encouragement, and exploring faith-based questions.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
                Please remember that this is an AI simulation and not a substitute for personal prayer, scripture study, or guidance from church leaders. Available in English, Sinhala, and Tamil.
            </p>
        </div>
      </SectionContainer>
    </>
  );
}
