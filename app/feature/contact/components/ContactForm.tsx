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
          <FormControl label="full name">
            <Input placeholder="john doe" type="text" />
          </FormControl>

          <FormControl label="email address">
            <Input placeholder="john@example.com" type="email" />
          </FormControl>
        </div>

        <FormControl label="subject">
          <Select>
            <option>general inquiry</option>
            <option>workplace wellness</option>
            <option>school outreach</option>
            <option>clinical innovation</option>
          </Select>
        </FormControl>

        <FormControl label="your message">
          <Textarea placeholder="how can we support you?" rows={4} />
        </FormControl>

        <div className="pt-6">
          <MyButton className="group" size="lg">
            send message
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </MyButton>
        </div>
      </form>
    </div>
  );
};
