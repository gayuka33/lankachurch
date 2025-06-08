
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type ComponentPropsWithoutRef, useEffect } from 'react';
import { Menu, X, BookOpen, Bot, Church, HomeIcon, Info, Users, ListChecks, GalleryThumbnails, Newspaper, Mail, Gift, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavItemProps extends ComponentPropsWithoutRef<typeof Link> {
  href: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  isMobile?: boolean;
  onClick?: () => void;
}

const NavItem = ({ href, children, icon: Icon, isMobile, onClick, ...props }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  const linkContent = (
    <>
      {Icon && <Icon className={cn("h-5 w-5", isMobile ? "mr-3" : "mr-0 md:mr-2 group-hover:scale-110 transition-transform")} />}
      <span className={cn(isMobile ? "text-lg" : "text-sm font-medium group-hover:text-primary transition-colors")}>{children}</span>
    </>
  );

  if (isMobile) {
    return (
      <SheetClose asChild>
        <Link
          href={href}
          className={cn(
            "flex items-center p-3 rounded-md hover:bg-primary/10",
            isActive ? "text-primary font-semibold bg-primary/10" : "text-foreground"
          )}
          onClick={onClick}
          {...props}
        >
          {linkContent}
        </Link>
      </SheetClose>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center px-3 py-2 rounded-md hover:bg-secondary/80",
        isActive ? "text-primary font-semibold bg-secondary" : "text-foreground/80 hover:text-foreground"
      )}
      onClick={onClick}
      {...props}
    >
      {linkContent}
    </Link>
  );
};


interface NavLink {
  href: string;
  label: string;
  icon: React.ElementType;
  subLinks?: NavLink[];
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/services', label: 'Services', icon: ListChecks },
  { href: '/gallery', label: 'Gallery', icon: GalleryThumbnails },
  { href: '/news', label: 'News', icon: Newspaper },
  { 
    href: '#', 
    label: 'AI Tools', 
    icon: Bot,
    subLinks: [
      { href: '/ai-tools/jesus-chatbot', label: 'Chat with Jesus', icon: Bot },
      { href: '/ai-tools/bible-verse-search', label: 'Bible Verse Search', icon: BookOpen },
    ]
  },
  { href: '/contact', label: 'Contact', icon: Mail },
  { href: '/donation', label: 'Donate', icon: Gift },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const renderNavLinks = (isMobile = false) => navLinks.map((link) => {
    if (link.subLinks) {
      if (isMobile) {
        return (
          <div key={link.label} className="flex flex-col">
            <div className="flex items-center p-3 text-lg text-foreground">
              <link.icon className="h-5 w-5 mr-3" /> {link.label}
            </div>
            <div className="ml-6">
            {link.subLinks.map(subLink => (
              <NavItem key={subLink.href} href={subLink.href} icon={subLink.icon} isMobile={isMobile} onClick={() => setIsMobileMenuOpen(false)}>
                {subLink.label}
              </NavItem>
            ))}
            </div>
          </div>
        );
      }
      return (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="group flex items-center px-3 py-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-secondary/80 data-[state=open]:bg-secondary data-[state=open]:text-primary">
              <link.icon className="h-5 w-5 mr-0 md:mr-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium group-hover:text-primary transition-colors">{link.label}</span>
              <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-background border-border shadow-lg rounded-md">
            {link.subLinks.map(subLink => (
              <DropdownMenuItem key={subLink.href} asChild>
                <NavItem href={subLink.href} icon={subLink.icon} onClick={() => setIsMobileMenuOpen(false)}>
                  {subLink.label}
                </NavItem>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return (
      <NavItem key={link.href} href={link.href} icon={link.icon} isMobile={isMobile} onClick={() => setIsMobileMenuOpen(false)}>
        {link.label}
      </NavItem>
    );
  });

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center">
            <Church className="h-8 w-8 text-primary mr-2" />
            <span className="font-headline text-xl font-bold text-primary">Praise Prayer Lanka Church</span>
          </Link>
          <div className="h-8 w-8 animate-pulse bg-muted rounded md:hidden"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Church className="h-8 w-8 text-primary mr-2 transform transition-transform hover:scale-110" />
          <span className="font-headline text-xl font-bold text-primary hover:opacity-80 transition-opacity">Praise Prayer Lanka Church</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {renderNavLinks()}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                    <Church className="h-7 w-7 text-primary mr-2" />
                    <span className="font-headline text-lg font-bold text-primary">PPLC</span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                  {renderNavLinks(true)}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
