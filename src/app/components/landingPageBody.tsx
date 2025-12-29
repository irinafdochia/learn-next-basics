import Link from 'next/link'

export default function LandingPageBody() {
  return (
    <div className="mt-14 pr-50 pl-50">
      <div className="relative z-20 flex flex-col w-full gap-6 lg:w-1/2 xl:mt-10">
        <section className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
          <div className="leading-8 text-center md:leading-10 md:text-left">
            <h1 className="motto">Turning to-dos into done.</h1>
            <h2 className="sub-motto w-full md:w-1/2 my-2 text-medium lg:text-large font-normal text-default-500 block max-w-full w-full! text-center md:text-left lg:pr-8">
              Make progress, one task at a time.
            </h2>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Link
              href="/dashboard"
              id="get-started"
              className="z-0 group relative bg-[#006fee] text-white inline-flex items-center justify-center box-border select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden cursor-pointer outline-none px-6 min-w-24 h-12 text-medium gap-3 rounded-full transition transform bg-primary text-primary-foreground w-full md:h-11 md:w-auto"
              role="button">
              Get Started
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="1em"
                role="presentation"
                viewBox="0 0 24 24"
                width="1em"
                className="group-data-[hover=true]:translate-x-0.5 outline-solid outline-transparent transition-transform">
                <path
                  d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"></path>
                <path
                  d="M4.08325 14H23.7183"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"></path>
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
