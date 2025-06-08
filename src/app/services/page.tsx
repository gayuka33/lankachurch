import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { ServiceCard } from '@/components/ui/service-card';
import { CalendarDays, Users, Music, MessageCircle, PenSquare, Church } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Sunday Worship Service',
    description: 'Join us every Sunday for a blessed time of worship, prayer, and inspiring sermons. All are welcome to experience God\'s presence.',
    icon: Church,
    time: 'Every Sunday at 9:00 AM & 11:00 AM',
    detailsLink: '#sunday-service-details', // Placeholder, could link to a section or modal
  },
  {
    title: 'Sunday School',
    description: 'Engaging and age-appropriate Bible lessons for children and youth. We aim to nurture their faith from a young age.',
    icon: Users,
    time: 'Every Sunday at 9:00 AM',
    detailsLink: '#sunday-school-details',
  },
  {
    title: 'Hymns Practice',
    description: 'Join our choir and music team for hymns practice. Lift your voice in praise and worship with us.',
    icon: Music,
    time: 'Every Saturday at 4:00 PM',
  },
  {
    title: 'WhatsApp Prayer Group',
    description: 'Connect with fellow believers for daily prayers, devotionals, and encouragement through our WhatsApp group.',
    icon: MessageCircle,
    detailsLink: '#whatsapp-prayer-details',
  },
  {
    title: 'Prayer Requests',
    description: 'Submit your prayer requests, and our dedicated prayer team will lift them up. We believe in the power of prayer.',
    icon: PenSquare,
    detailsLink: '/services/prayer-request',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services & Ministries"
        description="Find ways to connect, grow, and serve within our church community. We offer a variety of services and ministries to cater to all ages and spiritual needs."
      />

      <SectionContainer>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              time={service.time}
              detailsLink={service.detailsLink}
            />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer wrapperClassName="bg-secondary/30" id="sunday-service-details">
        <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">Join Our Worship</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our Sunday services are a cornerstone of our church life, filled with heartfelt worship, biblical teaching, and warm fellowship.
            </p>
            <div className="bg-card p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
                <Church className="h-16 w-16 text-accent mx-auto mb-6"/>
                <h3 className="font-headline text-2xl text-primary mb-3">Sunday Worship Details</h3>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Time:</strong> 9:00 AM (English/Sinhala) & 11:00 AM (Tamil/English)</p>
                <p className="text-muted-foreground mb-4"><strong className="text-foreground">Location:</strong> Praise Prayer Lanka Church Main Sanctuary</p>
                <p className="text-muted-foreground mb-6">
                    Each service includes contemporary and traditional worship songs, a relevant and engaging sermon based on God's Word, and opportunities for prayer and fellowship. Children's ministry is available during the 9:00 AM service.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contact">Get Directions</Link>
                </Button>
            </div>
        </div>
      </SectionContainer>
    </>
  );
}
