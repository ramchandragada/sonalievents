import Link from "next/link";
import type { ReactNode } from "react";
import { whatsappHref } from "@/lib/site";

const DEFAULT_WA =
  "Hello Sonali Events, I would like to plan a celebration near Nanded City / Sinhgad Road.";

type WhatsAppProps = {
  message?: string;
  className?: string;
  children?: ReactNode;
  /** Primary conversion CTAs use WhatsApp green for one consistent ask */
  variant?: "wa" | "paper";
};

export function WhatsAppButton({
  message = DEFAULT_WA,
  className = "",
  children = "Plan on WhatsApp",
  variant = "wa",
}: WhatsAppProps) {
  const styles =
    variant === "paper"
      ? "border border-paper/60 bg-paper/5 text-paper hover:bg-paper/10"
      : "bg-wa text-white hover:bg-wa-bright";

  return (
    <Link
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`pressable cta-label inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 transition duration-200 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

type SecondaryProps = {
  href?: string;
  className?: string;
  children?: ReactNode;
};

export function SeeWorkButton({
  href = "/gallery",
  className = "",
  children = "See the work",
}: SecondaryProps) {
  return (
    <Link
      href={href}
      className={`pressable cta-label inline-flex min-h-12 items-center justify-center rounded-full border border-current/40 px-6 py-3 transition duration-200 hover:border-current ${className}`}
    >
      {children}
    </Link>
  );
}
