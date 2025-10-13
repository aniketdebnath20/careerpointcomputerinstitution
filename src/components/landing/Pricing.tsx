import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";


const plans = [
  {
    name: "D.Pharma",
    price: "Custom",
    period: "/2 years",
    description: "Diploma in Pharmacy for a career in healthcare.",
    features: [
      "Pharmaceutical Chemistry",
      "Pharmacology",
      "Practical training",
      "Regulatory knowledge",
      "Industry-relevant curriculum",
    ],
    cta: "Inquire Now",
    popular: false,
  },
  {
    name: "BCA",
    price: "Custom",
    period: "/3 years",
    description: "Bachelor of Computer Applications for a solid IT foundation.",
    features: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Management",
      "Final year project",
      "Job placement support",
      "Access to tech community",
    ],
    cta: "Enroll Now",
    popular: true,
  },
  {
    name: "B.Com",
    price: "Custom",
    period: "/3 years",
    description: "Commerce degree with a focus on computer applications.",
    features: [
        "Financial Accounting",
        "Business Law",
        "Computer Fundamentals & IT",
        "E-commerce and Web Design",
        "Tally & ERP Systems",
        "Project Work",
    ],
    cta: "Inquire Now",
    popular: false,
  },
];
const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Plans</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Future plans for growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing designed to fit your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative flex flex-col ${
                plan.popular 
                  ? 'border-primary shadow-lg shadow-primary/20 scale-105' 
                  : 'border-border'
              } hover:border-primary/50 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs px-4 py-1 rounded-full font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="font-headline text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex flex-col flex-1">
                <Link href="#contact" className="w-full">
                  <Button 
                    className={`w-full mb-6 rounded-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-foreground hover:bg-foreground/90 text-background'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                <div className="space-y-3 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
