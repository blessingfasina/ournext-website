import type { TileKind } from "@/components/ObjectTile";

export type Feature = {
  kind: TileKind;
  title: string;
  body: string;
};

export const features: Feature[] = [
  {
    kind: "plan",
    title: "Today and Plan",
    body: "Appointments and asks in one place — without a crowded dashboard.",
  },
  {
    kind: "ask",
    title: "Ask for help",
    body: "Propose a lift or a form; family can take an open request when nobody’s on it yet.",
  },
  {
    kind: "people",
    title: "Invite by email",
    body: "Choose exactly what each person can see — editors, viewers, or helpers on shared appointments.",
  },
  {
    kind: "update",
    title: "Family updates",
    body: "Short notes for the people organising care — not a public social feed.",
  },
  {
    kind: "jean",
    title: "Their own quieter screen",
    body: "Optional large-type home for the person you’re looking after, when you set it up.",
  },
];
