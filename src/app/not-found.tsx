import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80dvh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="text-[0.7rem] tracking-[0.28em] text-garnet uppercase">
        404
      </p>
      <h1 className="display mt-4 text-6xl">This page is not on the floorplan.</h1>
      <Link
        href="/"
        className="mt-8 rounded-full bg-garnet px-6 py-3 text-[0.7rem] tracking-[0.18em] text-paper uppercase"
      >
        Back to Sonali Events
      </Link>
    </div>
  );
}
