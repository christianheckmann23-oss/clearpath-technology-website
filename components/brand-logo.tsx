import Image from "next/image";

/* Official CirroFlow Technologies horizontal logo (blue cloud-road mark +
   wordmark). Source asset is a transparent PNG cropped from the brand file;
   nav/footer CSS (.nav-logo img) controls the rendered height. */
export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      src="/assets/cirroflow-logo.png"
      alt="CirroFlow Technologies"
      width={234}
      height={56}
      priority={priority}
    />
  );
}
