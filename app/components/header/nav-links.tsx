"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
interface NavLinkProps {
  href: string;
  children: ReactNode;

}
export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();
  return (
    <>


      <Link
        href={href}
        className={`group relative px-1 py-2 text-sm font-medium transition ${path.startsWith(href)
            ? "text-green-800"
            : "text-green-950 hover:text-green-700"
          }`}
      >
        {children}

        <span
          className={`absolute bottom-0 left-0 h-[2px] bg-green-700 transition-all duration-300 ${path.startsWith(href)
              ? "w-full"
              : "w-0 group-hover:w-full"
            }`}
        />
      </Link>
    </>
  )
}