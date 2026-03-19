type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const width = align === "center" ? "mx-auto" : "";

  return (
    <div className={`${alignment} ${width}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] opacity-60">
          {eyebrow}
        </p>
      ) : null}

      <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>

      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 opacity-75 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
