import type { Program } from "../programs.types";

export const workplace: Omit<Program, "partners"> = {
  gradientText: "Services.",
  image: "/workplace-wellness.jpg",
  label: "CORPORATE",
  quote:
    "WHO adds that globally, an estimated 12 billion working days are lost every year to depression and anxiety for US$ 1 trillion per year in lost productivity.",
  description:
    "Decent work is good for mental health. According to the World Health Organization (WHO), poor working environments—including discrimination and inequality, excessive workloads, low job control, and job insecurity—pose a risk to mental health.",
  title: "Workplace Mental Health",
  sections: [
    {
      bg: "bg-amber-500/10",
      color: "text-amber-600",
      id: "A",
      icon: "UserCircle",
      title: "Services directed towards individual employees",
      points: [
        {
          desc: "We provide tailored treatment for depression, anxiety, burnout, and complex mental health issues through in-person or digital platforms.",
          title: "Individual Counselling Sessions",
        },
        {
          desc: "Support for employees caring for loved ones with mental illness with disease-relevant education and coping strategies.",
          title: "Family support",
        },
        {
          desc: "Collaboration with health service providers to ensure safety and dignified treatment during emergencies.",
          title: "Support for Psychiatric Emergencies",
        },
      ],
    },
    {
      bg: "bg-blue-500/10",
      color: "text-blue-600",
      id: "B",
      icon: "Users",
      title: "Services directed towards teams/departments",
      points: [
        {
          desc: "Identifying areas for personal and team development. The Chaplain visit addresses challenges like burnout and interpersonal conflicts.",
          title: "Workplace chaplain services",
        },
        {
          desc: "Combining team building and therapeutic approaches to support teams struggling with poor dynamics.",
          title: "Meaningful team conversations",
        },
      ],
    },
    {
      bg: "bg-emerald-500/10",
      color: "text-emerald-600",
      id: "C",
      icon: "TrendingUp",
      title: "Services to support strategic direction",
      points: [
        {
          desc: "Talks on emotional intelligence, nutrition, and leadership to improve emotional literacy and build resilience.",
          title: "Routine Mental Health Talks",
        },
        {
          desc: "Training and supervising peer counselors to help identify struggling staff and deliver psychological first-aid.",
          title: "Peer Mental Health Support",
        },
        {
          desc: "Reviewing strategic objectives through a mental health lens and creating indicators within risk frameworks.",
          title: "Strategic Mental Health",
        },
      ],
    },
  ],
};
