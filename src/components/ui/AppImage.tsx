import Image from "next/image";

type AppImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export default function AppImage({
  src,
  alt,
  priority = false,
  sizes = "100vw",
  className = "",
  fill = false,
  width,
  height,
}: AppImageProps) {
  if (fill) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      sizes={sizes}
      width={width || 1200}
      height={height || 800}
      className={className}
    />
  );
}
