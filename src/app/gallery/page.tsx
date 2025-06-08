import Image from 'next/image';
import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Church event", hint: "church event" },
  { src: "https://placehold.co/600x400.png", alt: "Congregation singing", hint: "congregation singing" },
  { src: "https://placehold.co/600x400.png", alt: "Community outreach", hint: "community outreach" },
  { src: "https://placehold.co/600x400.png", alt: "Church building exterior", hint: "church building" },
  { src: "https://placehold.co/600x400.png", alt: "Pastor preaching", hint: "pastor preaching" },
  { src: "https://placehold.co/600x400.png", alt: "Children's ministry activity", hint: "children ministry" },
  { src: "https://placehold.co/600x400.png", alt: "Worship team playing music", hint: "worship team" },
  { src: "https://placehold.co/600x400.png", alt: "Church fellowship meal", hint: "church fellowship" },
  { src: "https://placehold.co/600x400.png", alt: "Baptism ceremony", hint: "baptism ceremony" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader 
        title="Church Gallery"
        description="A glimpse into the life and fellowship at Praise Prayer Lanka Church. Moments of worship, community, and service."
      />
      <SectionContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
              <CardContent className="p-0">
                <div className="aspect-w-1 aspect-h-1"> {/* For square aspect ratio, adjust as needed */}
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={600} 
                    height={400} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    data-ai-hint={image.hint}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
