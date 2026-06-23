import Image from "next/image";

interface ImageSectionProps {
  src: string;
  alt?: string;
}

export default function ImageSection({
  src,
  alt = "hero image",
}: ImageSectionProps) {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      {/* Premium dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/40 via-black/10 to-black/40 pointer-events-none" />

      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        className="relative z-0 w-full h-full object-cover object-center"
      />
    </div>
  );
}
