import { Fraunces } from "next/font/google";
import type { ReactNode } from "react";
import "./tempos.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export default function TemposLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${fraunces.variable} tempos flex min-h-dvh flex-col`}>
      {children}
    </div>
  );
}
