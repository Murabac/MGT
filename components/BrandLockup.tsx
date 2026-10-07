import Image from "next/image";
import { brandAssets } from "@/lib/assets";

type BrandLockupProps = {
  variant?: "light" | "blue";
  markSize?: number;
  className?: string;
  priority?: boolean;
};

export function BrandLockup({
  variant = "light",
  markSize = 44,
  className = "",
  priority = false,
}: BrandLockupProps) {
  const onBlue = variant === "blue";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={onBlue ? brandAssets.mark : brandAssets.markOnLight}
        alt=""
        width={markSize}
        height={markSize}
        className="shrink-0"
        style={{ width: markSize, height: markSize }}
        priority={priority}
      />
      <span className="flex min-w-0 flex-col">
        <span
          className={`font-sans font-black uppercase leading-none tracking-wider ${
            onBlue
              ? "text-[1.35rem] text-[#4AD45F] sm:text-[1.5rem]"
              : "text-[1.25rem] text-green sm:text-[1.35rem]"
          }`}
        >
          Maandeeq
        </span>
        <span
          className={`mt-1 font-bold uppercase leading-none tracking-[0.14em] ${
            onBlue
              ? "text-[10px] text-white/95"
              : "text-[9px] text-deep sm:text-[10px]"
          }`}
        >
          Global Transportation Ltd.
        </span>
      </span>
    </span>
  );
}
