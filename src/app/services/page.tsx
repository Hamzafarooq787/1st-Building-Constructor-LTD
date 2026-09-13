import type { Metadata } from "next";
import {
  Building2,
  Compass,
  Maximize2,
  ShieldCheck,
  Rows3,
  Home as HomeIcon,
  Bed,
  Wrench,
  HardHat,
  Layers,
  Mountain,
} from "lucide-react";
import ServicesIntro from "@/components/services/ServicesIntro";
import ServiceDetail from "@/components/services/ServiceDetail";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import ServicesFaq from "@/components/services/ServicesFaq";
import ContactCtaBanner from "@/components/shared/ContactCtaBanner";

export const metadata: Metadata = {
  title: "Our Services | 1st Building Contractors Ltd",
  description:
    "New builds, extensions, loft conversions, structural works and groundworks delivered across London and the Home Counties.",
};

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation & Feasibility",
    description:
      "On-site technical evaluation, reviewing architectural drawings, planning constraints, and budget expectations.",
    icon: Compass,
    tag: "Feasibility Audit",
  },
  {
    number: "02",
    title: "Fixed-Price Proposal",
    description:
      "Comprehensive schedule of works with fully transparent itemized line items, program timeline, and stage payment gates.",
    icon: Rows3,
    tag: "No Hidden Costs",
  },
  {
    number: "03",
    title: "Active Construction",
    description:
      "Full-time dedicated project manager on site, weekly photo progress reports, and strict health and safety adherence.",
    icon: HardHat,
    tag: "Dedicated PM",
  },
  {
    number: "04",
    title: "Sign-Off & Guarantee",
    description:
      "Building Control sign-off certificate issued, comprehensive snagging walkthrough, and 10-year structural warranty pack.",
    icon: ShieldCheck,
    tag: "10-Yr Warranty",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesIntro />

      <ServiceDetail
        id="new-builds"
        eyebrow="Service 01 — Ground-Up Construction"
        icon={Building2}
        title="New Builds & Turnkey Residential Homes"
        description="From single bespoke architect-designed residences to multi-unit luxury developments, we oversee complete lifecycle delivery. We work closely with leading London RIBA architects and structural engineers to bring ambitious blueprints to life."
        bullets={[
          "NHBC 10-Year Structural Warranty",
          "Energy-efficient EPC A-rated specs",
          "Full Site Management & CDM Compliant",
          "Turnkey Interior Fit-Out Included",
        ]}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBPC9wOB8csAmR9BIOzJJBWcxpzFrqC1xxuUbqWUFlyA0AwJxRTZEwN5Ao_WVclTcqiOVo4_uhGLqv43U4WB1pKT17zNQGIVagjodiFmS1RwagNNlE2aXtkl6pLM_5sQUIjzMyFT_2vqT7glVo-UONOuMcuDtFrp4oEU-4pgvjxJMYdT6eYC9CWPYBg7b5uP5tYEgNppw6GopAdeLwVIJ3OQlmR1Fts1WctwNT-2xHASmOBWLo2eneV"
        imageAlt="Modern multi-storey luxury London detached new build house with architectural brickwork"
        caseRef="Case Reference #NB-408"
        caseTitle="Bespoke 5-Bed Family Residence • Wimbledon SW19"
        caseIcon={Compass}
        ctaLabel="Enquire About New Builds"
      />

      <ServiceDetail
        id="extensions"
        eyebrow="Service 02 — Spatial Expansion"
        icon={Maximize2}
        title="Home Extensions & Architectural Living Spaces"
        description="Maximize your property's footprint and market valuation. We specialize in rear expansions, Victorian side returns, double-height extensions, and glazed garden rooms built with seamless aesthetic continuity to the existing property."
        bullets={[
          "Permitted Development & Planning Expertise",
          "Party Wall notice administration",
          "Structural Steel Beam Integrations",
          "Open-plan entertaining zones",
        ]}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuANGqf9yx10SmVEQeKqzs77Hl588CP2jUzc5RFN-X-uWOoqsvopB3LQ5V_hlpmIDcMJVvDwv3r06B1hkqjKF3kx-mmpJzMuBI6SM0ivOMz-0TLkGZlklzUeCdqVytOZj7UVhidNicgoEEsG6k8hHNqxX1UKSJKpiE5RyypwkBq-eRE2OFYZPWpZYD-7ah9vsd9z-GF2DL_ZmcNHyMxSxY0kzVUKvukAEwt7lEU5hSoMoUXfCrR8Thfb"
        imageAlt="Architectural single-storey home extension with floor-to-ceiling sliding glass doors"
        caseRef="Case Reference #EXT-112"
        caseTitle="Wraparound Kitchen & Garden Living • Richmond TW10"
        caseIcon={HomeIcon}
        ctaLabel="Plan Your Extension"
        reverse
        tone="muted"
      />

      <ServiceDetail
        id="lofts"
        eyebrow="Service 03 — Vertical Optimization"
        icon={ShieldCheck}
        title="Luxury Loft Conversions & Attic Transformations"
        description="Unlock unused overhead volume to create opulent master bedroom suites, dedicated home offices, and luxury ensuite bathrooms without sacrificing valuable outdoor garden real estate."
        bullets={[
          "Mansard conversions for period properties",
          "Dormer & hip-to-gable options",
          "Bespoke architectural staircases",
          "Acoustic soundproofing & fire barriers",
        ]}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDp8rcWmT7ki3pz3p3AaMSAKfRUWBfw90-mTEfUuSGEJjFMKIZhYgcS0pJh_pNdsp-65p6wsmqQpoIoNaqNg-3gPLtBS49MXfqSZ6cYEXO1s0eI-RHnHY-5Jo2GYb4NEEJUqeVmoiBAQdN8X9TerOfsevOvKcGDRfSIuf9muk2djPTa0mmW9zE0u6fr3MsrgAre34DdJ6fWMyzjcEfwFZX-wx2L4kedx-YDc3JMUkpCltTGzs7rQavj"
        imageAlt="Luxury attic loft conversion with exposed timber beams and velux roof windows"
        caseRef="Case Reference #LC-883"
        caseTitle="Mansard Suite with Marble Ensuite • Wandsworth SW18"
        caseIcon={Bed}
        ctaLabel="Explore Loft Conversions"
      />

      <ServiceDetail
        id="structural"
        eyebrow="Service 04 — Engineering Integrity"
        icon={Wrench}
        title="Structural Engineering & Load-Bearing Works"
        description="Structural work is the backbone of exceptional construction. Our in-house structural specialists execute complex load re-distribution, steel frame erections, and basement underpinning with mathematical precision."
        bullets={[
          "RSJs & universal column installations",
          "Chimney breast removal & gallow brackets",
          "Subsidence repair & mass concrete underpinning",
          "Full Building Control certification",
        ]}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCb-RsVM-JgSc4SR6nVlKK4aAK8H9dy7InFlqfN8juAyD71RQnSbyRR-zY-MYlCIUAarjeKeDPj9S30KXO07hGxvn05sPJNpOlFNIv3tzK7lPitaR1zKdLBr3etsb9__3YFG1BMdHLeVIU9uuNZi6WRctEcgbFWIFVRVySepLD5WwihRdvmkOlvu7UCZz9gno_Oacd-QxF5xIKrt5tELT9zD9DHkjVuru251_Na9WIH9HVuAQirvvjW"
        imageAlt="Heavy duty structural engineering steel frame installation with RSJ beams"
        caseRef="Case Reference #ST-550"
        caseTitle="Multi-Story Steel Portal Frame • Hampstead NW3"
        caseIcon={HardHat}
        ctaLabel="Request Structural Survey"
        reverse
        tone="muted"
      />

      <ServiceDetail
        id="groundworks"
        eyebrow="Service 05 — Substructure & Site Prep"
        icon={Layers}
        title="Groundworks, Foundations & Drainage Systems"
        description="A resilient superstructure demands flawless ground preparation. We deploy our own modern plant machinery and certified groundwork squads to tackle challenging London soil conditions and complex substructure challenges."
        bullets={[
          "Piling & reinforced slabs",
          "Deep drainage infrastructure",
          "Site excavation & clearance",
          "Retaining walls & paving",
        ]}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCzucQ_UdmsY-vK8fROWKVrveQFM9liM-p2KJrrJesX3epTEVc-7vZbk9ZvKNA5PfwGFJ4CAwXGyiz2IU30panIkHhzwXQSAU-KjOMR6JQaKYXwpEmjL4-Tgap3mxWJN6lgSRi8PPw8BBSyeEg22ULjUxlh8176NtzaEjUNud6Y6fT64IA58AyS7lDbxU9RaeYhxoL7qR-JX1w6NJ4RVEq7ckgPHyoMvUIEpkkqYQh3OVxbeblEYnam"
        imageAlt="Construction site groundworks with excavator preparing foundation trenches"
        caseRef="Case Reference #GW-290"
        caseTitle="Piled Raft Foundation & Drainage • Dulwich SE21"
        caseIcon={Mountain}
        ctaLabel="Consult with Ground Engineers"
      />

      <ProcessTimeline
        eyebrow="Disciplined Methodology"
        title="Our 4-Stage Construction Process"
        description="We eliminate the stress of residential construction through strict milestones, transparent project accounting, and rigorous quality assurance."
        steps={PROCESS_STEPS}
        tone="dark"
      />

      <ServicesFaq />

      <ContactCtaBanner />
    </>
  );
}
