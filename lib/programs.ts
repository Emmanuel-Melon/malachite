import {
    UserCircle,
    Users,
    TrendingUp,
    School,
    UserPlus,
    Megaphone,
    Stethoscope,
    HeartHandshake,
    MessageSquare,
    ShieldAlert
} from "lucide-react";

export const PROGRAMS_DATA = {
    workplace: {
        label: "CORPORATE",
        title: "Workplace Mental Health",
        gradientText: "Services.",
        image: "/workplace-wellness.jpg",
        description: "Decent work is good for mental health. According to the World Health Organization (WHO), poor working environments—including discrimination and inequality, excessive workloads, low job control, and job insecurity—pose a risk to mental health.",
        quote: "WHO adds that globally, an estimated 12 billion working days are lost every year to depression and anxiety for US$ 1 trillion per year in lost productivity.",
        partners: [
            { name: "Stanbic Group" },
            { name: "ABSA" },
            { name: "NCBA" },
            { name: "KCB" },
            { name: "IDI" },
            { name: "Epicenter" },
            { name: "I&M Bank" },
            { name: "KPMG" },
            { name: "Baylor" },
            { name: "CFAO" },
            { name: "Total" },
            { name: "DTB" },
            { name: "Electricity Regulatory Authority" },
            { name: "MKOPA" },
            { name: "MSF - SUKA" },
            { name: "C-CARE" },
            { name: "Eagle Air" },
            { name: "Future Options" },
            { name: "NWSC" },
            { name: "NSSF" }
        ],
        sections: [
            {
                id: "A",
                title: "Services directed towards individual employees",
                icon: UserCircle,
                color: "text-amber-600",
                bg: "bg-amber-500/10",
                points: [
                    {
                        title: "Individual Counselling Sessions",
                        desc: "We provide tailored treatment for depression, anxiety, burnout, and complex mental health issues through in-person or digital platforms."
                    },
                    {
                        title: "Family support",
                        desc: "Support for employees caring for loved ones with mental illness with disease-relevant education and coping strategies."
                    },
                    {
                        title: "Support for Psychiatric Emergencies",
                        desc: "Collaboration with health service providers to ensure safety and dignified treatment during emergencies."
                    }
                ]
            },
            {
                id: "B",
                title: "Services directed towards teams/departments",
                icon: Users,
                color: "text-blue-600",
                bg: "bg-blue-500/10",
                points: [
                    {
                        title: "Workplace chaplain services",
                        desc: "Identifying areas for personal and team development. The Chaplain visit addresses challenges like burnout and interpersonal conflicts."
                    },
                    {
                        title: "Meaningful team conversations",
                        desc: "Combining team building and therapeutic approaches to support teams struggling with poor dynamics."
                    }
                ]
            },
            {
                id: "C",
                title: "Services to support strategic direction",
                icon: TrendingUp,
                color: "text-emerald-600",
                bg: "bg-emerald-500/10",
                points: [
                    {
                        title: "Routine Mental Health Talks",
                        desc: "Talks on emotional intelligence, nutrition, and leadership to improve emotional literacy and build resilience."
                    },
                    {
                        title: "Peer Mental Health Support",
                        desc: "Training and supervising peer counselors to help identify struggling staff and deliver psychological first-aid."
                    },
                    {
                        title: "Strategic Mental Health",
                        desc: "Reviewing strategic objectives through a mental health lens and creating indicators within risk frameworks."
                    }
                ]
            }
        ]
    },
    school: {
        label: "EDUCATION",
        title: "School-Based Mental",
        gradientText: "Health Services.",
        image: "/school-wellness.jpg",
        description: "According to the World Health Organization, one in seven 10-19-year-olds experiences a mental disorder, accounting for 13% of the global burden of disease in this age group globally.",
        quote: "Investment in adolescent mental health has far-reaching results for the future of any community.",
        partners: [
            { name: "Pine International School" },
            { name: "Peak Primary Schools" },
            { name: "LIDRI International Schools" }
        ],
        sections: [
            {
                id: "A",
                title: "Services directed towards the individual",
                icon: UserCircle,
                color: "text-amber-600",
                bg: "bg-amber-500/10",
                points: [
                    {
                        title: "Individual Counselling Sessions",
                        desc: "Working in partnership with parents/guardians and school management to provide tailored treatment for depression, anxiety, burnout, and complex mental health issues."
                    },
                    {
                        title: "Family support",
                        desc: "Supporting parents and guardians caring for loved ones with mental illness with disease-relevant education, coping strategies, and identifying quality primary services."
                    },
                    {
                        title: "Support for Psychiatric Emergencies",
                        desc: "Collaborating with health service providers to ensure safety and dignified treatment for students during acute emergencies."
                    }
                ]
            },
            {
                id: "B",
                title: "Other services for schools",
                icon: School,
                color: "text-indigo-600",
                bg: "bg-indigo-500/10",
                points: [
                    {
                        title: "School-Based Chaplain Services",
                        desc: "10-15 minute conversations with individual staff and students during routine school day visits to identify those who are struggling and encourage counseling."
                    },
                    {
                        title: "Emotional Literacy Program",
                        desc: "Using games to teach emotional literacy and spiritual intelligence, helping adolescents master and take charge of their mental health."
                    },
                    {
                        title: "Meaningful team conversations and problem-solving",
                        desc: "Fusing team building and therapeutic approaches to help school teams identify behaviors that trigger mental health challenges and promote healthy dynamics."
                    }
                ]
            }
        ]
    },
    individual_groups: {
        label: "COMMUNITY",
        title: "Services for Individual",
        gradientText: "and Groups.",
        image: "/group-therapy.jpg",
        description: "Tailored treatment for depression, anxiety, Post Traumatic Stress Disorder, and other mental health conditions, provided in person, through digital platforms, or phone conversations.",
        quote: "We work with the client's health service provider and referral networks to ensure clients are safe and treated with dignity and respect.",
        partners: [
            { name: "Intentional Living" },
            { name: "Virtuous Woman Entebbe" }
        ],
        sections: [
            {
                id: "1",
                title: "Individual Counselling Sessions",
                icon: UserCircle,
                color: "text-rose-600",
                bg: "bg-rose-500/10",
                points: [
                    {
                        title: "Complex Condition Support",
                        desc: "Counseling for clients with complex conditions like schizophrenia, bipolar, and substance use, including client advocacy and mediation."
                    },
                    {
                        title: "Specialized Referrals",
                        desc: "Referral to quality specialized mental health services and coaching for adolescents and adults with ADHD."
                    }
                ]
            },
            {
                id: "2",
                title: "Group Sessions",
                icon: UserPlus,
                color: "text-rose-600",
                bg: "bg-rose-500/10",
                points: [
                    {
                        title: "Young Adult Literacy",
                        desc: "Tailored sessions to develop emotional literacy and treat depression and anxiety among young adults."
                    },
                    {
                        title: "Elders' Forum",
                        desc: "An in-person session for senior citizens providing intellectually stimulating conversation, debate, and community building."
                    }
                ]
            },
            {
                id: "3",
                title: "Family Support & Emergencies",
                icon: HeartHandshake,
                color: "text-rose-600",
                bg: "bg-rose-500/10",
                points: [
                    {
                        title: "Caregiver Education",
                        desc: "Educating family members on signs/symptoms, handling secondary trauma, and managing family dynamics."
                    },
                    {
                        title: "Psychiatric Emergency Support",
                        desc: "Working with referral networks for both in and out-patient services to ensure dignity during emergencies."
                    }
                ]
            }
        ]
    },
    awareness: {
        label: "Awareness",
        title: "Raising Awareness",
        gradientText: "& Education.",
        image: "/awareness.jpg",
        description: "The Malachite Center utilizes social media and digital platforms to raise awareness about mental health, conducting monthly education series lasting between 7-31 days.",
        quote: "We believe in the collective synergy to build a broader audience, leading to a wider catchment of viewership and listenership.",
        partners: [],
        sections: [
            {
                id: "1",
                title: "Digital Media & Content",
                icon: Megaphone,
                color: "text-cyan-600",
                bg: "bg-cyan-500/10",
                points: [
                    {
                        title: "Malachite Media (YouTube)",
                        desc: "A dedicated channel hosting diverse programs developed by our organization and content from other mental health-focused enthusiasts."
                    },
                    {
                        title: "Social Media Education",
                        desc: "Concurrent monthly mental health series across all social accounts to promote literacy and address misconceptions."
                    }
                ]
            },
            {
                id: "2",
                title: "Community & Corporate Engagement",
                icon: Users,
                color: "text-cyan-600",
                bg: "bg-cyan-500/10",
                points: [
                    {
                        title: "Safe Space Communities",
                        desc: "Dedicated WhatsApp and Facebook communities to foster discussion, challenge negative perceptions, and learn from those in recovery."
                    },
                    {
                        title: "In-house Corporate Series",
                        desc: "Assisting companies in developing educational campaigns tailored to their staff's specific needs via internal intranets or WhatsApp groups."
                    }
                ]
            }
        ]
    }
};