import Image from "next/image";

export const Img = ({ url, alt }: { url: string; alt: string }) => (
  <Image
    src={url}
    alt={alt}
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: "100%", height: "auto" }}
  />
);
