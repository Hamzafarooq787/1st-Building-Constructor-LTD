"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";

const inputClasses =
  "w-full bg-gray-50 px-4 py-3 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-maroon transition-all";

const WHATSAPP_NUMBER = "447960957008";

const SERVICE_LABELS: Record<string, string> = {
  extensions: "Home & Rear Extensions",
  loft: "Loft & Mansard Conversions",
  new_build: "Architectural New Build",
  structural: "Structural Works & RSJ Beams",
  groundworks: "Groundworks, Piling & Basements",
  full_refurb: "Full High-End Refurbishment",
  commercial: "Commercial Contracting",
};

const BUDGET_LABELS: Record<string, string> = {
  "30k_75k": "£30,000 – £75,000",
  "75k_150k": "£75,000 – £150,000",
  "150k_300k": "£150,000 – £300,000",
  "300k_plus": "£300,000+",
  unsure: "Need Feasibility Advice",
};

const PLAN_LABELS: Record<string, string> = {
  approved: "Yes – Approved",
  in_planning: "In Planning",
  need_architect: "No – Need Guidance",
};

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const fullName = data.get("full_name")?.toString().trim() ?? "";
    const phoneNumber = data.get("phone_number")?.toString().trim() ?? "";
    const email = data.get("email_address")?.toString().trim() ?? "";
    const postcode = data.get("project_postcode")?.toString().trim() ?? "";
    const serviceType = data.get("service_type")?.toString() ?? "";
    const budget = data.get("estimated_budget")?.toString() ?? "";
    const planStatus = data.get("plan_status")?.toString() ?? "";
    const description = data.get("project_description")?.toString().trim() ?? "";

    const lines = [
      "New Quote Request — 1st Building Contractors Ltd",
      "",
      `Name: ${fullName}`,
      `Phone: ${phoneNumber}`,
      email ? `Email: ${email}` : null,
      `Project Postcode: ${postcode}`,
      `Service: ${SERVICE_LABELS[serviceType] ?? serviceType}`,
      budget ? `Budget: ${BUDGET_LABELS[budget] ?? budget}` : null,
      planStatus ? `Architectural drawings: ${PLAN_LABELS[planStatus] ?? planStatus}` : null,
      description ? `Project details: ${description}` : null,
    ].filter((line): line is string => Boolean(line));

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="lg:col-span-7">
      <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-maroon" />
        <div className="space-y-2 mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900">Request a Detailed Quote</h2>
          <p className="text-sm text-gray-600">
            Provide preliminary details regarding your property and architectural vision. Submitting will open
            WhatsApp with your details ready to send to our estimating desk.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm text-gray-900 font-semibold" htmlFor="full_name">
                Full Name *
              </label>
              <input
                className={inputClasses}
                id="full_name"
                name="full_name"
                placeholder="e.g. Alexander Wright"
                required
                type="text"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm text-gray-900 font-semibold" htmlFor="phone_number">
                Phone Number *
              </label>
              <input
                className={inputClasses}
                id="phone_number"
                name="phone_number"
                placeholder="+44 7123 456 789"
                required
                type="tel"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm text-gray-900 font-semibold" htmlFor="email_address">
                Email Address *
              </label>
              <input
                className={inputClasses}
                id="email_address"
                name="email_address"
                placeholder="alexander@domain.co.uk"
                required
                type="email"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm text-gray-900 font-semibold" htmlFor="project_postcode">
                Project Postcode / Location *
              </label>
              <input
                className={inputClasses}
                id="project_postcode"
                name="project_postcode"
                placeholder="e.g. SW19 3EB, Richmond"
                required
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm text-gray-900 font-semibold" htmlFor="service_type">
                Primary Service *
              </label>
              <select className={`${inputClasses} appearance-none`} id="service_type" name="service_type" required defaultValue="">
                <option disabled value="">
                  Select service
                </option>
                <option value="extensions">Home &amp; Rear Extensions</option>
                <option value="loft">Loft &amp; Mansard Conversions</option>
                <option value="new_build">Architectural New Build</option>
                <option value="structural">Structural Works &amp; RSJ Beams</option>
                <option value="groundworks">Groundworks, Piling &amp; Basements</option>
                <option value="full_refurb">Full High-End Refurbishment</option>
                <option value="commercial">Commercial Contracting</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm text-gray-900 font-semibold" htmlFor="estimated_budget">
                Anticipated Budget Range
              </label>
              <select className={`${inputClasses} appearance-none`} id="estimated_budget" name="estimated_budget" defaultValue="">
                <option disabled value="">
                  Select estimated budget
                </option>
                <option value="30k_75k">£30,000 – £75,000</option>
                <option value="75k_150k">£75,000 – £150,000</option>
                <option value="150k_300k">£150,000 – £300,000</option>
                <option value="300k_plus">£300,000+</option>
                <option value="unsure">Need Feasibility Advice</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-900 font-semibold block">
              Do you currently have architectural drawings?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <label className="flex items-center gap-2.5 p-3 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <input className="accent-brand-maroon" name="plan_status" type="radio" value="approved" />
                <span className="text-sm text-gray-900">Yes – Approved</span>
              </label>
              <label className="flex items-center gap-2.5 p-3 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <input className="accent-brand-maroon" name="plan_status" type="radio" value="in_planning" />
                <span className="text-sm text-gray-900">In Planning</span>
              </label>
              <label className="flex items-center gap-2.5 p-3 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                <input className="accent-brand-maroon" defaultChecked name="plan_status" type="radio" value="need_architect" />
                <span className="text-sm text-gray-900">No – Need Guidance</span>
              </label>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-gray-900 font-semibold" htmlFor="project_description">
              Project Overview &amp; Specifications
            </label>
            <textarea
              className={inputClasses}
              id="project_description"
              name="project_description"
              placeholder="Outline the scope of work (e.g. 5m rear open-plan extension, removing load-bearing chimney breast, bi-fold doors, desired start date)..."
              rows={4}
            />
          </div>

          <button
            className="w-full inline-flex items-center justify-center gap-2 bg-brand-maroon hover:bg-brand-maroonDark text-white py-4 px-8 rounded-lg font-bold uppercase tracking-wide shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            type="submit"
          >
            <span>Send Quote Request via WhatsApp</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          {submitted ? (
            <div className="p-4 rounded-lg bg-green-50 text-gray-900 flex items-start gap-3" role="status">
              <CheckCircle2 className="w-5 h-5 text-brand-maroon shrink-0" aria-hidden="true" />
              <div className="space-y-0.5">
                <p className="text-sm font-bold text-gray-900">WhatsApp Opened</p>
                <p className="text-sm text-gray-600">
                  Your project details are ready in a new WhatsApp chat — hit send there and our lead QS will
                  respond within 24 hours to coordinate your survey.
                </p>
              </div>
            </div>
          ) : null}

          <div className="flex items-center justify-center gap-2 text-center text-gray-500 text-xs pt-1">
            <Lock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>We respect your privacy. Zero unsolicited marketing. Strictest NDA compliance upon request.</span>
          </div>
        </form>
      </div>
    </div>
  );
}
