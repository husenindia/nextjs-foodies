"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink({href, children}) {
    const path = usePathname();
    return (
        <>
            <Link
              href={href}
              className={
                path.startsWith(href)
                  ? "text-sm font-medium text-green-600 transition hover:text-green-700"
                  : "text-sm font-medium text-green-950 transition hover:text-green-700"
              }>
              {children}
            </Link>
        </>
    )
}