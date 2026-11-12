import type { LegalSection } from "@/content/legal";

function enrichLinks(text: string) {
  const mail = /(privacy|support)@ournext\.uk/g;
  const parts: (string | { href: string; label: string })[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = mail.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push({ href: `mailto:${match[0]}`, label: match[0] });
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function Paragraph({ text }: { text: string }) {
  return (
    <p>
      {enrichLinks(text).map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <a key={i} href={part.href}>
            {part.label}
          </a>
        ),
      )}
    </p>
  );
}

export function LegalDoc({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <header className="page-hero">
        <h1>{title}</h1>
        <p className="meta">OurNext · Last updated {updated}</p>
        <p className="notice">
          This is a product-accurate draft for the OurNext app. It is not legal
          advice. Have it reviewed by a qualified adviser before public launch.
        </p>
      </header>
      <article className="prose">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((p) => (
              <Paragraph key={p.slice(0, 48)} text={p} />
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item.slice(0, 48)}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>
    </>
  );
}
