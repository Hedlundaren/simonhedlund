export type SiteLink = {
  name: string;
  href: string;
  /** Shown on the right. Defaults to the hostname. */
  label?: string;
};

export type ProjectLink = {
  /** Path without a leading slash. "tempos" becomes simonhedlund.com/tempos */
  slug: string;
  name: string;
  /** Where that path redirects. Leave this out for a page that lives on this site. */
  href?: string;
  /** 308 when true. Defaults to a temporary 307 so the destination can change. */
  permanent?: boolean;
};

export const companies: SiteLink[] = [
  {
    name: "Shader",
    href: "https://www.shader.se",
  },
  {
    name: "Cruitive",
    href: "https://www.cruitive.com",
  },
];

export const bands: SiteLink[] = [
  {
    name: "Norrköpings Folkmusikorkester",
    href: "https://folkestern.se",
  },
  {
    name: "Hjortrån",
    href: "https://open.spotify.com/artist/4TEFS0j8cvpoAIlbGBLESC",
    label: "Spotify",
  },
  {
    name: "Synkopter",
    href: "https://synkopter.se",
  },
  {
    name: "Railbirds",
    href: "https://instagram.com/railbirdsband",
    label: "Instagram",
  },
];

export const projects: ProjectLink[] = [
  {
    slug: "tempos",
    name: "Tempos",
    href: "https://tempos-dun.vercel.app",
  },
  {
    slug: "giftunwrapper",
    name: "Gift Unwrapper",
    href: "https://giftunwrapper.com",
  },
];

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

for (const project of projects) {
  if (!slugPattern.test(project.slug)) {
    throw new Error(
      `Project slug "${project.slug}" must be lowercase letters, numbers, and hyphens.`,
    );
  }
}

export function projectRedirects() {
  return projects.flatMap((project) =>
    project.href
      ? [
          {
            source: `/${project.slug}`,
            destination: project.href,
            permanent: project.permanent ?? false,
          },
        ]
      : [],
  );
}
