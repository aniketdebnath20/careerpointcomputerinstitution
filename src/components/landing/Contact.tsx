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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const courses = [
  "Admission on any Courses (Post Graduate Diploma or graduation)",
  "BCA (Bachelor of Computer Applications)",
  "B.Com (Bachelor of Commerce with Computer Applications)",
  "D.Pharma (Diploma in Pharmacy)",
  "Full Stack Developer",
  "Java Developer",
  "Graphic Designer",
  "Cyber Security Analyst",
  "Basic Computer Course",
  "MS Office Training",
  "Tally with GST",
  "Tally Prime",
  "Advanced Excel with GST"
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }).optional().or(z.literal('')),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  course: z.string({
    message: "Please select a course.",
  }),
  message: z.string().optional(),
});

const contactDetails = [
  {
    icon: <Mail className="h-5 w-5" />,
    text: "admin@careerpoint.com"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    text: "(969) 819-8061"
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    text: "43 Roselle St. New York"
  }
]

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Form submitted!",
      description: "We've received your message and will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="bg-secondary/50 border-primary/20 py-1 px-3 text-sm">
              Contacts
            </Badge>
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Ask whatever you have in your mind
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Whether you have questions or are ready to discuss your business, we&apos;re here to help. Reach out today.
            </p>
            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20 text-primary">
                    {detail.icon}
                  </div>
                  <span className="text-muted-foreground">{detail.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Smith" {...field} className="bg-transparent border-neutral-800 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@example.com" {...field} className="bg-transparent border-neutral-800 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Number</FormLabel>
                        <FormControl>
                          <Input placeholder="123-456-7890" {...field} className="bg-transparent border-neutral-800 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-transparent border-neutral-800 h-12">
                              <SelectValue placeholder="Select a course" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course} value={course}>
                                {course}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Hi, I am reaching out for..."
                          className="min-h-[150px] bg-transparent border-neutral-800"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full rounded-lg">Submit</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
