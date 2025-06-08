import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Banknote, CreditCard, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function DonationPage() {
  return (
    <>
      <PageHeader 
        title="Support Our Ministry"
        description="Your generous contributions help us continue our work in spreading the Gospel, serving our community, and maintaining our church facilities. Thank you for your support."
      />

      <SectionContainer>
        <div className="text-center mb-12">
            <Gift className="h-20 w-20 text-accent mx-auto mb-6"/>
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">Partner With Us Through Giving</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every gift, no matter the size, makes a difference. Your support enables us to fund various ministries, outreach programs, and maintain a welcoming place of worship for all.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
                <Banknote className="h-10 w-10 text-accent"/>
                <CardTitle className="font-headline text-2xl text-primary">Bank Transfer / Direct Deposit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">You can make a direct deposit or bank transfer to our church account:</p>
              <ul className="space-y-2 text-sm text-foreground list-disc list-inside bg-secondary/30 p-4 rounded-md">
                <li><strong>Bank Name:</strong> Bank Name</li>
                <li><strong>Account Name:</strong> Praise Prayer Lanka Church</li>
                <li><strong>Account Number:</strong> 1234567890</li>
                <li><strong>Branch:</strong> Bank Branch</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">Please mention "Tithe" or "Offering" or specific ministry in the reference if possible.</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
                <CreditCard className="h-10 w-10 text-accent"/>
                <CardTitle className="font-headline text-2xl text-primary">Online Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">For your convenience, we will soon offer secure online donation options. Please check back later or contact us for current online methods.</p>
              <div className="space-y-3">
                <Button disabled className="w-full bg-primary/70 text-primary-foreground/80 cursor-not-allowed">
                  Donate via PayPal (Coming Soon) <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button disabled className="w-full bg-primary/70 text-primary-foreground/80 cursor-not-allowed">
                  Donate via Credit/Debit Card (Coming Soon) <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">We are working on integrating secure payment gateways.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center bg-card p-8 rounded-lg shadow-xl border border-primary/20">
            <h3 className="font-headline text-2xl text-primary mb-4">Your Generosity Matters</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." (2 Corinthians 9:7)
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                If you have any questions about donations or how your contributions are used, please feel free to <Link href="/contact" className="text-accent hover:underline">contact us</Link>.
            </p>
        </div>
      </SectionContainer>
    </>
  );
}
