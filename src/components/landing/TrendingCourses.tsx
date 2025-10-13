
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle, Briefcase, Clock, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const successStories = [
  {
    name: "Full Stack Developer",
    title: "Master Frontend & Backend",
    description: "Our Full Stack Development program transforms beginners into job-ready professionals. You'll learn to build and deploy dynamic web applications, mastering everything from React to Node.js and beyond.",
    details: [
      { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "6 Months" },
      { icon: <Briefcase className="w-5 h-5" />, label: "Job Assistance", value: "100% Placement Support" },
      { icon: <Zap className="w-5 h-5" />, label: "Key Skills", value: "React, Node.js, Databases" },
      { icon: <Star className="w-5 h-5" />, label: "Projects", value: "5+ Real-world Projects" }
    ],
  },
  {
    name: "Java Developer",
    title: "Build Robust Applications",
    description: "Enroll in our Java Development course to master one of the world's most popular programming languages. From core concepts to advanced frameworks like Spring, you'll be prepared for a career in enterprise-level software development.",
    details: [
        { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "5 Months" },
        { icon: <Briefcase className="w-5 h-5" />, label: "Job Assistance", value: "Guaranteed Interviews" },
        { icon: <Zap className="w-5 h-5" />, label: "Key Skills", value: "Core Java, Spring, Hibernate" },
        { icon: <Star className="w-5 h-5" />, label: "Experience", value: "Enterprise Project simulations" }
    ],
  },
  {
    name: "Graphic Designer",
    title: "Create Stunning Visuals",
    description: "Unleash your creativity with our Graphic Design program. Learn the latest tools and techniques in branding, UI/UX, and digital art to build a compelling portfolio that will attract top clients and employers.",
    details: [
        { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "4 Months" },
        { icon: <Briefcase className="w-5 h-5" />, label: "Job Assistance", value: "Freelance & Portfolio Support" },
        { icon: <Zap className="w-5 h-5" />, label: "Key Skills", value: "Adobe Suite, UI/UX Principles" },
        { icon: <Star className="w-5 h-5" />, label: "Portfolio", value: "10+ Design Projects" }
    ],
  },
  {
    name: "Cyber Security Analyst",
    title: "Protect Digital Assets",
    description: "Join our Cyber Security program to learn how to defend against cyber threats. You'll gain hands-on experience with ethical hacking, network security, and risk management to start a career in a high-growth field.",
    details: [
        { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "6 Months" },
        { icon: <Briefcase className="w-5 h-5" />, label: "Job Assistance", value: "High-demand Career Path" },
        { icon: <Zap className="w-5 h-5" />, label: "Key Skills", value: "Ethical Hacking, Pen Testing" },
        { icon: <Star className="w-5 h-5" />, label: "Certification", value: "Prep for CompTIA Security+" }
    ],
  }
];

const TrendingCourses = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const renderStoryContent = (story: (typeof successStories)[0]) => (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <UserCircle className="w-6 h-6 text-muted-foreground" />
        <span className="font-semibold">{story.name}</span>
      </div>
      
      <h3 className="text-2xl md:text-4xl font-bold leading-tight">
        {story.title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        {story.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        {story.details.map((detail, idx) => (
          <div 
            key={idx}
            className="p-4 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm flex items-start gap-4"
          >
            <div className="text-primary mt-1">
                {detail.icon}
            </div>
            <div>
              <div className="text-xs md:text-sm text-muted-foreground">{detail.label}</div>
              <div className="font-semibold text-foreground text-sm md:text-base">{detail.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="success-stories" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
            <UserCircle className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground uppercase tracking-wider">CAREER PATHS</span>
          </div>
          <h2 className="font-headline text-3xl md:text-6xl font-bold mb-4">
            Chart Your Course to a <span className="italic">Tech Career</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our in-demand programs and find the perfect path to your new career.
          </p>
        </div>

        <div className="relative max-w-xl md:max-w-4xl mx-auto min-h-[600px] md:min-h-[550px]">
          {successStories.map((story, index) => {
            const isActive = index === activeIndex;
            const position = index - activeIndex;
            
            let top, scale, opacity, zIndex;

            if (isActive) {
                top = 0;
                scale = 1;
                opacity = 1;
                zIndex = 100;
            } else {
                const direction = position > 0 ? 1 : -1;
                const absPosition = Math.abs(position);

                const cardOffset = 45;
                const totalOffset = 40;
                
                if (direction > 0) {
                    top = (absPosition * cardOffset) + totalOffset;
                } else {
                    top = (absPosition * cardOffset) - 10;
                }
                
                scale = 1 - (absPosition * 0.05);
                opacity = Math.max(1 - (absPosition * 0.4), 0.2);
                zIndex = successStories.length - absPosition;
            }
            
            return (
              <Card 
                key={index}
                onClick={() => handleCardClick(index)}
                className="absolute rounded-xl left-0 right-0 bg-card/90 border-border/50 hover:border-border transition-all duration-500 overflow-hidden backdrop-blur-sm cursor-pointer"
                style={{
                  top: `${top}px`,
                  zIndex: zIndex,
                  transform: `scale(${scale})`,
                  opacity: opacity,
                }}
              >
                <CardContent className="p-3 sm:p-5 md:p-12">
                  {renderStoryContent(story)}
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="flex justify-center gap-3 mt-12">
            {successStories.map((_, index) => (
                <Button
                    key={index}
                    size="icon"
                    variant="outline"
                    className={cn(
                        "h-8 w-8 rounded-full",
                        activeIndex === index && "bg-primary text-primary-foreground"
                    )}
                    onClick={() => handleCardClick(index)}
                >
                    {index + 1}
                </Button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
