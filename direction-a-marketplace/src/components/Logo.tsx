import { site } from "@/config/site";

export default function Logo() {
  const { src } = site.logo;

  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="logo-img" src={src} alt={site.name} height={32} />;
  }

  // Placeholder until the real logo is supplied (see src/config/site.ts).
  return (
    <span className="logo">
      <svg width="30" height="26" viewBox="0 0 28 24" aria-hidden="true">
        <path d="M14 0 28 24H19L14 15 9 24H0Z" fill="currentColor" />
      </svg>
      <span className="logo-word">Anywhere Clubs</span>
    </span>
  );
}
