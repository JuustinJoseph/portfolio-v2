/**
 * Logo files for the Tools & Stack grid, keyed by the names used in `stack`
 * in lib/content.ts. All logos are SVGs from Devicon (MIT, see
 * public/logos/LICENSE-devicon.txt). Every "AWS …" tool uses the AWS logo.
 */
const files: Record<string, string> = {
  React: "react",
  "Next.js": "nextjs",
  Angular: "angular",
  TypeScript: "typescript",
  JavaScript: "javascript",
  "Tailwind CSS": "tailwindcss",
  HTML5: "html5",
  CSS3: "css3",
  "C#": "csharp",
  "VB.NET": "visualbasic",
  "ASP.NET Core": "dotnetcore",
  "Node.js": "nodejs",
  "Express.js": "express",
  Python: "python",
  "Microsoft SQL Server": "sqlserver",
  MongoDB: "mongodb",
  Docker: "docker",
};

function logoFile(name: string) {
  const file = name.startsWith("AWS ") ? "aws" : files[name];
  return file && `/logos/${file}.svg`;
}

/** White rounded tile with the tool's logo (or its initial as a fallback). */
export function TechLogo({ name }: { name: string }) {
  const file = logoFile(name);

  return (
    <span className="bg-paper text-ink grid size-12 shrink-0 place-items-center rounded-xl text-lg font-bold">
      {file ? (
        // Plain <img>: tiny local SVGs, nothing for next/image to optimise.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={file} alt="" className="size-7" />
      ) : (
        <span aria-hidden>{name[0]}</span>
      )}
    </span>
  );
}
