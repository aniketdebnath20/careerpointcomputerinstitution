
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import Slogo from "@/components/Slogo";
import { Menu, X, ArrowRight, ArrowUpRight, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Process", href: "#process" },
  { name: "Benefits", href: "#benefits" },
  { name: "Plans", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "py-2" : "py-3"
      )}
    >
      <div
        className={cn(
          "container mx-auto flex items-center justify-between px-4 md:px-6 transition-all duration-300",
          isScrolled
            ? "h-16 max-w-full md:max-w-xl rounded-full border border-neutral-800 bg-black/50 backdrop-blur-xl"
            : "h-20 max-w-full xl:max-w-6xl"
        )}
      >
        <Link href="/" className="flex items-center gap-2" onClick={() => setActiveItem("Home")}>
          {isScrolled ? <Slogo /> : <Logo />}
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                activeItem === item.name && isScrolled && "bg-neutral-800 text-white hover:bg-neutral-700 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          {isScrolled ? (
            <Button variant="default" size="icon" className="rounded-full h-8 w-8">
              <Link href="#contact">
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild className="group/button transition-all duration-300 overflow-hidden rounded-full">
              <Link href="#contact" className="relative">
                <span className="relative flex h-full w-full items-center justify-center px-4 py-2">
                  <span className="block transition-all duration-300 ease-[cubic-bezier(0.3,_,0.7,1)] group-hover/button:-translate-y-full group-hover/button:opacity-0">
                    Book a Call <ArrowUpRight className="ml-2 h-4 w-4 inline" />
                  </span>
                  <span className="absolute block translate-y-full opacity-0 transition-all duration-300 ease-[cubic-bezier(0.3,_,0.7,1)] group-hover/button:translate-y-0 group-hover/button:opacity-100">
                    Book a Call <MoveRight className="ml-2 h-4 w-4 inline" />
                  </span>
                </span>
              </Link>
            </Button>
          )}
        </div>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm bg-background p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation menu for mobile devices.
              </SheetDescription>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo />
                  </Link>
                  {/* <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose> */}
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4 border-t p-4">
                  <Button asChild size="lg">
                    <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                        Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
