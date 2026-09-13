import type { Metadata } from "next";
import { PenTool, Receipt, Wrench, ShieldCheck } from "lucide-react";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import CoreValues from "@/components/about/CoreValues";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import Accreditations from "@/components/about/Accreditations";
import Testimonials from "@/components/about/Testimonials";
import ConsultationCallout from "@/components/about/ConsultationCallout";
import ContactCtaBanner from "@/components/shared/ContactCtaBanner";

export const metadata: Metadata = {
  title: "About Us | 1st Building Contractors Ltd",
  description:
    "15+ years of London construction excellence — fixed-price tenders, dedicated project managers, and a 10-year structural warranty on every build.",
};

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Detailed Survey & Scoping",
    description:
      "On-site architectural appraisal, laser measurements, review of structural calculations, and building control requirements.",
    icon: PenTool,
  },
  {
    number: "02",
    title: "Fixed Proposal & Contract",
    description:
      "Comprehensive transparent tender specifying scope, schedule of payments, materials schedule, and insurance details.",
    icon: Receipt,
  },
  {
    number: "03",
    title: "Construction & Management",
    description:
      "Site mobilization with full safety protocols, dedicated project foremen, weekly milestone updates, and municipal sign-offs.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Handover & 10-Yr Warranty",
    description:
      "Zero-snag final handover, building compliance certificates, maintenance logs, and 10-year insurance backed guarantee.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <CoreValues />
      <ProcessTimeline
        eyebrow="Standard of Execution"
        title="Our Seamless 4-Stage Build Process"
        description="Structured milestones ensure clarity, quality inspections, and agreed delivery times from tender to handover."
        steps={PROCESS_STEPS}
        tone="light"
      />
      <Accreditations />
      <Testimonials />
      <ConsultationCallout />
      <ContactCtaBanner />
    </>
  );
}
