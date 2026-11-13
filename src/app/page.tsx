import Image from "next/image";
import Link from "next/link";
import { ObjectTile } from "@/components/ObjectTile";
import { PhoneStage } from "@/components/PhoneStage";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteHeader } from "@/components/SiteHeader";
import { earlyAccessEmail, earlyAccessHref } from "@/content/site";
import "./landing.css";

const verbs = [
  {
    kind: "plan",
    title: "Know",
    body: "Every appointment and task in one plan, so nobody has to ring round to find out.",
  },
  {
    kind: "ask",
    title: "Ask",
    body: "Ask one person for a lift or a form, and see clearly when they’ve said yes.",
  },
  {
    kind: "update",
    title: "Share",
    body: "Short family updates after each visit, so the news reaches everyone once.",
  },
] as const;

const states = [
  { tone: "needs", label: "Needs someone", body: "Nobody has taken it yet" },
  { tone: "waiting", label: "Asked Tom · waiting", body: "Sent, not answered" },
  {
    tone: "onit",
    label: "Tom is on it",
    body: "Accepted, and yours to stop worrying about",
  },
] as const;

const roles = [
  {
    initials: "HP",
    tone: "jean",
    title: "The one who organises",
    body: "Keep the whole plan in one place and stop being the only person who knows.",
  },
  {
    initials: "TP",
    tone: "plan",
    title: "Brothers and sisters",
    body: "See what’s coming up and pick up a request when nobody else has.",
  },
  {
    initials: "DM",
    tone: "ask",
    title: "A neighbour or friend",
    body: "Get just the details for the lift or errand you’ve agreed to. Nothing else.",
  },
  {
    initials: "JP",
    tone: "update",
    title: "Mum or Dad",
    body: "A calm, large-type screen showing today and who’s coming, if they want it.",
  },
] as const;

