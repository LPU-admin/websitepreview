# Launch Pad Unlimited — Website

Context for Claude Code working in this repo. Keep it current; if a decision
below changes, edit this file in the same commit.

## The business

Launch Pad Unlimited is a general partnership (Jose Carrillo and Dash Krehel) providing
educational and professional services to museums and informal learning
organizations — science centers, zoos, aquariums, libraries, makerspaces.
Home-based in Pico Rivera, CA — internal fact only. **Public site copy never
names Pico Rivera.** The service area is "Southern California," narrowing to
"the Los Angeles area" only where a specific location is needed.
LLC conversion planned later, not yet done.

**Eight service lines** (the site's core content), in the order they appear on
the site — AI leads, then Dash's two build services, then the rest:

1. AI Integration & Enablement
2. Exhibit Design & Fabrication
3. Makerspace Planning & Buildout
4. Learning Design & Curriculum Development
5. Community Programming
6. IT & Systems
7. Evaluation & Data
8. Staffing Support

Exhibit Design & Fabrication was added 2026-09-26. It had been a partner-split
skill only, but the positioning copy leads with "we build exhibits," so it
needed a service block to link to. Its scope has not been confirmed with
Dash — see Do not invent.

**Partner split** — Jose: learning design, curriculum, AI enablement, IT and
systems, evaluation and data. Dash Krehel: exhibit design and fabrication, makerspace
planning and buildout, makerspace curriculum and training, community
programming, staffing support.

Near-term sales target is Columbia Memorial Space Center in Downey, CA — city
owned, mid-expansion. Not public-facing site content, but it shapes tone: the
audience is museum directors and city procurement staff, not consumers.

## Hosting and repo

- Repo: `LPU-admin/website` (public), owned by the business GitHub account
- Host: GitHub Pages, serving from this repo
- Domain: `launchpadunlimited.org`, registered and DNS-managed at Squarespace
- DNS verified correct as of 2026-09-21 — apex resolves to GitHub Pages'
  `185.199.108.153` / `.109.153` / `.110.153` / `.111.153`
- Jose pushes from his personal GitHub account, added as a collaborator

## Known issues

~~**HTTPS is not enforced.**~~ Fixed as of 2026-09-26: `http://` now 301s to
`https://`, and `https://launchpadunlimited.org/` returns 200. The fix
coincided with a delete-and-recreate of `CNAME` on `main`, which re-triggered
certificate provisioning.

Secondary: the apex has no IPv6 (AAAA) records. GitHub recommends adding the
`2606:50c0:800{0,1,2,3}::153` set. Not causing the HTTPS problem.

## Stack decisions

- **Plain HTML, CSS, and vanilla JS. No build step, no framework, no bundler.**
  Chosen so the site runs on GitHub Pages as-is and either partner can edit a
  page without a toolchain. Do not introduce a build step without asking.
- Shared `styles.css` across all pages. No CSS framework.
- No contact form. Contact is a `mailto:` link, lightly obfuscated against
  scrapers. GitHub Pages cannot process form submissions; adding a form means
  adding a third-party service, which is a decision, not an implementation
  detail — ask first.
- Responsive down to phone width. Semantic HTML and real accessibility
  (landmarks, alt text, focus states, contrast) — some clients are
  publicly funded and may be held to accessibility standards.

## Design

Decided 2026-09-21, inherited from the original "coming soon" splash:

- **Colors** — `--ink #fff6e0`, `--amber #ffb547`, `--ember #2a1a08` are the
  brand; they come from `launch-bg.jpg`. Light content pages (`--bg #fffaf0`)
  with dark header, footer, hero, and CTA bands. All tokens on `:root` in
  `styles.css`.
- **Display font** — Press Start 2P, self-hosted from `fonts/` (OFL, license
  in `fonts/OFL.txt`). Used only for the wordmark, the home hero `h1`, and
  small eyebrow labels. Never for body copy or headings on content pages.
- **Body font** — system font stack. No web font.
- `launch-bg.jpg` is NASA image `NHQ20260830_admin_0002` (Roman Space
  Telescope launch, 2026-08-30, credit NASA/John Kraus), from
  images.nasa.gov. Used only on the home hero, with the visible credit line
  the Image policy requires. Source: https://images.nasa.gov/details/NHQ20260830_admin_0002
- `.todo` class marks unwritten content visibly. Remove it when the copy lands.

## Image policy

NASA imagery is usable (generally public domain), subject to:

- Verify the credit line names NASA and not a third-party copyright holder.
- Never use the NASA insignia, logotype, seal, or identifiers.
- Avoid identifiable people.
- Include a visible "Image credit: NASA" wherever the image appears.
- Never place imagery so it implies NASA endorsement or affiliation.

## Sitemap

Four pages, built so the services page can split later without a rewrite:

- `index.html` — home
- `services.html` — all seven service lines as self-contained blocks
- `about.html` — the partnership, Jose and Dash
- `contact.html` — mailto and service area

Each service block on `services.html` should be structured so it can be lifted
into its own page (e.g. `services/ai-enablement.html`) when a sales conversation
calls for a linkable page. Give each one a stable `id` for deep linking.

## Workflow

- `main` is live. GitHub Pages publishes from it.
- Work on `dev`. Preview locally with `python3 -m http.server` and open
  `localhost:8000`. Merge to `main` only after Jose and Dash have reviewed.
- **Preview site:** `LPU-admin/websitepreview` publishes
  `https://lpu-admin.github.io/websitepreview/` from its `main`. Local branch
  `preview` = `dev` minus `CNAME` (the preview must never claim the
  production domain), with remote `previewrepo` pointing at that repo. To
  refresh it: `git checkout preview && git merge dev && git push`. Never push
  `CNAME` there. In GitHub Desktop the repo is always shown as "website" (one
  local folder, two remotes) — the *branch* decides where a push lands.
- Long-term host is undecided. If per-pull-request preview URLs become
  necessary, moving to Cloudflare Pages or Netlify (GitHub stays the source of
  truth, DNS repointed once at Squarespace) is the option on the table. Not
  decided — do not act on it.

## Do not invent

This is a real business's public site. Several things are genuinely unresolved,
and a plausible-sounding guess is worse than a placeholder:

- ~~**Positioning copy**~~ — written 2026-09-26. Short form on the home hero,
  long form on the about page. Do not reword without asking.
- **Partner bios** — Jose's is written. **Dash Krehel's is still not written.**
- **Exhibit fabrication scope** — the `#exhibits` block describes categories of
  work, not shop capabilities. Dash has not confirmed what the partnership can
  actually fabricate (materials, interactives, scale). Confirm before a client
  reads it.
- ~~**Domain email address**~~ — `info@launchpadunlimited.org`, confirmed
  2026-09-26. Assembled at runtime in `main.js`; never hardcode it in HTML.
- **Rates and pricing** — a rate card exists internally. Whether any of it goes
  on the public site has not been decided. Default to no.
- **Client list, testimonials, past projects, credentials, certifications,
  years in business** — the partnership is new. Do not write any of these.

Use a visible `TODO:` placeholder for anything in this list and tell Jose what
is missing. Never fabricate a client, a number, or a credential.

## Conventions

- Two-space indent in HTML and CSS
- CSS custom properties on `:root` for colors, type, and spacing — no
  hardcoded hex values in rules
- Relative links between pages, so the site works from a subpath
- No external fonts, scripts, or CDNs without asking. Self-host instead.
- Keep total page weight small; no images over ~200KB without a reason
