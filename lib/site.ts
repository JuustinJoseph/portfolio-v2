/**
 * Site-wide content. Edit copy here instead of digging through components.
 */
export const site = {
  name: { first: "Justin", last: "Joseph" },
  role: "Software Developer",
  location: "Toronto · ON",
  email: "justinjoseph2336@gmail.com",
  /** Optional hero portrait in /public (e.g. "/portrait.jpg"). Leave null for none. */
  portrait: "/portrait.JPEG" as string | null,
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Stack", href: "#stack" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    {
      label: "GitHub",
      icon: "github",
      href: "https://github.com/JuustinJoseph",
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/justin-joseph-8a0035266/",
    },
  ],
} as const;
