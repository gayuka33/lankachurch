import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ArrowRight } from 'lucide-react';

interface NewsItemCardProps {
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  imageHint?: string;
  link: string;
}

export function NewsItemCard({ title, date, excerpt, imageUrl, imageHint, link }: NewsItemCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image 
            src={imageUrl} 
            alt={title} 
            layout="fill" 
            objectFit="cover" 
            className="transition-transform duration-500 ease-in-out group-hover:scale-105"
            data-ai-hint={imageHint || "news article"}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary line-clamp-2">{title}</CardTitle>
        <div className="flex items-center text-xs text-muted-foreground pt-1">
          <CalendarDays className="h-4 w-4 mr-1.5" />
          {date}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-accent p-0">
          <Link href={link}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
