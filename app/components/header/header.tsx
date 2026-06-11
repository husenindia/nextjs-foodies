import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
                src="/logo1.png"
                alt="logo"
                width={150}
                height={55}
                priority />
            
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/home"
              className="text-sm font-medium text-green-950 transition hover:text-green-700"
            >
              Home
            </Link>

            <Link
              href="/meals"
              className="text-sm font-medium text-green-950 transition hover:text-green-700"
            >
              Browse Meals
            </Link>

            <Link
              href="/community"
              className="text-sm font-medium text-green-950 transition hover:text-green-700"
            >
              Community
            </Link>

            <Link
              href="/countries"
              className="text-sm font-medium text-green-950 transition hover:text-green-700"
            >
              Countries
            </Link>

            <Link
              href="/favorites"
              className="text-sm font-medium text-green-950 transition hover:text-green-700"
            >
              Favorites
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/meals/share"
              className="rounded-full bg-green-800 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-900"
            >
              Share Meal
            </Link>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden text-3xl text-green-900">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}