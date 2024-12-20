"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const items = [
  { name: "stochastic blue", href: "https://stochasticblue.com/" },
  { name: "invoke agents", href: "#" },
  { name: "quickist", href: "https://quickist.pro/" },
  { name: "lens", href: "https://orb.club/@isekai" },
  { name: "farcaster", href: "https://warpcast.com/samizdat" },
  { name: "bluesky", href: "https://bsky.app/profile/samizdat.ink" },
  { name: "threads", href: "https://www.threads.net/@kende" },
];

export function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.name}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className={cn(
                "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              )}>
                {item.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}