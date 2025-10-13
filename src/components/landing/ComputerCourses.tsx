import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop } from "lucide-react";

const courses = [
    {
      title: "Basic Computer Course",
      description: "Master the fundamentals of computer operations, essential for everyday use.",
    },
    {
      title: "MS Office Training",
      description: "Become proficient in Word, Excel, and PowerPoint to boost your productivity.",
    },
    {
      title: "Tally with GST",
      description: "Learn Tally ERP 9 with GST for a career in accounting and finance.",
    },
    {
      title: "Tally Prime",
      description: "Get hands-on experience with the latest version of Tally for modern accounting.",
    },
    {
      title: "Advanced Excel with GST",
      description: "Unlock the full potential of Excel with advanced formulas, functions, and GST applications.",
    },
    {
        title: "Graphic Designer",
        description: "Unleash your creativity and learn the tools to create stunning visuals.",
    }
  ];
  
  export default function ComputerCourses() {
    return (
      <section id="computer-courses" className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
              <Badge variant="outline" className="mb-4 bg-secondary/50 border-primary/20 py-1 px-3 text-sm">
                  Computer Courses
              </Badge>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Essential Skills for Today&apos;s Workplace
              </h2>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  Explore our range of computer courses designed to equip you with practical, job-ready skills.
              </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Card
                key={course.title}
                className="bg-secondary/20 border-primary/10 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
              >
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 text-primary mb-4">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }
  