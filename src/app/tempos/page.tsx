import { projects } from "@/content/links";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const tempos = projects.find((project) => project.slug === "tempos");

export const metadata: Metadata = {
  title: tempos?.name ?? "Tempos",
  description: "A metronome for a list of tempos.",
};

export default function TemposPage() {
  if (!tempos?.embed) notFound();

  return (
    <iframe
      src={tempos.embed}
      title={tempos.name}
      className="fixed inset-0 block h-dvh w-full border-0 bg-[#14110e]"
    />
  );
}
