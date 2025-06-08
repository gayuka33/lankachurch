import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  time?: string;
  detailsLink?: string;
}

export function ServiceCard({ title, description, icon: Icon, time, detailsLink }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <CardHeader className="flex flex-row items-start gap-4 pb-4">
        <div className="bg-accent/20 p-3 rounded-full">
          <Icon className="h-8 w-8 text-accent" />
        </div>
        <div>
          <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
          {time && <CardDescription className="text-sm text-muted-foreground">{time}</CardDescription>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
      {detailsLink && (
        <div className="p-6 pt-0">
          <Button asChild variant="link" className="text-accent p-0">
            <Link href={detailsLink}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </Card>
  );
}
