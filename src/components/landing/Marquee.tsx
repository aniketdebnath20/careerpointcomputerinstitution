"use client";

import { motion } from "framer-motion";

const marqueeContent = [
  "Limited Time Offer: Get 50% off on all courses! Book a free consultation now.",
  "New batches starting soon.",
  "Join thousands of successful graduates. Your new career starts here.",
];

export default function Marquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full  overflow-x-hidden text-primary-foreground py-3"
    >
      <div className="flex animate-marquee-infinite whitespace-nowrap">
        {[...marqueeContent, ...marqueeContent].map((text, index) => (
          <span key={index} className="mx-4 text-sm font-medium">
            {text}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
