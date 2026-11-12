# OurNext website

Static marketing + legal site in the Quiet Grid look. Hosted separately from
the Flutter app — push this folder to GitHub and deploy on Vercel.

## Pages

| URL | File |
|---|---|
| `/` | `index.html` |
| `/privacy/` | `privacy/index.html` |
| `/terms/` | `terms/index.html` |
| `/support/` | `support/index.html` |

## Deploy on Vercel

1. Push the `ournext` repo (or a repo that contains this `website/` folder) to GitHub.
2. In Vercel → **Add New Project** → import that repo.
3. Set **Root Directory** to `website`.
4. Framework preset: **Other** (static). No build command needed.
5. Deploy. Point your custom domain (e.g. `ournext.uk`) at the project.

Local preview:

```bash
cd website
npx --yes serve .
```

## Wire the app

After the site is live HTTPS:

```json
"OURNEXT_PRIVACY_URL": "https://ournext.uk/privacy/",
"OURNEXT_TERMS_URL": "https://ournext.uk/terms/"
```

Store listing **Support URL**: `https://ournext.uk/support/`

## Design

Geist + Quiet Grid tokens from the mobile app: paper background, ink type,
coloured object tiles on a soft stage / dot grid. Hero is brand-first with one
lead line and two CTAs.
