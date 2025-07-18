interface Benefit {
  id: number
  title: string
  description: string
  iconSrc: string
}

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "Work on exciting problems and have real impact",
    description:
      "Join us in pushing the boundaries of what's possible at the intersection of cloud infrastructure and developer experience.",
    iconSrc: "/images/pages/careers/sections/rocket.svg",
  },
  {
    id: 2,
    title: "Growth opportunities in a fast-paced startup",
    description:
      "Develop your skills and career in a rapidly evolving environment with plenty of challenges.",
    iconSrc: "/images/pages/careers/sections/potted_plant.svg",
  },
  {
    id: 3,
    title: "Competitive compensation & stock options",
    description:
      "Share in the company's success with a comprehensive package that values your contributions.",
    iconSrc: "/images/pages/careers/sections/money_bag.svg",
  },
  {
    id: 4,
    title: "Regular company off-sites",
    description:
      "Connect with your teammates in person at our exciting global retreats.",
    iconSrc: "/images/pages/careers/sections/airplane_ticket.svg",
  },
  {
    id: 5,
    title: "Flexible holidays and paid time off",
    description:
      "We believe in work-life balance and trust you to manage your time effectively.",
    iconSrc: "/images/pages/careers/sections/beach_access.svg",
  },
  {
    id: 6,
    title: "Remote-first & async-friendly environment",
    description:
      "Work from anywhere in the world with a team that respects your timezone and schedule.",
    iconSrc: "/images/pages/careers/sections/public.svg",
  },
]
