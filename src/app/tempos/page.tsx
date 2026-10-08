import { projects } from "@/content/links";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemposFrame } from "./tempos-frame";

const tempos = projects.find((project) => project.slug === "tempos");

export const metadata: Metadata = {
  title: tempos?.name ?? "Tempos",
  description: "A metronome for a list of tempos.",
};

export default function TemposPage() {
  if (!tempos?.embed) notFound();

  return <TemposFrame embed={tempos.embed} title={tempos.name} />;
}
