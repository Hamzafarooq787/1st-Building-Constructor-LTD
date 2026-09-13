import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
      {items.map((faq) => (
        <details
          key={faq.question}
          className="group bg-white rounded-lg border border-gray-200/90 shadow-sm overflow-hidden transition-all duration-200 open:ring-1 open:ring-brand-maroon/20"
        >
          <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none font-bold text-gray-900 text-sm sm:text-base hover:text-brand-maroon transition-colors">
            <span>{faq.question}</span>
            <span className="w-7 h-7 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center shrink-0 transition-transform duration-200 group-open:rotate-180">
              <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </summary>
          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-1">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
