import Link from "next/link";
import Logo from "@/components/logo";
import { Linkedin, Twitter, Instagram, Facebook, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectionsLinks = [
    { name: "Process", href: "#process" },
    { name: "Services", href: "#services" },
    { name: "Benefits", href: "#benefits" },
    { name: "Plans", href: "#plans" },
    { name: "Contact", href: "#contact" },
];

const pagesLinks = [
    { name: "Home", href: "/" },
    { name: "Coming soon", href: "#" },
    { name: "404", href: "#" },
]

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-primary/10 bg-background/50 pt-20 pb-8">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <span className="font-headline text-xl font-bold">Career Point</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Your trusted partner in AI solutions, creating smarter systems for smarter businesses.
            </p>
            <div className="mt-6 flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md bg-neutral-800/80 hover:bg-neutral-800" asChild>
                <Link href="#">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md bg-neutral-800/80 hover:bg-neutral-800" asChild>
                <Link href="#">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md bg-neutral-800/80 hover:bg-neutral-800" asChild>
                <Link href="#">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
               <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md bg-neutral-800/80 hover:bg-neutral-800" asChild>
                <Link href="#">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md bg-neutral-800/80 hover:bg-neutral-800" asChild>
                <Link href="#">
                  <Dribbble className="h-4 w-4" />
                  <span className="sr-only">Dribbble</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-4 md:col-start-7 lg:col-start-9">
              <div>
                <h3 className="font-headline text-sm font-semibold">Sections</h3>
                <ul className="mt-4 space-y-2">
                  {sectionsLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-headline text-sm font-semibold">Pages</h3>
                <ul className="mt-4 space-y-2">
                  {pagesLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
        <div className="mt-16 border-t border-primary/10 pt-8 text-center text-sm text-muted-foreground">
          <p>Visioned and Crafted by <Link href="#" className="font-medium text-foreground hover:text-primary">Aniket debnath</Link></p>
        </div>
      </div>
    </footer>
  );
}
