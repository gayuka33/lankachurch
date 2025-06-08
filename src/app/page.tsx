import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { ArrowRight, Church, Users, MessageCircle, Bot, BookOpen, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary/20 via-secondary/20 to-background text-foreground py-20 md:py-32">
        <div className="absolute inset-0 opacity-30">
           <Image 
            src="https://placehold.co/1920x1080.png" 
            alt="Church congregation"
            layout="fill"
            objectFit="cover"
            quality={75}
            priority
            data-ai-hint="church worship"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-6 drop-shadow-md">
            Welcome to Praise Prayer Lanka Church
          </h1>
          <p className="text-lg md:text-2xl text-foreground/90 mb-10 max-w-3xl mx-auto drop-shadow-sm">
            A place of faith, hope, and love. Join our community in worship and fellowship.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform">
              <Link href="/services">
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-background/80 hover:bg-background text-primary border-primary shadow-lg transform hover:scale-105 transition-transform">
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">Discover Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At Praise Prayer Lanka Church, we are dedicated to spiritual growth, community service, and spreading the Gospel.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Church className="h-12 w-12 text-accent" />
              </div>
              <CardTitle className="font-headline text-2xl text-center text-primary">Our Faith</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Learn about our beliefs, values, and the foundations of our church.
              </p>
              <Button variant="link" asChild className="text-accent mt-4 mx-auto block">
                <Link href="/about">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-accent" />
              </div>
              <CardTitle className="font-headline text-2xl text-center text-primary">Join Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Find details about our weekly services, Sunday school, and special events.
              </p>
              <Button variant="link" asChild className="text-accent mt-4 mx-auto block">
                <Link href="/services">Service Times <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                 <Sparkles className="h-12 w-12 text-accent" />
              </div>
              <CardTitle className="font-headline text-2xl text-center text-primary">AI Spiritual Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Engage with our AI-powered Bible search and chatbot for spiritual exploration.
              </p>
              <Button variant="link" asChild className="text-accent mt-4 mx-auto block">
                <Link href="/ai-tools/jesus-chatbot">Explore Tools <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      <SectionContainer wrapperClassName="bg-secondary/30">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">Latest News & Events</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay updated with what's happening at Praise Prayer Lanka Church.
          </p>
          {/* Placeholder for news items, will be developed in news page */}
          <div className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-md">
            <h3 className="font-headline text-xl text-primary mb-2">Community Outreach Program</h3>
            <p className="text-sm text-muted-foreground mb-3">Join us next Saturday for our bi-annual community outreach. Volunteers needed!</p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/news">Read More News</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
