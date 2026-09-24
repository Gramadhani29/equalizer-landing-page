import Image from "next/image";

export function ProductSection() {
  return (
    <section className="w-full max-w-277.5 mx-auto mt-41.5 md:mt-50 lg:mt-53 px-6 md:px-10 xl:px-0 relative">
      {/* Dark container */}
      <div className="relative w-full h-96 md:h-150 lg:h-150 bg-dark-main rounded-xl">
        {/* Pattern 2 layer (clipped to rounded corners of dark box) */}
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <Image
            src="/assets/bg-pattern-2.svg"
            alt=""
            width={312}
            height={468}
            className="absolute left-1/2 -translate-x-1/2 -top-6.25 md:top-1/2 md:-translate-y-1/2 select-none"
          />
        </div>

        {/* Phone illustration (overlapping top edge of dark container) */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-22.5 md:left-15 md:-top-34.5 md:translate-x-0 lg:left-25.5 lg:-top-53 z-10">
          <Image
            src="/assets/illustration-app.png"
            alt="Equalizer app interface showing equalizer controls and volume mixer"
            width={312}
            height={642}
            priority
            className="w-52.25 h-auto md:w-67.5 lg:w-78 drop-shadow-2xl"
          />
        </div>

        {/* Desktop & Tablet: Absolute Orange Card (overlapping bottom edge of dark container) */}
        <div className="hidden md:block absolute md:right-14.5 md:-bottom-28 lg:right-25.5 lg:-bottom-28.75 z-20 md:w-99.75 lg:w-111.5 bg-orange-accent rounded-xl p-12 lg:p-14">
          <h2 className="text-[32px] md:text-[40px] leading-10 md:leading-13 font-bold text-cream-main">
            Premium EQ
          </h2>
          <p className="text-lg md:text-xl leading-7 md:leading-8.5 text-cream-main mt-3 md:mt-5 font-normal">
            Get expert-level control with a robust equalizer, volume mixer, and spatial audio.
            Take your listening experience to a whole new level and access all our incredible
            features!
          </p>

          <div className="flex items-center mt-6 md:mt-8">
            <span className="text-[65px] font-bold leading-none text-cream-main">$4</span>
            <span className="text-xl font-normal leading-8 text-cream-main ml-4 self-center tracking-normal">
              / month
            </span>
          </div>

          <div className="flex flex-col gap-4 mt-8 md:mt-11">
            <a
              href="#"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-bold text-lg leading-8 bg-dark-main text-cream-main transition-colors duration-200 cursor-pointer hover:bg-cyan-accent"
            >
              <Image
                src="/assets/icon-apple.svg"
                alt=""
                width={18}
                height={20}
                className="w-4.5 h-5"
              />
              <span>iOS Download</span>
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-bold text-lg leading-8 bg-cream-main text-dark-main transition-colors duration-200 cursor-pointer hover:bg-yellow-accent"
            >
              <Image
                src="/assets/icon-android.svg"
                alt=""
                width={17}
                height={20}
                className="w-4.25 h-5"
              />
              <span>Android Download</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile: Orange Card (stacked directly below dark container) */}
      <div className="block md:hidden relative z-20 w-full bg-orange-accent rounded-xl p-9 sm:p-12">
        <h2 className="text-[32px] leading-10 font-bold text-cream-main">
          Premium EQ
        </h2>
        <p className="text-lg leading-7 text-cream-main mt-3 font-normal">
          Get expert-level control with a robust equalizer, volume mixer, and spatial audio.
          Take your listening experience to a whole new level and access all our incredible
          features!
        </p>

        <div className="flex items-center mt-6">
          <span className="text-[65px] font-bold leading-none text-cream-main">$4</span>
          <span className="text-xl font-normal leading-8 text-cream-main ml-4 self-center tracking-normal">
            / month
          </span>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <a
            href="#"
            className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-bold text-lg leading-8 bg-dark-main text-cream-main transition-colors duration-200 cursor-pointer hover:bg-cyan-accent"
          >
            <Image
              src="/assets/icon-apple.svg"
              alt=""
              width={18}
              height={20}
              className="w-4.5 h-5"
            />
            <span>iOS Download</span>
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-bold text-lg leading-8 bg-cream-main text-dark-main transition-colors duration-200 cursor-pointer hover:bg-yellow-accent"
          >
            <Image
              src="/assets/icon-android.svg"
              alt=""
              width={17}
              height={20}
              className="w-4.25 h-5"
            />
            <span>Android Download</span>
          </a>
        </div>
      </div>
    </section>
  );
}
