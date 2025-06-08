import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { PrayerRequestForm } from '@/components/forms/prayer-request-form';

export default function PrayerRequestPage() {
  return (
    <>
      <PageHeader 
        title="Prayer Requests"
        description="We believe in the power of prayer. Let us stand with you in your time of need. Share your requests with our compassionate prayer team."
      />
      <SectionContainer>
        <PrayerRequestForm />
      </SectionContainer>
      <SectionContainer wrapperClassName="bg-secondary/30">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-4">Our Commitment to Prayer</h2>
            <p className="text-muted-foreground leading-relaxed">
                "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." - Philippians 4:6-7
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
                Your requests are treated with confidentiality and respect. Our prayer warriors intercede on behalf of those who ask, believing that God hears and answers prayer according to His will.
            </p>
        </div>
      </SectionContainer>
    </>
  );
}
