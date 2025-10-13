import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Collaborate",
    description: "Work with your team in real-time. Share designs, get feedback, and iterate faster than ever before.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure",
    description: "Your data is safe with us. We use industry-standard encryption and security protocols to protect your work.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Analytics",
    description: "Track your website's performance with our built-in analytics tools. See who's visiting, where they're coming from, and more.",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Our platform is packed with features to help you build and grow your online presence.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={feature.title}>
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
