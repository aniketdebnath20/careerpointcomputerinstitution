"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial on all our plans. You can get started without a credit card.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account dashboard.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our service, we'll refund your payment, no questions asked.",
  },
  {
    question: "Do you offer support?",
    answer: "Yes, we offer email support on the Starter plan and priority email and chat support on our Pro and Enterprise plans.",
  },
  {
    question: "Can I use my own domain name?",
    answer: "Yes, you can connect your own custom domain name to any of our paid plans. We also provide a free `landio.site` subdomain on all plans.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Find answers to common questions about Landio.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={faq.question}>
                <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
