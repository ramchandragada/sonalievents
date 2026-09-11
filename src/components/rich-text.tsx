import Link from "next/link";
import { Fragment } from "react";

const TOKEN = /(\[\[[^\]]+\]\])/g;

/** Renders `[[/path|label]]` markers as internal links. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return parts.map((part, index) => {
    const match = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
    if (!match) {
      return <Fragment key={index}>{part}</Fragment>;
    }
    const [, href, label] = match;
    return (
      <Link
        key={index}
        href={href}
        className="text-garnet-deep underline-offset-4 hover:underline"
      >
        {label}
      </Link>
    );
  });
}
