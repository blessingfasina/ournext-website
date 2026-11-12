export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const privacyMeta = {
  title: "Privacy notice",
  description:
    "How OurNext collects and uses account and care space information.",
  updated: "12 November 2026",
};

export const privacySections: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      "OurNext helps families organise care for someone they look after — plans, requests for help, people, updates and private files. OurNext is not a medical service and does not provide clinical advice.",
    ],
  },
  {
    heading: "What we collect",
    bullets: [
      "Account — email address and authentication details (password or a sign-in provider such as Google or Apple).",
      "Care space content — names you choose for a care space, appointments, contacts, requests for help, family updates, membership and invitation details, and files you upload.",
      "Device — optional push notification tokens so we can send alerts you turn on.",
      "Purchases — if you subscribe to OurNext Plus, store and RevenueCat process the payment; we store an entitlement for your account.",
    ],
  },
  {
    heading: "How we use it",
    paragraphs: [
      "We use this information to run the service you asked for: keep your care space in sync, share only what you choose with people you invite, send optional notifications, and manage subscriptions. We do not sell personal information.",
    ],
  },
  {
    heading: "Who can see care information",
    paragraphs: [
      "Access is controlled by the care space. Owners and editors organise shared plans. Viewers follow along. Helpers only see appointments and requests shared with them. Files are private to people in the space unless you share them. Helpers cannot browse the file store.",
    ],
  },
  {
    heading: "Where it is stored",
    paragraphs: [
      "Data is stored with our providers (currently Supabase for accounts and database storage, and optionally Firebase Cloud Messaging for push). Servers may be outside the UK; we use providers that support appropriate safeguards for UK users.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "We keep account and care space data while your account is active. If you delete your account, we remove personal account data and leave care spaces according to ownership rules described in the app (for example, you may need to transfer ownership before leaving a space you alone own).",
    ],
  },
  {
    heading: "Your choices",
    bullets: [
      "Download a copy of your account export from Account settings (where available).",
      "Delete your account from Account settings.",
      "Turn notification preferences off in the app.",
      "Leave a care space or ask an owner to remove access.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "OurNext is built for adults organising care. It is not directed at children under 13.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "Questions about this notice: privacy@ournext.uk (update this address when the mailbox is live).",
    ],
  },
];

export const termsMeta = {
  title: "Terms of use",
  description: "Terms of use for the OurNext family care coordination app.",
  updated: "12 November 2026",
};

export const termsSections: LegalSection[] = [
  {
    heading: "The service",
    paragraphs: [
      "OurNext is a family coordination app. It helps people organise appointments, requests for help, updates and private files for someone they look after. It is not a medical device, NHS service, or clinical advice tool. In a medical emergency call 999. For urgent but non-emergency health advice in the UK, use NHS 111.",
    ],
  },
  {
    heading: "Your account",
    paragraphs: [
      "You must provide accurate sign-in details and keep them secure. You are responsible for activity on your account. You may delete your account from Account settings.",
    ],
  },
  {
    heading: "Care spaces and invitations",
    paragraphs: [
      "When you create a care space you become an owner. You decide who to invite and what helpers can see. Do not invite people who should not see the information you share. Invitation links and tokens are confidential.",
    ],
  },
  {
    heading: "Content you add",
    paragraphs: [
      "You must only add information you have a right to share. Do not upload unlawful content. OurNext may remove content that harms the service or other users.",
    ],
  },
  {
    heading: "OurNext Plus",
    paragraphs: [
      "Optional paid features (for example more file storage, handover packs, or extra care spaces) may be offered through the App Store or Google Play. Core coordination — plans, requests, updates, inviting people, and the person’s own screen when enabled — remains available without Plus. Subscriptions renew until you cancel in the store. Cancelling does not delete care information.",
    ],
  },
  {
    heading: "Availability",
    paragraphs: [
      "We aim for reliable service but do not guarantee uninterrupted access. Features labelled as needing further work in development builds may not appear in production.",
    ],
  },
  {
    heading: "Liability",
    paragraphs: [
      "To the extent permitted by law, OurNext is provided as-is for family organisation. We are not responsible for clinical decisions, missed appointments, or care outcomes. Nothing in these terms limits rights you have as a consumer that cannot be excluded under UK law.",
    ],
  },
  {
    heading: "Changes",
    paragraphs: [
      "We may update these terms. Continued use after an update means you accept the revised terms, where permitted by law. Material changes will be highlighted in the app or by email when practical.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "support@ournext.uk (update this address when the mailbox is live).",
    ],
  },
];
