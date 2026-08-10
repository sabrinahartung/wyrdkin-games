import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface Props {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  /** Opens in a new tab — for links that leave the site (Steam, Discord…). */
  external?: boolean;
  /** Set this to render a real <button> instead of a link (form submits). */
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const styles: Record<Variant, string> = {
  primary: "bg-neon text-void hover:brightness-110 border-void",
  secondary: "bg-panel text-ink hover:bg-haze border-grape",
};

const base =
  "inline-block border-2 px-6 py-3 font-pixel text-[10px] uppercase tracking-wider shadow-pixel transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none";

export default function PixelButton({
  children,
  href = "#",
  variant = "primary",
  className = "",
  external = false,
  type,
  disabled = false,
  onClick,
}: Props) {
  const classes = `${base} ${styles[variant]} ${className}`;

  if (type) {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${classes} disabled:translate-y-0 disabled:opacity-60 disabled:shadow-pixel`}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={onClick}
      className={classes}
    >
      {children}
    </a>
  );
}
