import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Testimonial() {
  const avatar = PlaceHolderImages.find(p => p.id === 'testimonial-avatar');

  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-headline text-3xl font-bold text-primary md:text-4xl">“</p>
          <blockquote className="mt-4">
            <p className="text-xl font-medium md:text-2xl">
              Landio has been a game-changer for our business. We can now launch beautiful, high-performing websites for our clients in a fraction of the time.
            </p>
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            {avatar && (
              <Image
                src={avatar.imageUrl}
                alt={avatar.description}
                data-ai-hint={avatar.imageHint}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full"
              />
            )}
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-sm text-muted-foreground">CEO, Example Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
