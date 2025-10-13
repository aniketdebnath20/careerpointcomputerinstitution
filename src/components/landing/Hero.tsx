import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, MoveRight } from "lucide-react";
import Logo from "@/components/logo";
import Link from "next/link";

const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-20 md:pt-32 lg:pt-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div>
            <Badge variant="outline" className="mb-4 bg-secondary/50 border-primary/20 py-1 px-3">
              <Logo className="h-4 w-4 mr-2" />
              Career Point - IT Training Academy
            </Badge>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Transforming careers with
              <br />
              expert-led IT training
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Experience the future of learning with comprehensive,Join Career Point Computer Academy to master the most in-demand computer skills with expert-led, hands-on courses designed for your career growth.
            </p>
            <div className="mt-8 flex justify-center items-center gap-4">
              <Button size="lg" asChild className="group/button transition-all duration-300 overflow-hidden">
                <Link href="#contact" className="relative">
                  <span className="relative flex h-full w-full items-center justify-center">
                    <span className="block transition-all duration-300 ease-[cubic-bezier(0.3,_,0.7,1)] group-hover/button:-translate-y-full group-hover/button:opacity-0">
                       Our Courses <ArrowUpRight className="ml-2 h-4 w-4 inline" /> 
                    </span>
                    <span className="absolute block translate-y-full opacity-0 transition-all duration-300 ease-[cubic-bezier(0.3,_,0.7,1)] group-hover/button:translate-y-0 group-hover/button:opacity-100">
                       Our Courses <MoveRight className="ml-2 h-4 w-4 inline" />
                    </span>
                  </span>
                </Link>
              </Button>
              <Button size="md" variant="outline" className="group/button transition-all duration-300 overflow-hidden py-1 px-4">
                <Link href="#contact" className="relative">
                  <span className="relative flex h-full w-full items-center justify-center">
                    <span className="block transition-all duration-300 ease-[cubic-bezier(0.3,_,0.7,1)] group-hover/button:-translate-y-full group-hover/button:opacity-0">
                      See Plans
                    </span>
                    <span className="absolute block translate-y-full opacity-0 transition-all duration-300 ease-[cubic-bezier(0.3,_,0.7,1)] group-hover/button:translate-y-0 group-hover/button:opacity-100">
                      See Plans 
                    </span>
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative mt-20">
        <div
          className="mt-6 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <div className="relative flex h-14 w-full flex-nowrap overflow-hidden">
            <div className="flex animate-marquee-infinite whitespace-nowrap">
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="flex items-center justify-center mx-8">
                  <span className="font-headline text-2xl font-semibold text-muted-foreground">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
