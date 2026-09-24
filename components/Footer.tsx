import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="w-full max-w-277.5 mx-auto mt-16 md:mt-35 lg:mt-45 pb-16 md:pb-20 lg:pb-24 px-6 md:px-10 xl:px-0">
      {/* Desktop Layout (3 columns: Logo, Info, Social) */}
      <div className="hidden lg:flex items-center justify-between gap-8">
        <Link href="/" aria-label="Equalizer Homepage" className="inline-block shrink-0">
          <Image
            src="/assets/logo.svg"
            alt="Equalizer logo"
            width={147}
            height={33}
            className="h-8 w-auto"
          />
        </Link>

        <div className="text-base leading-6.5 text-dark-main max-w-91.5">
          <p>All rights reserved &copy; Equalizer 2021</p>
          <p>
            Have any problems? Contact us via social media or email us at{" "}
            <a
              href="mailto:equalizer@example.com"
              className="font-bold hover:text-orange-accent transition-colors"
            >
              equalizer@example.com
            </a>
          </p>
        </div>

        <SocialLinks className="shrink-0" />
      </div>

      {/* Tablet Layout (2 columns: Left is Logo + Info, Right is Social aligned to bottom) */}
      <div className="hidden md:flex lg:hidden items-end justify-between gap-8">
        <div className="flex flex-col gap-8 max-w-91.5">
          <Link href="/" aria-label="Equalizer Homepage" className="inline-block">
            <Image
              src="/assets/logo.svg"
              alt="Equalizer logo"
              width={147}
              height={33}
              className="h-8 w-auto"
            />
          </Link>

          <div className="text-base leading-6.5 text-dark-main">
            <p>All rights reserved &copy; Equalizer 2021</p>
            <p>
              Have any problems? Contact us via social media or email us at{" "}
              <a
                href="mailto:equalizer@example.com"
                className="font-bold hover:text-orange-accent transition-colors"
              >
                equalizer@example.com
              </a>
            </p>
          </div>
        </div>

        <SocialLinks className="pb-1" />
      </div>

      {/* Mobile Layout (Stacked vertically: Logo, Info, Social) */}
      <div className="flex flex-col md:hidden gap-8">
        <Link href="/" aria-label="Equalizer Homepage" className="inline-block">
          <Image
            src="/assets/logo.svg"
            alt="Equalizer logo"
            width={147}
            height={33}
            className="h-8 w-auto"
          />
        </Link>

        <div className="text-base leading-6.5 text-dark-main max-w-81.75">
          <p>All rights reserved &copy; Equalizer 2021</p>
          <p>
            Have any problems? Contact us via social media or email us at{" "}
            <a
              href="mailto:equalizer@example.com"
              className="font-bold hover:text-orange-accent transition-colors"
            >
              equalizer@example.com
            </a>
          </p>
        </div>

        <SocialLinks className="pt-4" />
      </div>
    </footer>
  );
}
