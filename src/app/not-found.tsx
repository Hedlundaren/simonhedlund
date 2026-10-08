import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-full w-full max-w-xl flex-col justify-center px-6 py-24">
      <h1 className="font-serif text-5xl tracking-tight">This address is empty</h1>
      <Link
        href="/"
        className="mt-8 w-fit underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
      >
        Simon Hedlund
      </Link>
    </main>
  );
}
