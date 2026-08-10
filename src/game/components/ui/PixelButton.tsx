import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "steam";

interface Props {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
}

const styles: Record<Variant, string> = {
  primary: "bg-gold text-tomb border-tomb hover:brightness-110",
  secondary: "bg-sand text-papyrus border-gold hover:bg-dune",
  steam: "bg-lapis text-tomb border-tomb hover:brightness-110",
};

export default function PixelButton({
  children,
  href = "#",
  variant = "primary",
  className = "",
  external = false,
}: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-block border-2 px-6 py-3 font-pixel text-[10px] uppercase leading-relaxed tracking-wider shadow-pixel transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