const trust = [
  {
    title: "You choose who sees what",
    body: "Family, editor, viewer or helper. Change or remove access at any time.",
  },
  {
    title: "Helpers see logistics only",
    body: "Time, place and who to call. Never family notes or files.",
  },
  {
    title: "No medical advice",
    body: "OurNext organises care. It doesn’t diagnose, monitor or recommend treatment.",
  },
  {
    title: "Not a social feed",
    body: "Updates go to the people organising care. No adverts, no public pages.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader current="home" />
      <RevealObserver />
      <main id="main">
        <section className="wrap lp-hero" aria-labelledby="hero-title">
          <div className="lp-hero__copy">
            <p className="lp-eyebrow">For families looking after a parent</p>
            <h1 id="hero-title" className="lp-hero__title">
              Know what’s happening.
              <br />
              Know what’s next.
              <br />
              <span>Share the load.</span>
            </h1>
            <p className="lp-hero__lead">
              One shared plan for the family and friends helping Mum or Dad. See
              every appointment, who has said yes, and what still needs someone.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#early">
                Get early access
              </a>
              <a className="btn btn-quiet" href="#how">
                See how it works
              </a>
            </div>
            <p className="lp-note">
              Coming to iPhone and Android. Free for everyday coordination.
            </p>
          </div>
          <PhoneStage
            src="/screens/today.png"
            height={1598}
            alt="OurNext Today screen: two requests that need someone, each with ‘I can do this’ and ‘Ask someone’ buttons"
            dots
            priority
          />
        </section>

        <section className="lp-verbs" aria-label="What OurNext does">
          <ul className="wrap lp-verbs__list" data-reveal="stagger">
            {verbs.map((verb) => (
              <li key={verb.title}>
                <ObjectTile kind={verb.kind} className="tile--sm" />
                <div>
                  <h2>{verb.title}</h2>
                  <p>{verb.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="lp-story" aria-labelledby="story-title">
          <div className="wrap lp-story__layout" data-reveal>
            <Image
              className="lp-story__art"
              src="/photos/family-reunion.webp"
              alt="An older couple hugging their grown-up son and daughter on a porch, all smiling"
              width={1600}
              height={1067}
              sizes="(min-width: 900px) 560px, 100vw"
            />
            <div className="lp-story__copy">
              <p className="lp-eyebrow">Why OurNext</p>
              <h2 id="story-title" className="lp-title">
                Looking after a parent takes more than one person
              </h2>
              <p className="lp-lead">
                Appointments, lifts, prescriptions, forms. In most families it
                all runs through one person’s memory and a group chat.
              </p>
              <p className="lp-lead">
                OurNext gives everyone the same plan, so each of you can see
                what’s covered and what still needs a hand.
              </p>
            </div>
          </div>
        </section>

        <section className="wrap lp-feature" id="how" data-reveal>
          <div className="lp-feature__copy">
            <p className="lp-eyebrow lp-eyebrow--ask">Requests</p>
            <h2 className="lp-title">Always know who said yes</h2>
            <p className="lp-lead">
              No more wondering whether your brother saw the message. Every
              request shows where it stands, in words.
            </p>
            <ul className="lp-states">
              {states.map((state) => (
                <li key={state.label}>
                  <span className={`lp-chip lp-chip--${state.tone}`}>
                    {state.label}
                  </span>
                  <span>{state.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <PhoneStage
            src="/screens/asked.png"
            height={1598}
            alt="A request for a lift to a hearing aid review, showing ‘Asked Tom, waiting’"
          />
        </section>

        <section className="wrap lp-feature lp-feature--flip" data-reveal>
          <div className="lp-feature__copy">
            <p className="lp-eyebrow lp-eyebrow--people">People</p>
            <h2 className="lp-title">
              Let a neighbour help without sharing everything
            </h2>
            <p className="lp-lead">
              Invite someone for a single appointment. They see the time, the
              place and who to call. Family notes, files and other appointments
              stay with the family.
            </p>
            <p className="lp-lead">
              Everyone sees exactly what they will and won’t see before they
              accept.
            </p>
          </div>
          <PhoneStage
            src="/screens/invite.png"
            height={1350}
            alt="An invitation showing what a helper will see and won’t see before they accept"
          />
        </section>

        <section className="wrap lp-feature" data-reveal>
          <div className="lp-feature__copy">
            <p className="lp-eyebrow lp-eyebrow--jean">Their own screen</p>
            <h2 className="lp-title">
              A quieter view for the person you’re caring for
            </h2>
            <p className="lp-lead">
              If they’d like one, your parent gets a large, simple screen:
              what’s happening today, who is coming, and notes from the family.
            </p>
            <p className="lp-lead">
              It’s optional. OurNext works just as well if only you use it.
            </p>
          </div>
          <PhoneStage
            src="/screens/jean.png"
            height={1458}
            alt="A large-type screen greeting Jean, showing today’s district nurse visit and who will be there"
          />
        </section>

        <section className="lp-who" id="who">
          <div className="wrap">
            <h2 className="lp-title">A place for everyone who helps</h2>
            <p className="lp-lead">
              Each person gets the view that fits what they do.
            </p>
            <ul className="lp-roles" data-reveal="stagger">
              {roles.map((role) => (
                <li key={role.title}>
                  <span className="lp-avatar" data-tone={role.tone} aria-hidden>
                    {role.initials}
                  </span>
                  <h3>{role.title}</h3>
                  <p>{role.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="lp-trust" id="private">
          <div className="wrap lp-trust__layout">
            <div className="lp-trust__intro">
              <h2 className="lp-title">Private, and honest about what it is</h2>
              <p className="lp-lead">
                Care information is personal. OurNext is built around sharing
                as little as each person needs.
              </p>
              <Link href="/privacy">Read the privacy notice</Link>
            </div>
            <ul className="lp-trust__points" data-reveal="stagger">
              {trust.map((point) => (
                <li key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="wrap lp-plus">
          <div className="lp-plus__band" data-reveal>
            <div>
              <h2>Coordination stays free</h2>
              <p>
                Plans, requests, updates, people and your parent’s screen never
                need payment. OurNext Plus is optional, for extra file storage,
                a handover pack and more than one care space.
              </p>
            </div>
            <Link className="btn btn-quiet" href="/support">
              Ask about Plus
            </Link>
          </div>
        </section>

        <section className="wrap lp-early" id="early">
          <div className="lp-early__card" data-reveal>
            <Image
              className="lp-early__art"
              src="/photos/mother-daughter.webp"
              alt="A woman holding her mother’s hand across the living room, both smiling, with tea on the table"
              width={1600}
              height={1067}
              sizes="(min-width: 900px) 480px, 100vw"
            />
            <div className="lp-early__copy">
              <h2 className="lp-early__title">
                Be first to know when OurNext is ready
              </h2>
              <p className="lp-lead">
                We’re finishing the app for iPhone and Android. Send us an
                email and we’ll write back once, when you can download it.
              </p>
              <a className="btn btn-primary" href={earlyAccessHref}>
                Email us for early access
              </a>
              <p className="lp-note">
                Opens your email app, addressed to {earlyAccessEmail}.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
