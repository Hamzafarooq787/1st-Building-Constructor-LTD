import { Headset, Phone, Mail, MapPin, ShieldCheck, Wrench, Receipt } from "lucide-react";

const AREAS = [
  "Central London",
  "Kensington & Chelsea",
  "Richmond upon Thames",
  "Wandsworth",
  "Wimbledon & Merton",
  "Kingston upon Thames",
  "Hammersmith & Fulham",
  "Westminster",
  "Surrey Borders",
];

const TRUST_BADGES = [
  { icon: ShieldCheck, title: "Fully Insured", sub: "£10m Public Liability" },
  { icon: Wrench, title: "10-Yr Guarantee", sub: "All Structural Works" },
  { icon: Receipt, title: "Fixed-Price", sub: "Detailed Line-by-Line" },
];

export default function ContactDetails() {
  return (
    <div className="lg:col-span-5 flex flex-col space-y-6">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-maroon text-white flex items-center justify-center">
            <Headset className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Direct Contact</h3>
            <p className="text-xs text-gray-500">Connect directly with our estimating desk</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
          <Phone className="w-5 h-5 text-brand-maroon mt-0.5 shrink-0" aria-hidden="true" />
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-gray-500">Telephone Direct</span>
            <a className="font-bold text-brand-maroon hover:underline" href="tel:+447960957008">
              +44 (0) 7960 957 008
            </a>
            <span className="text-xs text-gray-500 mt-1">
              Mon – Fri: 7:30 AM – 6:00 PM
              <br />
              Sat: 8:00 AM – 1:00 PM
            </span>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
          <Mail className="w-5 h-5 text-brand-maroon mt-0.5 shrink-0" aria-hidden="true" />
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-gray-500">Email Direct</span>
            <a className="text-sm font-semibold text-gray-900 hover:text-brand-maroon transition-colors" href="mailto:john@1st-bc.com">
              john@1st-bc.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
          <MapPin className="w-5 h-5 text-brand-maroon mt-0.5 shrink-0" aria-hidden="true" />
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-gray-500">London Operations Office</span>
            <p className="text-sm font-medium text-gray-900 mt-0.5">1st Building Contractors Ltd</p>
            <p className="text-sm text-gray-500">
              61 Amersham Road
              <br />
              London
              <br />
              RM3 9HX
            </p>
            <span className="inline-flex items-center gap-1 text-xs text-brand-maroon mt-1 font-semibold">
              <MapPin className="w-3 h-3" aria-hidden="true" /> Greater London &amp; Home Counties
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-gray-900">London Boroughs Serviced</h4>
          <span className="text-[11px] bg-brand-maroon/10 text-brand-maroon px-2.5 py-1 rounded-full font-semibold">
            Daily Operations
          </span>
        </div>
        <p className="text-sm text-gray-500">
          Our site managers and structural crews operate regularly across prime residential and commercial zones:
        </p>
        <div className="flex flex-wrap gap-2">
          {AREAS.map((area) => (
            <span key={area} className="px-3 py-1 bg-gray-50 text-gray-900 text-xs rounded-lg">
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-brand-maroon text-white p-6 rounded-xl shadow-md">
        <div className="flex items-start gap-4">
          <Wrench className="w-6 h-6 shrink-0" aria-hidden="true" />
          <div className="space-y-1">
            <h4 className="font-bold">Emergency Structural Assessment?</h4>
            <p className="text-sm text-white/85">
              Urgent wall removals, RSJ installations, or party wall queries can be prioritised for on-site survey
              within 12 hours.
            </p>
            <a className="inline-block pt-1 text-sm underline underline-offset-4 font-semibold" href="tel:+447960957008">
              Call Immediate Desk: +44 7960 957 008
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {TRUST_BADGES.map((badge) => {
          const Icon = badge.icon;
          return (
            <div key={badge.title} className="flex flex-col items-center text-center p-3 rounded-lg bg-white shadow-sm">
              <Icon className="w-6 h-6 text-brand-maroon" aria-hidden="true" />
              <span className="text-xs font-semibold text-gray-900 mt-1">{badge.title}</span>
              <span className="text-[10px] text-gray-500">{badge.sub}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
