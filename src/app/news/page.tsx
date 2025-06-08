import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { NewsItemCard } from '@/components/ui/news-item-card';

const newsItems = [
  {
    title: 'Annual Church Picnic - Fun for All Ages!',
    date: 'April 12, 2024',
    excerpt: 'Join us for our annual church picnic! A day of fellowship, food, games, and fun for the entire family. Don\'t miss out on this wonderful community event.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'church picnic',
    link: '/news/annual-picnic',
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader 
        title="News & Events"
        description="Stay informed about the latest happenings, announcements, and upcoming events at Praise Prayer Lanka Church."
      />
      <SectionContainer>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsItemCard 
              key={item.title}
              title={item.title}
              date={item.date}
              excerpt={item.excerpt}
              imageUrl={item.imageUrl}
              imageHint={item.imageHint}
              link={item.link}
            />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
