"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { HandCoins, User, Phone } from "lucide-react";

const formSchema = z.object({
  referrerName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  referrerNumber: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  referredName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  referredNumber: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
});

export default function ReferAndEarn() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referrerName: "",
      referrerNumber: "",
      referredName: "",
      referredNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Referral submitted!",
      description: "Thank you for referring a friend. We'll be in touch!",
    });
    form.reset();
  }

  return (
    <section id="refer" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 bg-secondary/50 border-primary/20 py-1 px-3 text-sm">
              <HandCoins className="mr-2 h-4 w-4" />
              Refer & Earn
          </Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Share the Opportunity, Get Rewarded
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Know someone who could benefit from our courses? Refer them to us and earn exciting rewards!
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-6">
                    <h3 className="font-headline text-xl font-semibold">Your Details</h3>
                    <FormField
                      control={form.control}
                      name="referrerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-transparent border-neutral-800 h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="referrerNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Contact Number</FormLabel>
                          <FormControl>
                            <Input placeholder="123-456-7890" {...field} className="bg-transparent border-neutral-800 h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
                <div className="space-y-6">
                    <h3 className="font-headline text-xl font-semibold">Friend&apos;s Details</h3>
                    <FormField
                      control={form.control}
                      name="referredName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Friend&apos;s Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Smith" {...field} className="bg-transparent border-neutral-800 h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="referredNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Friend&apos;s Contact Number</FormLabel>
                          <FormControl>
                            <Input placeholder="098-765-4321" {...field} className="bg-transparent border-neutral-800 h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full rounded-lg">Submit Referral</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}