/**
 * Page content for the tagline card and the sections below the hero.
 *
 * Everything marked TODO is placeholder copy. Swap in your real details;
 * the components render whatever is in these arrays, so adding or removing
 * an item needs no component changes.
 */

/** Tagline: short line about you, shown in the card beneath the portrait photo. */
export const tagline =
  "I like building things, solving problems, and figuring out how things work.";

/** About section, right below the hero. One string per paragraph. */
export const about = [
  "I'm a software developer who loves building things, exploring new technologies, and turning random ideas into actual projects.",
  "Outside of coding, you'll probably find me at the gym, playing guitar, or picking up yet another hobby I swear I'll stick with. I'm naturally curious, a little ambitious, and always looking for something new to get into. Apparently, sitting still isn't really my thing.",
];

/** Stats row shown in the hero, under the role. */
// TODO: confirm these numbers
export const stats = [
  { value: "+3", label: "Years of experience" },
  { value: "+10", label: "Projects completed" },
  { value: "+5", label: "Technologies shipped" },
];

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

export type School = {
  school: string;
  /** Degree / program, plus anything worth noting (honours, focus). */
  summary: string;
  period: string;
  href?: string;
};

// TODO: your real education, newest first
export const education: School[] = [
  {
    school: "School Name",
    summary: "Degree or program, e.g. B.Sc. Computer Science.",
    period: "2018 – 2022",
  },
];
