"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2, Lock, UploadCloud } from "lucide-react";

const inputClasses =
  "w-full bg-gray-50 px-4 py-3 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-maroon transition-all";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="lg:col-span-7">
      <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-maroon" />
        <div className="space-y-2 mb-8">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900">Request a Detailed Quote</h2>
          <p className="text-sm text-gray-600">
            Provide preliminary details regarding your property and architectural vision. We will review your
            requirements and reach out within 24 hours.
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

          <div className="space-y-1.5">
            <label className="text-sm text-gray-900 font-semibold block">
              Attach Architectural Drawings or Sketches (Optional)
            </label>
            <div className="relative bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg p-5 flex flex-col items-center justify-center text-center cursor-pointer group">
              <input
                accept=".pdf,.jpg,.jpeg,.png,.dwg"
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                multiple
                type="file"
              />
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-maroon shadow-sm group-hover:scale-105 transition-transform mb-2">
                <UploadCloud className="w-5 h-5" aria-hidden="true" />
              </div>
              <p className="text-sm text-gray-900 font-medium">
                <span className="text-brand-maroon font-semibold underline">Click to upload</span> or drag and drop
                drawings
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">PDF, JPG, PNG, or CAD files up to 25MB total</p>
            </div>
          </div>

          <button
            className="w-full inline-flex items-center justify-center gap-2 bg-brand-maroon hover:bg-brand-maroonDark text-white py-4 px-8 rounded-lg font-bold uppercase tracking-wide shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            type="submit"
          >
            <span>Submit Quote Request</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          {submitted ? (
            <div className="p-4 rounded-lg bg-green-50 text-gray-900 flex items-start gap-3" role="status">
              <CheckCircle2 className="w-5 h-5 text-brand-maroon shrink-0" aria-hidden="true" />
              <div className="space-y-0.5">
                <p className="text-sm font-bold text-gray-900">Request Successfully Transmitted</p>
                <p className="text-sm text-gray-600">
                  Our lead QS will review your project details and contact you within 24 hours to coordinate your
                  survey.
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
