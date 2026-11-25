/**
 * Everything you are likely to change before launch lives here.
 *
 * - Drop the real explainer video in /public/video/ and set `video.src`.
 * - Drop the real logo in /public/ and set `logo.src`.
 */
type Cta = {
  label: string;
  href: string;
  micro: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export const site = {
  name: "Anywhere Clubs",

  // Gym owner landing page (/gym-owners)
  ownerCta: {
    label: "Book a call",
    href: "https://calendly.com/tech-anywhereclubs/30min",
    micro: "30 minutes · no obligation · we’ll walk you through it live",
  } as Cta,

  // Trainer landing page (/trainers)
  trainerCta: {
    label: "Sign up & get verified",
    href: "https://anywhereclubs.com/register",
    micro: "Create your profile, get verified, then apply to gyms near you",
    secondaryLabel: "Or explore gyms near you first",
    secondaryHref: "https://anywhereclubs.com/search",
  } as Cta,

  // Explainer video. While `src` is null a placeholder is shown.
  video: {
    src: null as string | null, // e.g. "/video/explainer.mp4"
    poster: null as string | null, // e.g. "/video/poster.jpg"
    label: "90 sec explainer",
  },

  // Logo. While `src` is null a placeholder wordmark is shown.
  logo: {
    src: null as string | null, // e.g. "/logo.svg"
  },

  // Shown on the gym owner page where used. Taken from anywhereclubs.com
  // when this was built; check it is still current before launch.
  gymsListed: "7,998",
};
