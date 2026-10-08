# simonhedlund.com

Personal site. Bands, companies, and short project URLs live in [`src/content/links.ts`](src/content/links.ts).

## Add a band or company

Add an entry to `bands` or `companies`. It shows up on the homepage and links straight to that site.

## Add a short URL

Add an entry to `projects`. With an `href`, that path redirects to the live site, so updates there show up here. Without an `href`, the path is a page on this site.

```ts
{
  slug: "tempos",
  name: "Tempos",
  href: "https://tempos-dun.vercel.app",
}
```

Redirects are temporary (307) so the destination can change. Set `permanent: true` for a 308.

## Develop

```bash
npm run dev
```
