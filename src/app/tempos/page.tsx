import { MetronomeApp } from "@/components/metronome-app";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tempos",
  description: "A metronome for a list of tempos.",
};

export default function TemposPage() {
  return (
    <main className="flex flex-1 flex-col">
      <MetronomeApp />
    </main>
  );
}
