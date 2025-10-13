import { Badge } from "@/components/ui/badge";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div>
            <Badge variant="outline" className="mb-4 bg-secondary/50 border-primary/20 py-1 px-3 text-sm">
              Who We Are
            </Badge>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            We are Career Point, we help students like you to master in-demand IT skills with hands-on training
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
