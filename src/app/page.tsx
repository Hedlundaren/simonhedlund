import {
  bands,
  companies,
  projects,
  type SiteLink,
} from "@/content/links";
import type { ReactNode } from "react";

function hostname(href: string) {
  return new URL(href).host.replace(/^www\./, "");
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-xs tracking-[0.18em] text-muted uppercase">{title}</h2>
      {children}
    </section>
  );
}

function LinkList({ links }: { links: SiteLink[] }) {
  return (
    <ul className="mt-2 border-t border-line">
      {links.map((link) => (
        <li key={link.href} className="border-b border-line">
          <a
            href={link.href}
            rel="noreferrer"
            className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 py-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            <span className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-foreground">
              {link.name}
            </span>
            <span className="font-mono text-sm text-muted transition-colors group-hover:text-foreground">
              {link.label ?? hostname(link.href)}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-xl px-6 py-24">
      <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">
        Simon Hedlund
      </h1>

      {projects.length > 0 && (
        <Section title="Tools">
          <LinkList
            links={projects.map((project) => ({
              name: project.name,
              href: project.href ?? `/${project.slug}`,
              label: project.href ? undefined : `/${project.slug}`,
            }))}
          />
        </Section>
      )}

      {companies.length > 0 && (
        <Section title="Companies">
          <LinkList links={companies} />
        </Section>
      )}

      {bands.length > 0 && (
        <Section title="Bands">
          <LinkList links={bands} />
        </Section>
      )}
    </main>
  );
}
