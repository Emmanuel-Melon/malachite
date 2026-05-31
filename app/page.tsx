import { Hero } from "@/components/hero";
import { OurPrograms } from "@/components/our-programs";
import { MentalHealthApproach } from "@/components/mental-health-approach";
import { OurObjectives } from "@/components/our-objectives";
import { ValuesSection } from "@/components/about/ValuesSection";
import { Separator } from "@/components/molecules/separator";
import { Partners } from "@/components/partners";
import { Testimonials } from "@/components/Testimoials";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { PROGRAMS_DATA } from "@/lib/programs";

interface TestimonialData {
  quote: string;
  author: string;
  role: string;
}

const testimonials: TestimonialData[] = [
  {
    quote: "the workplace wellness program completely shifted our corporate climate. our management team now has concrete strategies to prioritize and support psychological safety.",
    author: "Sarah Namubiru",
    role: "HR Director, Apex Group",
  },
  {
    quote: "malachite's school outreach initiative gave our student body access to emotional literacy framework when we needed it most. their clinical approach is incredibly warm.",
    author: "David Ochieng",
    role: "Head Teacher, Oakwood Academy",
  },
  {
    quote: "gaining true clinical insight into my recovery journey gave me sustainable strategies that changed everything. the ongoing community support is unmatched.",
    author: "Michael Mwangi",
    role: "Outpatient Alumnus",
  },
  {
    quote: "the team at malachite understood our school's unique challenges. students and staff alike felt genuinely heard and supported throughout the entire program.",
    author: "Amina Ssekandi",
    role: "School Counselor, Kampala Parents",
  },
  {
    quote: "our employees have reported measurable improvements in focus and morale. malachite's facilitators are professional, empathetic, and deeply knowledgeable.",
    author: "James Otieno",
    role: "Operations Lead, Stanbic Group",
  },
  {
    quote: "i was skeptical at first, but the structured approach to recovery gave me clarity i hadn't felt in years. i recommend malachite to anyone navigating a difficult season.",
    author: "Grace Nakato",
    role: "Individual Client",
  },
];

export default function Home() {
  return (
    <section className="space-y-24 md:space-y-0">
      <Hero />
      <Partners items={Object.values(PROGRAMS_DATA).flatMap(program => program.partners || [])} />
      <MentalHealthApproach />
      <Separator />
      <ValuesSection />
      <Separator />
      <OurPrograms />
      <Separator />
      <OurObjectives />
      <Separator />
      <UpcomingEvents />
      <Separator />
      <Testimonials testimonials={testimonials} />
    </section>
  );
}
