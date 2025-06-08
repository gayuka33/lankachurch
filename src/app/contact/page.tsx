import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Facebook, Youtube, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const contactDetails = [
  { icon: MapPin, label: 'Address', value: '123 Church Street, Colombo, Sri Lanka', href: 'https://maps.google.com/?q=123+Church+Street,+Colombo,+Sri+Lanka' },
  { icon: Phone, label: 'Phone', value: '+94 11 234 5678', href: 'tel:+94112345678' },
  { icon: Mail, label: 'Email', value: 'info@praiseprayerlanka.org', href: 'mailto:info@praiseprayerlanka.org' },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/yourchurchpage' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/yourchurchchannel' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/94771234567' }, // Example WhatsApp link
];

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us"
        description="We'd love to hear from you! Whether you have a question, need prayer, or want to learn more about our church, please get in touch."
      />
      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start">
                  <item.icon className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{item.label}</h3>
                    <Link href={item.href} target={item.label === 'Address' ? '_blank': undefined} rel={item.label === 'Address' ? 'noopener noreferrer': undefined} className="text-muted-foreground hover:text-primary transition-colors break-all">
                      {item.value}
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Connect With Us Online</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Follow us on social media to stay updated with our latest news, events, and sermons.</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button key={social.label} variant="outline" size="icon" asChild className="border-primary text-primary hover:bg-primary/10">
                    <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-6 w-6" />
                    </Link>
                  </Button>
                ))}
              </div>
              <div className="pt-4">
                <h3 className="font-semibold text-lg text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground">We welcome you to join our services. Find our location below.</p>
                {/* Placeholder for a map or map link */}
                <div className="mt-4 h-64 bg-muted rounded-lg flex items-center justify-center border border-dashed">
                   <p className="text-muted-foreground">Embedded Map Placeholder (e.g., Google Maps iframe)</p>
                </div>
                 <Button asChild variant="link" className="text-accent mt-2 p-0">
                    <Link href="https://maps.google.com/?q=123+Church+Street,+Colombo,+Sri+Lanka" target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                    </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>
    </>
  );
}
