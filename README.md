# OurNext website

Next.js (TypeScript) marketing + legal site in the Quiet Grid look.

**GitHub:** https://github.com/blessingfasina/ournext-website

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing |
| `/privacy` | Privacy notice |
| `/terms` | Terms of use |
| `/support` | Store support URL |

## Local

```bash
cd website
npm install
npm run dev
```

## Deploy on Vercel

1. Import https://github.com/blessingfasina/ournext-website
2. Framework: Next.js (auto-detected)
3. Build command: `npm run build` · Output: default
4. Point `ournext.uk` at the project

Then set in the app:

```json
"OURNEXT_PRIVACY_URL": "https://ournext.uk/privacy",
"OURNEXT_TERMS_URL": "https://ournext.uk/terms"
```

Support URL for stores: `https://ournext.uk/support`
