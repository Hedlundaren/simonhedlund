# simonhedlund.com

Personal site. Bands, companies, and short project URLs live in [`src/content/links.ts`](src/content/links.ts).

## Add a band or company

Add an entry to `bands` or `companies`. It shows up on the homepage and links straight to that site.

## Add a short URL

Add an entry to `projects`. This makes `simonhedlund.com/tempos` redirect to the `href`:

```ts
{
  slug: "tempos",
  name: "Tempos",
  href: "https://example.com",
}
```

Redirects are temporary (307) so the destination can change. Set `permanent: true` for a 308.

## Develop

```bash
npm run dev
```
