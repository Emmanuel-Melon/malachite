import { 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Handshake, 
} from "lucide-react";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { OverlappingImages } from "@/components/molecules/OverlappingImages";
import { FocusItem } from "@/components/molecules/FocusItem";

const valuesData = [
  {
    title: "Client Uniqueness",
    description: "We believe that while human experiences may share similarities, each individual is uniquely designed, endowed with purpose, and enriched for relationships and community.",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Sustained Healing",
    description: "We encourage both our team and clients to explore the optimal path to sustained healing and recovery, recognizing that this journey varies for each individual based on their resources and circumstances.",
    icon: Sparkles,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Excellence in Service",
    description: "Our commitment is to consistently deliver an exceptional experience, bringing our A-game at all times. We consider it an honor to serve our clients and express gratitude.",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Collaboration",
    description: "Embracing the belief in the strength of collaboration, we actively engage with like-minded individuals and organizations to enhance our clients' experiences.",
    icon: Handshake,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  }
];

export const CorporateCulture = () => {
  return (
    <section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 space-y-12">
            <SectionHeader 
              label="OUR ETHOS"
              title="Corporate Culture"
              gradientText="& Values."
            />

            <div className="space-y-8">
              {valuesData.map((item, index) => (
                <FocusItem 
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

          </div>
          <div className="w-full lg:w-1/2">
            <OverlappingImages
              backImage="/image2.jpg"
              backAlt="Our Culture"
              frontImage="/image.webp"
              frontAlt="Team Collaboration"
              className="h-[500px] md:h-[700px]"
            />
          </div>

        </div>
    </section>
  );
};