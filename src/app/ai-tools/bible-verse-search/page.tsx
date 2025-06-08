import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { BibleVerseSearchClient } from '@/components/ai/bible-verse-search-client';

export default function BibleVerseSearchPage() {
  return (
    <>
      {/* The PageHeader is now inside the client component for better context during interaction */}
      <SectionContainer>
        <BibleVerseSearchClient />
      </SectionContainer>
      <SectionContainer wrapperClassName="bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-4">How to Use</h2>
            <p className="text-muted-foreground leading-relaxed">
                Enter the name of the Bible book (e.g., "John", "Genesis", "Romans"), the chapter number, and the verse number you wish to find. Select your preferred language for the verse text.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
                Our AI will search for the verse and display it for you. This tool is intended to help you quickly access scripture for study and reflection.
            </p>
        </div>
      </SectionContainer>
    </>
  );
}
