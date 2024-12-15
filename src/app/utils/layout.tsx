import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function UtilsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="backgrop-blur sticky top-0 flex w-full bg-background">
        <div className="container mx-4 flex h-14 items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-4 text-sm">
              <NavigationMenuItem>
                <Link href="/utils/reademe">Reademe</Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/utils/redeme">redeme</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </>
  );
}
