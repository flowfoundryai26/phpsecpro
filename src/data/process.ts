import { MagnifyingGlass, Bug, ShieldCheck, ChartBar } from "@phosphor-icons/react/dist/ssr";
import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Website Analysis",
    description: "We scan and identify security issues.",
    icon: MagnifyingGlass,
  },
  {
    number: "02",
    title: "Fix & Clean",
    description: "We remove malware and patch vulnerabilities.",
    icon: Bug,
  },
  {
    number: "03",
    title: "Secure & Optimize",
    description: "We harden your website and server.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Ongoing Protection",
    description: "Ongoing monitoring and maintenance.",
    icon: ChartBar,
  },
];
