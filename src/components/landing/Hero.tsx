
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, MoveRight, MoveUp } from "lucide-react";
import Link from "next/link";
import Logo from "../Slogo";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-20 md:pt-32 lg:pt-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div>
            <Badge variant="outline" className="mb-4 rounded-full bg-secondary/50 border-primary/20 py-1 px-3">
              <Logo />
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
              <Button size="lg" asChild className="group/button bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <Link
                  href="https://wa.me/7709226336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative"
                >
                  <span className="relative flex h-full w-full items-center justify-center">
                    <span className="block transition-all duration-300 ease-[cubic-bezier(0.3,_,0.7,1)] group-hover/button:-translate-y-full group-hover/button:opacity-0">
                      Chat with us <ArrowUpRight className="ml-2 h-4 w-4 inline" />
                    </span>
                    <span className="absolute block translate-y-full opacity-0 transition-all duration-300 ease-[cubic-bezier(0.3,_,0.7,1)] group-hover/button:translate-y-0 group-hover/button:opacity-100">
                      Chat with us  <MoveRight className="ml-2 h-4 w-4 inline" />
                    </span>
                  </span>
                </Link>
              </Button>
              <Button size="md" variant="outline" asChild className="group/button relative overflow-hidden shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                <Link href="#computer-courses">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent translate-y-full group-hover/button:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative flex h-full w-full items-center justify-center text-foreground transition-colors duration-300 ease-in-out group-hover/button:text-white">
                    <span className="block transition-all duration-300 ease-[cubic-bezier(0.3,_,0.7,1)] group-hover/button:-translate-y-full group-hover/button:opacity-0">See Courses</span>
                    <span className="absolute block translate-y-full opacity-0 transition-all duration-300 ease-[cubic-bezier(0.3,_,0.7,1)] group-hover/button:translate-y-0 group-hover/button:opacity-100">See Courses</span>
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
