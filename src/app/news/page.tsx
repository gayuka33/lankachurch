import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { NewsItemCard } from '@/components/ui/news-item-card';

const newsItems = [
  {
    title: 'Annual Church Picnic - Fun for All Ages!',
    date: 'October 28, 2023',
    excerpt: 'Join us for our annual church picnic! A day of fellowship, food, games, and fun for the entire family. Don\'t miss out on this wonderful community event.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'church picnic',
    link: '/news/annual-picnic',
  },
  {
    title: 'Special Guest Speaker Next Sunday',
    date: 'October 22, 2023',
    excerpt: 'We are excited to welcome a special guest speaker next Sunday. Prepare for an inspiring message that will uplift your spirit.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'guest speaker',
    link: '/news/guest-speaker',
  },
  {
    title: 'Youth Camp Registration Now Open',
    date: 'October 15, 2023',
    excerpt: 'Registration for our annual youth camp is now open! A transformative experience for young people to grow in faith and fellowship.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'youth camp',
    link: '/news/youth-camp',
  },
  {
    title: 'New Bible Study Series Starting',
    date: 'October 10, 2023',
    excerpt: 'Dive deeper into the Word with our new Bible study series on the Book of Romans. Wednesdays at 7 PM.',
    link: '/news/bible-study-romans',
  },
  {
    title: 'Community Outreach Initiative Success',
    date: 'October 5, 2023',
    excerpt: 'Thank you to all volunteers who participated in our recent community outreach. We were able to bless many lives!',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'community service',
    link: '/news/outreach-success',
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
