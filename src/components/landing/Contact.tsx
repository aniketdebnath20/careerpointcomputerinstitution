"use client";

import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

// List of available courses
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
  "Advanced Excel with GST",
];

// ✅ Zod validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .union([
      z.string().email({ message: "Please enter a valid email address." }),
      z.literal(""),
    ])
    .optional(),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid phone number." })
    .max(15, { message: "Phone number seems too long." }),
  course: z.string({
    message: "Please select a course.",
  }),
  message: z.string().optional(),
});

const primaryEmail = "careerpointcomputerinstitution@gmail.com";
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(primaryEmail)}&su=${encodeURIComponent("New project inquiry")}&body=${encodeURIComponent("Hi, I'd like to discuss a project with you.")}`;

// Contact detail info
const contactDetails = [
  { icon: <Mail className="h-4 w-4" />, text: "careerpointcomputerinstitution@gmail.com", href: gmailComposeUrl },
  { icon: <Phone className="h-4 w-4" />, text: "7709226336", href: "tel:7709226336" },
  { icon: <MapPin className="h-4 w-4" />, text: "Nallasopara (East). Mumbai", href: "#" },
]

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    },
  });

  // ✅ Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitting(true);

    try {
      const GOOGLE_SHEET_WEBHOOK = process.env.NEXT_PUBLIC_GOOGLE_FORM_API;

      if (!GOOGLE_SHEET_WEBHOOK) {
        toast({
          title: "Configuration Error",
          description: "Missing Google Form API URL in environment variables.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Wait 0.7 seconds before sending (for smoother UX)
      await new Promise((resolve) => setTimeout(resolve, 400));

      // const controller = new AbortController();
      // const timeout = setTimeout(() => controller.abort(), 20000); // cancel after 10 seconds

      const response = await fetch(GOOGLE_SHEET_WEBHOOK as string, {
        method: "POST",
        mode: 'no-cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        // signal: controller.signal,
      });

      // clearTimeout(timeout);

      if (response.ok || response.status === 0) {
        toast({
          title: "✅ Form submitted!",
          description:
            "We've received your message and will get back to you shortly.",
        });
        form.reset();
      } else {
        toast({
          title: "❌ Submission failed",
          description: "Something went wrong while submitting the form.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "❌ Error",
        description: "Network issue or unexpected error occurred.",
        variant: "destructive",
      });
      console.log(error)
    }

    setIsSubmitting(false);
  }


  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <Badge
              variant="outline"
              className="bg-secondary/50 border-primary/20 py-1 px-3 text-sm"
            >
              Contacts
            </Badge>
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Ask whatever you have in your mind
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Whether you have questions or are ready to discuss your goals,
              we&apos;re here to help. Reach out today.
            </p>

            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20 text-primary">
                    {detail.icon}
                  </div>
                  <Link
                    href={detail.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-muted-foreground">{detail.text}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Form */}
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jane Smith"
                            {...field}
                            className="bg-transparent border-neutral-800 h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="jane@example.com"
                            {...field}
                            className="bg-transparent border-neutral-800 h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="123-456-7890"
                            {...field}
                            className="bg-transparent border-neutral-800 h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Course */}
                  <FormField
                    control={form.control}
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
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

                {/* Message */}
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

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
