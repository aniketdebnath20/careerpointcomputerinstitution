"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

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
  },
  {
    title: "Web Development",
    description: "Build modern, responsive websites with HTML, CSS, and JavaScript.",
  },
  {
    title: "Python Programming",
    description: "Learn the versatile Python language for data science, web development, and automation.",
  },
  {
    title: "Digital Marketing",
    description: "Master SEO, SEM, and social media marketing to grow online businesses.",
  },
  {
    title: "Data Science Fundamentals",
    description: "Get an introduction to data analysis, machine learning, and data visualization.",
  },
  {
    title: "Cloud Computing (AWS)",
    description: "Learn the basics of cloud infrastructure with Amazon Web Services.",
  },
  {
    title: "Mobile App Development",
    description: "Build your first mobile app for Android and iOS using modern frameworks.",
  },
  {
    title: "C Programming",
    description: "Master the foundational C language, essential for systems programming and embedded systems.",
  },
  {
    title: "C++ Programming",
    description: "Learn object-oriented programming with C++ for game development and high-performance applications.",
  },
  {
    title: "Java Full Stack Development",
    description: "Become a full-stack Java developer by learning Spring Boot, Hibernate, and modern frontend frameworks.",
  },
  {
    title: "MERN Stack Development",
    description: "Master the MERN stack (MongoDB, Express.js, React, Node.js) to build powerful web applications.",
  },
  {
    title: "AutoCAD",
    description: "Learn computer-aided design with AutoCAD, the industry standard for architects and engineers.",
  },
  {
    title: "Video Editing",
    description: "Master video editing with tools like Adobe Premiere Pro and Final Cut Pro to create professional videos.",
  },
  {
    title: "SEO and SEM Specialization",
    description: "Dive deep into Search Engine Optimization and Search Engine Marketing to drive traffic and conversions.",
  },
  {
    title: "Social Media Marketing",
    description: "Learn to create and manage effective social media campaigns across various platforms.",
  },
  {
    title: "UI/UX Design Principles",
    description: "Understand the principles of user interface and user experience design to create intuitive digital products.",
  },
  {
    title: "Ethical Hacking Essentials",
    description: "Learn the fundamentals of ethical hacking and penetration testing to secure computer systems.",
  },
  {
    title: "Networking and Security",
    description: "Understand computer networks and learn to protect them from security threats.",
  },
  {
    title: "Machine Learning Basics",
    description: "Get started with the basic concepts of machine learning and build your first predictive models.",
  }
];

const COURSES_PER_PAGE = 6;

export default function ComputerCourses() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(courses.length / COURSES_PER_PAGE);
  const paginatedCourses = courses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
          {paginatedCourses.map((course) => (
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
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink 
                      href="#" 
                      isActive={currentPage === page}
                      onClick={(e) => { e.preventDefault(); handlePageChange(page); }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }} 
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
}