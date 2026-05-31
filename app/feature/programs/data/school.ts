import type { Program } from "../programs.types";

export const school: Omit<Program, "partners"> = {
  gradientText: "Health Services.",
  image: "/school-wellness.jpg",
  label: "EDUCATION",
  quote:
    "Investment in adolescent mental health has far-reaching results for the future of any community.",
  description:
    "According to the World Health Organization, one in seven 10-19-year-olds experiences a mental disorder, accounting for 13% of the global burden of disease in this age group globally.",
  title: "School-Based Mental",
  sections: [
    {
      bg: "bg-amber-500/10",
      color: "text-amber-600",
      id: "A",
      icon: "UserCircle",
      title: "Services directed towards the individual",
      points: [
        {
          desc: "Working in partnership with parents/guardians and school management to provide tailored treatment for depression, anxiety, burnout, and complex mental health issues.",
          title: "Individual Counselling Sessions",
        },
        {
          desc: "Supporting parents and guardians caring for loved ones with mental illness with disease-relevant education, coping strategies, and identifying quality primary services.",
          title: "Family support",
        },
        {
          desc: "Collaborating with health service providers to ensure safety and dignified treatment for students during acute emergencies.",
          title: "Support for Psychiatric Emergencies",
        },
      ],
    },
    {
      bg: "bg-indigo-500/10",
      color: "text-indigo-600",
      id: "B",
      icon: "School",
      title: "Other services for schools",
      points: [
        {
          desc: "10-15 minute conversations with individual staff and students during routine school day visits to identify those who are struggling and encourage counseling.",
          title: "School-Based Chaplain Services",
        },
        {
          desc: "Using games to teach emotional literacy and spiritual intelligence, helping adolescents master and take charge of their mental health.",
          title: "Emotional Literacy Program",
        },
        {
          desc: "Fusing team building and therapeutic approaches to help school teams identify behaviors that trigger mental health challenges and promote healthy dynamics.",
          title: "Meaningful team conversations and problem-solving",
        },
      ],
    },
  ],
};
