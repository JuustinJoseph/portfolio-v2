import {
  siAngular,
  siCss,
  siDocker,
  siDotnet,
  siExpress,
  siHtml5,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

/**
 * Brand logos (from the `simple-icons` package) for the Tools & Stack grid,
 * keyed by the names used in `stack` in lib/content.ts. simple-icons has no
 * Microsoft or AWS logos, so those are SVG files in public/logos (from
 * Devicon, MIT). Anything else falls back to a monogram.
 */
const logos: Record<string, SimpleIcon> = {
  React: siReact,
  "Next.js": siNextdotjs,
  Angular: siAngular,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  "Tailwind CSS": siTailwindcss,
  HTML5: siHtml5,
  CSS3: siCss,
  "ASP.NET Core": siDotnet,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  Python: siPython,
  MongoDB: siMongodb,
  Docker: siDocker,
};

/** Logos served from public/logos. Every "AWS …" tool uses the AWS logo. */
const files: Record<string, string> = {
  "C#": "/logos/csharp.svg",
  "VB.NET": "/logos/visualbasic.svg",
  "Microsoft SQL Server": "/logos/sqlserver.svg",
};

function logoFile(name: string) {
  return name.startsWith("AWS ") ? "/logos/aws.svg" : files[name];
}

/** White rounded tile with the tool's logo in its brand colour (or a monogram). */
export function TechLogo({ name }: { name: string }) {
  const icon = logos[name];
  const file = logoFile(name);

  return (
    <span className="bg-paper text-ink grid size-12 shrink-0 place-items-center rounded-xl text-lg font-bold">
      {icon ? (
        <svg
          viewBox="0 0 24 24"
          className="size-6"
          fill={`#${icon.hex}`}
          aria-hidden
        >
          <path d={icon.path} />
        </svg>
      ) : file ? (
        // Plain <img>: tiny local SVGs, nothing for next/image to optimise.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={file} alt="" className="size-7" />
      ) : (
        <span aria-hidden>{monogram(name)}</span>
      )}
    </span>
  );
}

/** Fallback letters: "C#" as is, multi-word names as initials ("AWS Lambda" → "AL"). */
function monogram(name: string) {
  if (name === "C#") return "C#";
  const words = name.split(" ");
  return words.length > 1
    ? words
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
    : name[0];
}
