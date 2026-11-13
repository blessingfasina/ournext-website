/**
 * Early access is a plain email link until the site has a sign-up form.
 * Change the address here if a different mailbox should receive requests.
 */
export const earlyAccessEmail = "support@ournext.uk";

export const earlyAccessHref = `mailto:${earlyAccessEmail}?subject=${encodeURIComponent(
  "OurNext early access",
)}&body=${encodeURIComponent(
  "Please tell me when OurNext is ready to download.",
)}`;
