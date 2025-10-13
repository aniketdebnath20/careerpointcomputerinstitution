"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex overflow-x-hidden xl:mx-auto text-primary-foreground py-3"
    >
      <div className="animate-marquee-slow whitespace-nowrap">
        <span className="mx-4 text-sm font-medium">
          Limited Time Offer: Get 50% off on all courses! Book a free consultation now.
        </span>
        <span className="mx-4 text-sm font-medium">
          New batches starting soon.
        </span>
        <span className="mx-4 text-sm font-medium">
          Join thousands of successful graduates. Your new career starts here.
        </span>
      </div>
      <div className="absolute top-0 animate-marquee2-slow whitespace-nowrap py-3">
        <span className="mx-4 text-sm font-medium">
          Limited Time Offer: Get 50% off on all courses! Book a free consultation now.
        </span>
        <span className="mx-4 text-sm font-medium">
          New batches starting soon.
        </span>
        <span className="mx-4 text-sm font-medium">
          Join thousands of successful graduates. Your new career starts here.
        </span>
      </div>
    </motion.div>
  );
}
