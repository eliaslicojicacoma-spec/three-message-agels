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

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-7 opacity-75 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
