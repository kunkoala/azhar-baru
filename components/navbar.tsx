import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const navItems = {
  "/": {
    name: "home",
  },
  "/projects": {
    name: "projects",
  },
  "/blog": {
    name: "blog",
  },
  "/music": {
    name: "music",
  },
  "https://www.linkedin.com/in/azharfr": {
    name: "linkedin",
  },
};

export function Navbar() {
  return (
    <main className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <ModeToggle />
        </nav>
      </div>
    </main>
  );
}
