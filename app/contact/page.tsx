import { Mail, Phone, MapPin } from "lucide-react";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { Separator } from "@/components/molecules/separator";

const CONTACT_METHODS = [
  {
    icon: MapPin,
    title: "our location",
    detail: "main street, clinical district, suite 400",
    subDetail: "available for in-person consultations",
  },
  {
    icon: Mail,
    title: "email us",
    detail: "care@malachitemedical.com",
    subDetail: "we respond within 24 business hours",
  },
  {
    icon: Phone,
    title: "call support",
    detail: "+1 (555) 234-8890",
    subDetail: "mon - fri: 8am to 6pm",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-24 md:space-y-0">
      <ContactHeader />
      <section>
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            {CONTACT_METHODS.map((method, index) => (
              <ContactInfoCard 
                key={index}
                icon={method.icon}
                title={method.title}
                detail={method.detail}
                subDetail={method.subDetail}
              />
            ))}
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}