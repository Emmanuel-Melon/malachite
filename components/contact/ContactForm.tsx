import React from 'react';
import { ArrowRight } from "lucide-react";
import { MyButton } from "@/components/atoms/button";

export const ContactForm = () => {
  return (
    <div className="p-8 md:p-12 rounded-[3rem] bg-[#fcfcfd] border border-border/40 shadow-[rgba(45,35,66,0.3)_0_2px_4px,rgba(45,35,66,0.2)_0_7px_13px_-3px,#d6d6e7_0_-3px_0_inset]">
      <form className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] tracking-[.3em] uppercase text-muted-foreground ml-2">full name</label>
            <input type="text" className="w-full h-14 px-6 rounded-2xl bg-secondary/50 border border-transparent focus:border-primary/20 outline-none transition-all" placeholder="john doe" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] tracking-[.3em] uppercase text-muted-foreground ml-2">email address</label>
            <input type="email" className="w-full h-14 px-6 rounded-2xl bg-secondary/50 border border-transparent focus:border-primary/20 outline-none transition-all" placeholder="john@example.com" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] tracking-[.3em] uppercase text-muted-foreground ml-2">subject</label>
          <select className="w-full h-14 px-6 rounded-2xl bg-secondary/50 border border-transparent focus:border-primary/20 outline-none transition-all appearance-none cursor-pointer">
            <option>general inquiry</option>
            <option>workplace programs</option>
            <option>clinical services</option>
            <option>research partnership</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] tracking-[.3em] uppercase text-muted-foreground ml-2">your message</label>
          <textarea rows={5} className="w-full p-6 rounded-2xl bg-secondary/50 border border-transparent focus:border-primary/20 outline-none transition-all resize-none" placeholder="how can we support you?"></textarea>
        </div>

        <MyButton className="w-full py-8 text-lg rounded-2xl shadow-[rgba(45,35,66,0.3)_0_2px_4px,rgba(45,35,66,0.2)_0_7px_13px_-3px,#000000_0_-2px_0_inset]">
          send message
          <ArrowRight className="ml-2 w-5 h-5" />
        </MyButton>
      </form>
    </div>
  );
};
