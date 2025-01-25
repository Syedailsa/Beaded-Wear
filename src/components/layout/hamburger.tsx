import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import navItems from "./navItems";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function MenuBar() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden text-black"
          aria-label="Open menu"
        >
          <Menu className="h-[55px] w-[55px]" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[200px] sm:w-[200px] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-black no-select"
      >
        <nav className="select-none  list-none">
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className={index < navItems.length - 1 ? "pb-5" : ""}
            >
              <SheetClose asChild>
                <Link
                  href={item.href}
                  className={`hover:font-semibold block w-full select-none
          ${pathname === item.href ? "drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] font-semibold" : ""}`}
                >
                  {item.label}
                </Link>
              </SheetClose>
            </li>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}