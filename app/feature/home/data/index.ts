import type {
  CoreValue,
  Event,
  FocusArea,
  HeroData,
  HeroGridItem,
  HomeProgram,
  Objective,
  Testimonial,
} from "../home.types";

const heroData: HeroData = {
  description:
    "We are committed to restoring mental well being with evidence based conventional and biblical approaches.",
  subtitles: [
    "We offer you a safe space to explore and learn",
    "Discover a path to mental well-being",
    "We are committed to support your journey to mental well-being",
  ],
};

const focusAreas: FocusArea[] = [
  {
    id: "1",
    description:
      "Gaining insight into the mental condition to identify root causes and specific challenges.",
    iconName: "search",
    tag: "Area 01",
    title: "Gain Insight",
  },
  {
    id: "2",
    description:
      "Developing strategies to develop and maintain wellbeing, and building mental and spiritual muscle.",
    iconName: "crown",
    tag: "Area 02",
    title: "Develop Strategy",
  },
  {
    id: "3",
    description:
      "Achieving a sustainable recovery through core activities including treatment, training, and research.",
    iconName: "dumbbell",
    tag: "Area 03",
    title: "Sustainable Recovery",
  },
];

const homePrograms: HomeProgram[] = [
  {
    id: "program-workplace-wellness",
    description:
      "Supporting leadership teams to understand the critical impact of mental health on organizational objectives and productivity.",
    iconName: "building-2",
    title: "Workplace Wellness",
  },
  {
    id: "program-school-outreach",
    description:
      "Offering counseling services and emotional literacy programs tailored for students and educators in need of support.",
    iconName: "graduation-cap",
    title: "School Outreach",
  },
];

const objectives: Objective[] = [
  {
    id: "objective-clinical-innovation",
    description:
      "Develop, test, and adapt therapeutic approaches for treating mental health problems.",
    iconName: "flask-conical",
    title: "Clinical Innovation",
  },
  {
    id: "objective-service-delivery",
    description:
      "Provide a wide range of mental health services including awareness, treatment, and referrals through outreach programs.",
    iconName: "heart-handshake",
    title: "Service Delivery",
  },
  {
    id: "objective-capacity-building",
    description:
      "Train human resource professionals, business owners, teachers, and community workers on relevant mental health topics.",
    iconName: "graduation-cap",
    title: "Capacity Building",
  },
  {
    id: "objective-evidence-research",
    description:
      "Conduct research and evaluations to document the effectiveness of the approaches developed.",
    iconName: "bar-chart-3",
    title: "Evidence & Research",
  },
];

const events: Event[] = [
  {
    id: "event-leadership-summit",
    day: "18",
    description:
      "Equipping corporate managers with psychological safety frameworks, resilient team building blueprints, and stress reduction models.",
    location: "Kampala Serena Hotel & Online",
    month: "Jun",
    tag: "Workplace",
    time: "09:00 AM - 04:00 PM EAT",
    title: "Mental Health Leadership Summit",
  },
  {
    id: "event-intentional-living",
    day: "05",
    description:
      "A practical therapy intensive detailing emotional regulation strategies, mindfulness systems, and peer accountability frameworks.",
    location: "Malachite Center Main Hall",
    month: "Jul",
    tag: "Community",
    time: "02:00 PM - 06:00 PM EAT",
    title: "Intentional Living Workshop",
  },
  {
    id: "event-youth-literacy",
    day: "22",
    description:
      "Tailored mental health panels designed exclusively for educators, youth counselors, and school community administrators.",
    location: "Virtual (Zoom Session)",
    month: "Jul",
    tag: "Education",
    time: "10:00 AM - 01:00 PM EAT",
    title: "Youth Emotional Literacy Forum",
  },
];

