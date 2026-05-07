import { Mail, Phone, MapPin } from "lucide-react";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section>
      <ContactHeader />

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <ContactInfoCard 
                icon={MapPin}
                title="our location"
                detail="main street, clinical district, suite 400"
                subDetail="available for in-person consultations"
              />
              <ContactInfoCard 
                icon={Mail}
                title="email us"
                detail="care@malachitemedical.com"
                subDetail="we respond within 24 business hours"
              />
              <ContactInfoCard 
                icon={Phone}
                title="call support"
                detail="+1 (555) 234-8890"
                subDetail="mon - fri: 8am to 6pm"
              />

            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </section>
  );
}