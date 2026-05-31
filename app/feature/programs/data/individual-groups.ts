import type { Program } from "../programs.types";

export const individualGroups: Omit<Program, "partners"> = {
  gradientText: "and Groups.",
  image: "/group-therapy.jpg",
  label: "COMMUNITY",
  quote:
    "We work with the client's health service provider and referral networks to ensure clients are safe and treated with dignity and respect.",
  description:
    "Tailored treatment for depression, anxiety, Post Traumatic Stress Disorder, and other mental health conditions, provided in person, through digital platforms, or phone conversations.",
  title: "Services for Individual",
  sections: [
    {
      bg: "bg-rose-500/10",
      color: "text-rose-600",
      id: "1",
      icon: "UserCircle",
      title: "Individual Counselling Sessions",
      points: [
        {
          desc: "Counseling for clients with complex conditions like schizophrenia, bipolar, and substance use, including client advocacy and mediation.",
          title: "Complex Condition Support",
        },
        {
          desc: "Referral to quality specialized mental health services and coaching for adolescents and adults with ADHD.",
          title: "Specialized Referrals",
        },
      ],
    },
    {
      bg: "bg-rose-500/10",
      color: "text-rose-600",
      id: "2",
      icon: "UserPlus",
      title: "Group Sessions",
      points: [
        {
          desc: "Tailored sessions to develop emotional literacy and treat depression and anxiety among young adults.",
          title: "Young Adult Literacy",
        },
        {
          desc: "An in-person session for senior citizens providing intellectually stimulating conversation, debate, and community building.",
          title: "Elders' Forum",
        },
      ],
    },
    {
      bg: "bg-rose-500/10",
      color: "text-rose-600",
      id: "3",
      icon: "HeartHandshake",
      title: "Family Support & Emergencies",
      points: [
        {
          desc: "Educating family members on signs/symptoms, handling secondary trauma, and managing family dynamics.",
          title: "Caregiver Education",
        },
        {
          desc: "Working with referral networks for both in and out-patient services to ensure dignity during emergencies.",
          title: "Psychiatric Emergency Support",
        },
      ],
    },
  ],
};
