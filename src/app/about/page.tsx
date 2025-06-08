import Image from 'next/image';
import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, BookOpenText, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Praise Prayer Lanka Church"
        description="Learn more about our history, mission, values, and the community we serve."
      />

      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-semibold text-primary mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Praise Prayer Lanka Church was founded with a vision to create a vibrant community of believers dedicated to worship, fellowship, and service. 
              From humble beginnings, our church has grown through God's grace, becoming a beacon of hope and faith in our local area and beyond.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are a diverse congregation united by our love for Jesus Christ and our commitment to His teachings. Our journey is one of continuous growth, learning, and reaching out to share the Good News.
            </p>
          </div>
          <div>
            <Card className="overflow-hidden shadow-xl">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Church building or congregation" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
                data-ai-hint="church community" 
              />
            </Card>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer wrapperClassName="bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">Our Mission & Vision</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are driven by a divine purpose to make a difference in the lives of people through the power of the Gospel.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <Target className="h-10 w-10 text-accent" />
              <CardTitle className="font-headline text-2xl text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To worship God in spirit and truth, to nurture believers in their faith journey, to reach out to the unchurched with the love of Christ, and to serve our community with compassion and dedication.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <BookOpenText className="h-10 w-10 text-accent" />
              <CardTitle className="font-headline text-2xl text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be a transformative spiritual home where individuals and families encounter God, grow in their relationship with Him and each other, and are equipped to impact the world for Christ.
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>
      
      <SectionContainer>
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Faith', 'Love', 'Community', 'Service'].map((value, index) => (
                <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <HeartHandshake className="h-12 w-12 text-accent mx-auto mb-4" /> {/* Using a generic icon */}
                    <h3 className="font-headline text-xl text-primary mb-2">{value}</h3>
                    <p className="text-sm text-muted-foreground">A brief description of how {value.toLowerCase()} is a core value of our church community.</p>
                </Card>
            ))}
        </div>
      </SectionContainer>

      <SectionContainer wrapperClassName="bg-secondary/30">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our church is led by a dedicated team of pastors and leaders committed to serving God and our congregation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for team members */}
            {[1, 2, 3].map((i) => (
              <Card key={i} className="shadow-lg">
                <CardHeader>
                  <Image 
                    src={`https://placehold.co/300x300.png`} 
                    alt={`Pastor/Leader ${i}`} 
                    width={300} 
                    height={300} 
                    className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-accent"
                    data-ai-hint="pastor portrait" 
                  />
                  <CardTitle className="font-headline text-xl text-center text-primary">Pastor/Leader Name {i}</CardTitle>
                  <p className="text-sm text-accent text-center">Role/Title</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">
                    A brief bio about the pastor or leader, their ministry focus, and their passion for serving the church.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
