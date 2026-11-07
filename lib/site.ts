/**
 * Site-wide content. Edit copy here instead of digging through components.
 */
export const site = {
  name: { first: "Justin", last: "Joseph" },
  tagline: "Software Developer",
  location: "Toronto · ON",
  email: "justinjoseph2336@gmail.com",
  /** Optional hero portrait in /public (e.g. "/portrait.jpg"). Leave null for none. */
  portrait: "/portrait.JPEG" as string | null,
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    // TODO: replace with your real profile URLs
    {
      label: "GitHub",
      icon: "github",
      href: "https://github.com/JuustinJoseph",
    },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/" },
  ],
} as const;
