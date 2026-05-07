import { ArrowRight } from "lucide-react";
import { MyButton } from "@/components/atoms/button";

export const ContactForm = () => {
  return (
    <div className="w-full max-w-2xl">
      <form className="space-y-10">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="space-y-3">
            <label className="text-[10px] tracking-[.4em] uppercase text-muted-foreground font-bold">
              full name
            </label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-border/60 py-3 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 text-lg lowercase" 
              placeholder="john doe" 
            />
          </div>
          
          <div className="space-y-3">
            <label className="text-[10px] tracking-[.4em] uppercase text-muted-foreground font-bold">
              email address
            </label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-border/60 py-3 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 text-lg lowercase" 
              placeholder="john@example.com" 
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <label className="text-[10px] tracking-[.4em] uppercase text-muted-foreground font-bold">
            subject
          </label>
          <select className="w-full bg-transparent border-b border-border/60 py-3 focus:border-primary outline-none transition-all appearance-none cursor-pointer text-lg lowercase italic text-muted-foreground/60">
            <option>general inquiry</option>
            <option>workplace wellness</option>
            <option>school outreach</option>
            <option>clinical innovation</option>
          </select>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] tracking-[.4em] uppercase text-muted-foreground font-bold">
            your message
          </label>
          <textarea 
            rows={4} 
            className="w-full bg-transparent border-b border-border/60 py-3 focus:border-primary outline-none transition-all resize-none placeholder:text-muted-foreground/30 text-lg lowercase" 
            placeholder="how can we support you?"
          ></textarea>
        </div>

        <div className="pt-6">
          <MyButton size="lg" className="group">
            send message
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </MyButton>
        </div>
      </form>
    </div>
  );
};