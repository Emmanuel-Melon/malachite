"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Select } from "@/components/atoms/select";
import { Textarea } from "@/components/atoms/textarea";
import { FormControl } from "@/components/molecules/FormControl";
import { fadeUp, staggerContainer } from "@/lib/motion";

export const ContactForm = () => {
  const animationProps = useScrollAnimation();

  return (
    <div className="w-full max-w-2xl">
      <motion.form
        className="space-y-10"
        variants={staggerContainer}
        {...animationProps}
        onSubmit={(e) => e.preventDefault()}
      >
        <motion.div className="grid gap-x-12 gap-y-10 md:grid-cols-2" variants={staggerContainer}>
          <motion.div variants={fadeUp}>
            <FormControl label="Full Name">
              <Input placeholder="John Doe" type="text" />
            </FormControl>
          </motion.div>

          <motion.div variants={fadeUp}>
            <FormControl label="Email Address">
              <Input placeholder="john@example.com" type="email" />
            </FormControl>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <FormControl label="Subject">
            <Select>
              <option>General Inquiry</option>
              <option>Workplace Wellness</option>
              <option>School Outreach</option>
              <option>Clinical Innovation</option>
            </Select>
          </FormControl>
        </motion.div>

        <motion.div variants={fadeUp}>
          <FormControl label="Your Message">
            <Textarea placeholder="How can we support you?" rows={4} />
          </FormControl>
        </motion.div>

        <motion.div variants={fadeUp}>
          <MyButton className="group" size="lg">
            Send Message
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </MyButton>
        </motion.div>
      </motion.form>
    </div>
  );
};
