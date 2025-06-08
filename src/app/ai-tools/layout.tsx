import { Sparkles } from 'lucide-react';

export default function AiToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* 
        Optional: A shared header or introductory text for all AI tools can go here.
        For now, individual pages will have their own PageHeader.
        Example:
        <section className="bg-secondary/20 py-8">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex items-center justify-center mb-2">
                <Sparkles className="h-8 w-8 text-primary mr-2" />
                <h2 className="font-headline text-2xl font-semibold text-primary">AI-Powered Spiritual Tools</h2>
            </div>
            <p className="text-muted-foreground">Explore innovative ways to engage with faith through our AI tools.</p>
          </div>
        </section>
      */}
      {children}
    </div>
  );
}
