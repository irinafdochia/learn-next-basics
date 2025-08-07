import Image from "next/image";

export default function Header() {
  return (
      <nav className="fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10">
        <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <a className="shrink-0" aria-label="Logo" href="/">
              <Image
                src="/logo.svg"
                width={50}
                height={50}
                alt="Logo"
              />
            </a>
          </div>
          <div className="flex items-center gap-6 max-md:hidden">
            <button className="text-sm/6 text-gray-950 dark:text-white" href="/docs">
              Login
            </button>
          </div>
        </div>
      </nav>
  );
}