const testimonials: Testimonial[] = [
  {
    id: "testimonial-sarah-namubiru",
    author: "Sarah Namubiru",
    quote:
      "The workplace wellness program completely shifted our corporate climate. Our management team now has concrete strategies to prioritize and support psychological safety.",
    role: "HR Director, Apex Group",
  },
  {
    id: "testimonial-david-ochieng",
    author: "David Ochieng",
    quote:
      "Malachite's school outreach initiative gave our student body access to emotional literacy framework when we needed it most. Their clinical approach is incredibly warm.",
    role: "Head Teacher, Oakwood Academy",
  },
  {
    id: "testimonial-michael-mwangi",
    author: "Michael Mwangi",
    quote:
      "Gaining true clinical insight into my recovery journey gave me sustainable strategies that changed everything. The ongoing community support is unmatched.",
    role: "Outpatient Alumnus",
  },
  {
    id: "testimonial-amina-ssekandi",
    author: "Amina Ssekandi",
    quote:
      "The team at malachite understood our school's unique challenges. Students and staff alike felt genuinely heard and supported throughout the entire program.",
    role: "School Counselor, Kampala Parents",
  },
  {
    id: "testimonial-james-otieno",
    author: "James Otieno",
    quote:
      "Our employees have reported measurable improvements in focus and morale. Malachite's facilitators are professional, empathetic, and deeply knowledgeable.",
    role: "Operations Lead, Stanbic Group",
  },
  {
    id: "testimonial-grace-nakato",
    author: "Grace Nakato",
    quote:
      "I was skeptical at first, but the structured approach to recovery gave me clarity I hadn't felt in years. I recommend Malachite to anyone navigating a difficult season.",
    role: "Individual Client",
  },
];

const heroGridItems: HeroGridItem[] = [
  {
    id: "hero-grid-clinical",
    alt: "clinical",
    aspect: "aspect-[3/4]",
    bottomPadding: "bottom-6 left-6",
    colSpan: "col-span-4",
    containerClass: "",
    gradientOpacity:
      "from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90",
    label: "clinical",
    rotate: "-rotate-3",
    src: "/father.jpg",
    zIndex: "z-10",
  },
  {
    id: "hero-grid-excellence",
    alt: "excellence",
    aspect: "aspect-square",
    bottomPadding: "bottom-8 left-8",
    colSpan: "col-span-4",
    containerClass: "border-[12px] border-white shadow-2xl",
    gradientOpacity: "from-black/80 via-transparent to-transparent opacity-40",
    label: "excellence",
    rotate: "rotate-3",
    src: "/family.jpg",
    zIndex: "z-20",
  },
  {
    id: "hero-grid-community",
    alt: "community",
    aspect: "aspect-[3/4]",
    bottomPadding: "bottom-6 left-6",
    colSpan: "col-span-4",
    containerClass: "",
    gradientOpacity:
      "from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90",
    label: "community",
    rotate: "-rotate-3",
    src: "/child.jpg",
    zIndex: "z-10",
  },
];

const coreValues: CoreValue[] = [
  {
    id: "core-value-recovery",
    title: "Sustainable Recovery",
    description:
      "We don't just treat symptoms; we build the foundations for long-term independence and mental resilience.",
    iconName: "heart",
  },
  {
    id: "core-value-community",
    title: "Integrated Community",
    description:
      "Healing happens in connection. Our programs bridge clinical care with real-world social integration.",
    iconName: "users",
  },
];

export async function getHeroGridItems(): Promise<HeroGridItem[]> {
  return heroGridItems;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

export async function getEvents(): Promise<Event[]> {
  return events;
}

export async function getObjectives(): Promise<Objective[]> {
  return objectives;
}

export async function getHeroData(): Promise<HeroData> {
  return heroData;
}

export async function getFocusAreas(): Promise<FocusArea[]> {
  return focusAreas;
}

export async function getHomePrograms(): Promise<HomeProgram[]> {
  return homePrograms;
}

export async function getCoreValues(): Promise<CoreValue[]> {
  return coreValues;
}
