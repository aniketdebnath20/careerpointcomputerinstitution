import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Check, LifeBuoy, TrendingDown, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "Expert-Led Training",
    description:
      "Learn from industry veterans and certified instructors who bring real-world experience and insights into the classroom.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Hands-On Projects",
    description:
      "Build a professional portfolio by working on practical, real-world projects that showcase your skills to potential employers.",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Job Placement Support",
    description:
      "Receive dedicated career support, including resume building, interview preparation, and access to our network of hiring partners.",
  },
  {
    icon: <LifeBuoy className="h-6 w-6" />,
    title: "Lifetime Practice Card",
    description:
      "Get lifetime access to our practice card for continuous learning and skill reinforcement, long after you've completed your course.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 bg-secondary/50 border-primary/20 py-1 px-3 text-sm">
                Benefits
            </Badge>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Maximize efficiency and impact
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Discover the key benefits of partnering with us.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="bg-secondary/20 border-primary/10 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            >
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 text-primary mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
