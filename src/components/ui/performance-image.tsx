type PerformanceImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
};

export default function PerformanceImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  sizes,
}: PerformanceImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      sizes={sizes}
    />
  );
}
