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
      ? "rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800"
      : "rounded-full px-4 py-2 text-sm font-medium text-green-950 transition hover:bg-green-50 hover:text-green-700"
  }
>
  {children}
</Link>
        </>
    )
}