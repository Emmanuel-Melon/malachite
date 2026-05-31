import type { Program } from "../programs.types";

export const awareness: Program = {
  label: "Awareness",
  title: "Raising Awareness",
  gradientText: "& Education.",
  image: "/awareness.jpg",
  description:
    "The Malachite Center utilizes social media and digital platforms to raise awareness about mental health, conducting monthly education series lasting between 7-31 days.",
  quote:
    "We believe in the collective synergy to build a broader audience, leading to a wider catchment of viewership and listenership.",
  partners: [],
  sections: [
    {
      id: "1",
      title: "Digital Media & Content",
      icon: "Megaphone",
      color: "text-cyan-600",
      bg: "bg-cyan-500/10",
      points: [
        {
          id: "1",
          title: "Malachite Media (YouTube)",
          desc: "A dedicated channel hosting diverse programs developed by our organization and content from other mental health-focused enthusiasts.",
        },
        {
          id: "2",
          title: "Social Media Education",
          desc: "Concurrent monthly mental health series across all social accounts to promote literacy and address misconceptions.",
        },
      ],
    },
    {
      id: "2",
      title: "Community & Corporate Engagement",
      icon: "Users",
      color: "text-cyan-600",
      bg: "bg-cyan-500/10",
      points: [
        {
          id: "1",
          title: "Safe Space Communities",
          desc: "Dedicated WhatsApp and Facebook communities to foster discussion, challenge negative perceptions, and learn from those in recovery.",
        },
        {
          id: "2",
          title: "In-house Corporate Series",
          desc: "Assisting companies in developing educational campaigns tailored to their staff's specific needs via internal intranets or WhatsApp groups.",
        },
      ],
    },
  ],
};
