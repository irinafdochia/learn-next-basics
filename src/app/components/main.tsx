import Image from "next/image";

export default function Main() {
  return (
    <div className="mt-14 pr-20 pl-20">
      <div className="relative z-20 flex flex-col w-full gap-6 lg:w-1/2 xl:mt-10">
        <section className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
          <div className="leading-8 text-center md:leading-10 md:text-left">
            <h1 className="motto">Turning to-dos into done.</h1>
            <h2 className="sub-motto w-full md:w-1/2 my-2 text-medium lg:text-large font-normal text-default-500 block max-w-full w-full! text-center md:text-left lg:pr-8">
              Make progress, one task at a time.
            </h2>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <a
              className="z-0 group relative bg-[#006fee] text-white inline-flex items-center justify-center box-border select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden cursor-pointer outline-none px-6 min-w-24 h-12 text-medium gap-3 rounded-full transition transform bg-primary text-primary-foreground w-full md:h-11 md:w-auto"
              role="button">
              Get Started
              <Image src="/arrow-right.svg" fill={true} alt="Arrow" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
