import Link from "next/link";
import Logo from "@/components/logo";
import { Linkedin, Twitter, Instagram, Facebook, Dribbble, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectionsLinks = [
    { name: "Process", href: "#process" },
    { name: "Benefits", href: "#benefits" },
    { name: "Career Paths", href: "#success-stories"},
    { name: "Courses", href: "#computer-courses" },
    { name: "Pricing", href: "#pricing" },
    { name: "Refer & Earn", href: "#refer" },
    { name: "Contact", href: "#contact" },
];

const courseLinks = [
    { name: "Full Stack Developer", href: "#success-stories" },
    { name: "Java Developer", href: "#success-stories" },
    { name: "Graphic Designer", href: "#success-stories" },
    { name: "Cyber Security", href: "#success-stories" },
    { name: "MS Office Training", href: "#computer-courses" },
    { name: "Tally with GST", href: "#computer-courses" },
    { name: "Advanced Excel", href: "#computer-courses"},
    { name: "Basic Computer Course", href: "#computer-courses"},
    { name: "D.Pharma", href: "#pricing" },
    { name: "BCA", href: "#pricing" },
    { name: "B.Com", href: "#pricing" },
];

const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
]

const contactInfo = [
    { icon: <Mail className="h-4 w-4" />, text: "admin@careerpoint.com", href: "mailto:admin@careerpoint.com" },
    { icon: <Phone className="h-4 w-4" />, text: "(969) 819-8061", href: "tel:(969) 819-8061" },
    { icon: <MapPin className="h-4 w-4" />, text: "43 Roselle St. New York", href: "#" },
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
            Your trusted partner in IT training, creating smarter students for a smarter future.
            </p>
            <ul className="mt-6 space-y-3">
              {contactInfo.map((info) => (
                <li key={info.text}>
                  <Link
                    href={info.href}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-md bg-neutral-800/80 text-primary">
                        {info.icon}
                    </div>
                    <span>{info.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
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
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3">
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
                <h3 className="font-headline text-sm font-semibold">Courses</h3>
                <ul className="mt-4 space-y-2">
                  {courseLinks.map((link) => (
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
                <h3 className="font-headline text-sm font-semibold">Legal</h3>
                <ul className="mt-4 space-y-2">
                  {legalLinks.map((link) => (
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
          <p>Visioned and Crafted by <Link href="#" className="font-medium text-foreground hover:text-primary">Aniket Debnath</Link></p>
        </div>
      </div>
    </footer>
  );
}
