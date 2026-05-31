import { ArrowRight } from "lucide-react";
import { MyButton } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Select } from "@/components/atoms/select";
import { Textarea } from "@/components/atoms/textarea";
import { FormControl } from "@/components/molecules/FormControl";

export const ContactForm = () => {
  return (
    <div className="w-full max-w-2xl">
      <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          <FormControl label="Full Name">
            <Input placeholder="John Doe" type="text" />
          </FormControl>

          <FormControl label="Email Address">
            <Input placeholder="john@example.com" type="email" />
          </FormControl>
        </div>

        <FormControl label="Subject">
          <Select>
            <option>General Inquiry</option>
            <option>Workplace Wellness</option>
            <option>School Outreach</option>
            <option>Clinical Innovation</option>
          </Select>
        </FormControl>

        <FormControl label="Your Message">
          <Textarea placeholder="How can we support you?" rows={4} />
        </FormControl>

        <div>
          <MyButton className="group" size="lg">
            Send Message
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </MyButton>
        </div>
      </form>
    </div>
  );
};
