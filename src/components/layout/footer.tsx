import Link from 'next/link';
import { Facebook, Youtube, MessageCircle, Phone, Mail, MapPin } from 'lucide-react'; // Using MessageCircle for WhatsApp

const SocialLink = ({ href, icon: Icon, label }: { href: string, icon: React.ElementType, label: string }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-muted-foreground hover:text-primary transition-colors">
    <Icon className="h-6 w-6" />
  </Link>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/60">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h5 className="font-headline text-lg font-semibold text-primary mb-3">Praise Prayer Lanka Church</h5>
            <p className="text-sm text-muted-foreground">
              Sharing God's love and word with our community and beyond.
            </p>
          </div>
          
          <div>
            <h5 className="font-headline text-lg font-semibold text-primary mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/donation" className="text-muted-foreground hover:text-primary transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-headline text-lg font-semibold text-primary mb-3">Connect With Us</h5>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <SocialLink href="https://www.facebook.com/SriLankaChurch" icon={Facebook} label="Facebook" />
              <SocialLink href="https://whatsapp.com/channel/0029Va9bccOKwqSYDSqARq3P" icon={MessageCircle} label="WhatsApp" />
              <SocialLink href="https://www.youtube.com/@lankachurch" icon={Youtube} label="YouTube" />
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p className="flex items-center justify-center md:justify-start"><MapPin className="h-4 w-4 mr-2 text-primary/70" />76, Model Town Rd, Moratuwa</p>
              <p className="flex items-center justify-center md:justify-start"><Phone className="h-4 w-4 mr-2 text-primary/70" />+94714834462</p>
              <p className="flex items-center justify-center md:justify-start"><Mail className="h-4 w-4 mr-2 text-primary/70" />info@lankachurch.org</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border/60 mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Praise Prayer Lanka Church. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
