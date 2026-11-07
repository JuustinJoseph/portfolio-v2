/**
 * Page content for the sections below the hero.
 *
 * Everything marked TODO is placeholder copy. Swap in your real details;
 * the components render whatever is in these arrays, so adding or removing
 * an item needs no component changes.
 */

/** Short intro shown under the "Software Developer" heading. */
export const about = {
  // TODO: write this in your own words
  intro:
    "I build web applications end to end, from the database to the interface. I care about software that is fast, clear, and easy to maintain.",
};

/** Big numbers row. TODO: use real numbers, or delete the row in About.tsx. */
export const stats = [
  { value: "+3", label: "Years of experience" },
  { value: "+10", label: "Projects completed" },
  { value: "+5", label: "Technologies shipped" },
];

/** The two coloured cards under the stats. `tone` picks the card colour. */
export const focusCards = [
  { title: "Full-stack web apps", tone: "accent" },
  { title: "TypeScript, React, Next.js, Node", tone: "highlight" },
] as const;

export type Project = {
  name: string;
  description: string;
  href: string;
  /** Optional screenshot in /public. Without one, a coloured tile is shown. */
  image?: string;
};

// TODO: your real projects
export const projects: Project[] = [
  { name: "Project One", description: "Short one-line summary", href: "#" },
  { name: "Project Two", description: "Short one-line summary", href: "#" },
  { name: "Project Three", description: "Short one-line summary", href: "#" },
];

export type Job = {
  company: string;
  summary: string;
  period: string;
  href?: string;
};

// TODO: your real experience, newest first
export const experience: Job[] = [
  {
    company: "Company Name",
    summary: "What you built or owned there, and the result.",
    period: "2024 – Present",
  },
  {
    company: "Company Name",
    summary: "What you built or owned there, and the result.",
    period: "2022 – 2024",
  },
];

/** Tools grid. `note` is the small grey line under each name. */
// TODO: adjust to your actual stack
export const tools = [
  { name: "TypeScript", note: "Language" },
  { name: "React", note: "UI library" },
  { name: "Next.js", note: "React framework" },
  { name: "Node.js", note: "Runtime" },
  { name: "PostgreSQL", note: "Database" },
  { name: "Tailwind CSS", note: "Styling" },
];
