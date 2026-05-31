import type {
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
    "redefine your path to sustained well-being with personalized recovery and integrated community support.",
  subtitles: [
    "We offer you a safe space to explore and learn",
    "Discover a path to mental well-being",
    "We are committed to support your journey to mental well-being",
  ],
};

const focusAreas: FocusArea[] = [
  {
    description:
      "Gaining insight into the mental condition to identify root causes and specific challenges.",
    iconName: "search",
    tag: "FOCUS 01",
    title: "Gain Insight",
  },
  {
    description:
      "Developing strategies to develop and maintain wellbeing, and building mental and spiritual muscle.",
    iconName: "crown",
    tag: "FOCUS 02",
    title: "Develop Strategy",
  },
  {
    description:
      "Achieving a sustainable recovery through core activities including treatment, training, and research.",
    iconName: "dumbbell",
    tag: "FOCUS 03",
    title: "Sustainable Recovery",
  },
];

const homePrograms: HomeProgram[] = [
  {
    description:
      "Supporting leadership teams to understand the critical impact of mental health on organizational objectives and productivity.",
    iconName: "building-2",
    id: "workplace",
    title: "Workplace Wellness",
  },
  {
    description:
      "Offering counseling services and emotional literacy programs tailored for students and educators in need of support.",
    iconName: "graduation-cap",
    id: "school",
    title: "School Outreach",
  },
];

const objectives: Objective[] = [
  {
    description:
      "develop, test, and adapt therapeutic approaches for treating mental health problems.",
    iconName: "flask-conical",
    id: 1,
    title: "clinical innovation",
  },
  {
    description:
      "provide a wide range of mental health services including awareness, treatment, and referrals through outreach programs.",
    iconName: "heart-handshake",
    id: 2,
    title: "service delivery",
  },
  {
    description:
      "train human resource professionals, business owners, teachers, and community workers on relevant mental health topics.",
    iconName: "graduation-cap",
    id: 3,
    title: "capacity building",
  },
  {
    description:
      "conduct research and evaluations to document the effectiveness of the approaches developed.",
    iconName: "bar-chart-3",
    id: 4,
    title: "evidence & research",
  },
];

const events: Event[] = [
  {
    day: "18",
    description:
      "equipping corporate managers with psychological safety frameworks, resilient team building blueprints, and stress reduction models.",
    location: "Kampala Serena Hotel & Online",
    month: "Jun",
    tag: "Workplace",
    time: "09:00 AM - 04:00 PM EAT",
    title: "Mental Health Leadership Summit",
  },
  {
    day: "05",
    description:
      "a practical therapy intensive detailing emotional regulation strategies, mindfulness systems, and peer accountability frameworks.",
    location: "Malachite Center Main Hall",
    month: "Jul",
    tag: "Community",
    time: "02:00 PM - 06:00 PM EAT",
    title: "Intentional Living Workshop",
  },
  {
    day: "22",
    description:
      "tailored mental health panels designed exclusively for educators, youth counselors, and school community administrators.",
    location: "Virtual (Zoom Session)",
    month: "Jul",
    tag: "Education",
    time: "10:00 AM - 01:00 PM EAT",
    title: "Youth Emotional Literacy Forum",
  },
];

const testimonials: Testimonial[] = [
  {
    author: "Sarah Namubiru",
    quote:
      "the workplace wellness program completely shifted our corporate climate. our management team now has concrete strategies to prioritize and support psychological safety.",
    role: "HR Director, Apex Group",
  },
  {
    author: "David Ochieng",
    quote:
      "malachite's school outreach initiative gave our student body access to emotional literacy framework when we needed it most. their clinical approach is incredibly warm.",
    role: "Head Teacher, Oakwood Academy",
  },
  {
    author: "Michael Mwangi",
    quote:
      "gaining true clinical insight into my recovery journey gave me sustainable strategies that changed everything. the ongoing community support is unmatched.",
    role: "Outpatient Alumnus",
  },
  {
    author: "Amina Ssekandi",
    quote:
      "the team at malachite understood our school's unique challenges. students and staff alike felt genuinely heard and supported throughout the entire program.",
    role: "School Counselor, Kampala Parents",
  },
  {
    author: "James Otieno",
    quote:
      "our employees have reported measurable improvements in focus and morale. malachite's facilitators are professional, empathetic, and deeply knowledgeable.",
    role: "Operations Lead, Stanbic Group",
  },
  {
    author: "Grace Nakato",
    quote:
      "i was skeptical at first, but the structured approach to recovery gave me clarity i hadn't felt in years. i recommend malachite to anyone navigating a difficult season.",
    role: "Individual Client",
  },
];

const heroGridItems: HeroGridItem[] = [
  {
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
