import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full max-w-277.5 mx-auto pt-10 px-6 md:pt-16 md:px-10 xl:px-0">
      <Link href="/" aria-label="Equalizer Homepage" className="inline-block">
        <Image
          src="/assets/logo.svg"
          alt="Equalizer logo"
          width={147}
          height={33}
          priority
          className="h-8 w-auto"
        />
      </Link>
    </header>
  );
}
