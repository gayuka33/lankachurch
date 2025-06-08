import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps extends ComponentPropsWithoutRef<'section'> {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
}

export function SectionContainer({ children, className, wrapperClassName, ...props }: SectionContainerProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-20", wrapperClassName)} {...props}>
      <div className={cn("container mx-auto px-4 md:px-6", className)}>
        {children}
      </div>
    </section>
  );
}
