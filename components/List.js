import Link from "next/link";

const projects = [
  {
    title: "Girls Who Code Texas State",
    description: "Notes here",
    href: "link.com",
  },
  {
    title: "C++ vs. Java",
    description: "Notes here",
    href: "link.com",
  },
];

export default function List() {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {projects.map((project) => (
        <li key={project.id} className="px-4 py-12 sm:px-0">
          <Link href={project.href}>
            <div className="underline underline-offset-2">{project.title}</div>
          </Link>
          <div>{project.description}</div>
        </li>
      ))}
    </ul>
  );
}
