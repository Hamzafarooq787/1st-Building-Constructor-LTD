type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-14 ${isCenter ? "text-center mx-auto" : "text-left"}`}
    >
      <span className="text-brand-maroon text-[11px] sm:text-xs uppercase tracking-[0.25em] font-extrabold block mb-2">
        {eyebrow}
      </span>
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
