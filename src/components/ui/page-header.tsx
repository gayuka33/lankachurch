import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps extends ComponentPropsWithoutRef<'div'> {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className, ...props }: PageHeaderProps) {
  return (
    <section className={cn("py-12 md:py-16 bg-gradient-to-r from-primary/10 via-background to-secondary/10", className)} {...props}>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
