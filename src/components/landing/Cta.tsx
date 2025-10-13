import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Logo from "../logo";

export default function Cta() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 bg-secondary/50 border-primary/20 py-1 px-3">
              <Logo className="h-4 w-4 mr-2" />
              Career Point
            </Badge>
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Let&apos;s talk about your next big move
            </h2>
            <p className="mx-auto mt-6 max-w-[600px] text-lg text-muted-foreground md:text-xl">
            Book a free consultation to discover how our courses can accelerate your career growth.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <Button size="lg" className="rounded-full">
                Schedule a quick call <MoveRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-sm text-muted-foreground">It&apos;s Free</p>
            </div>
        </div>
      </div>
    </section>
  );
}
