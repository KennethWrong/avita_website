"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";
import { Button } from "./ui/button";

export const NavbarDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <DropdownMenu
      open={openDropdown}
      onOpenChange={() => setOpenDropdown(false)}
    >
      <DropdownMenuTrigger onMouseEnter={() => setOpenDropdown(true)}>
        Products
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onMouseLeave={() => setOpenDropdown(false)}
        align="end"
      >
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Laptops</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Link href="/hk/product/admiror">AVITA ADMIROR</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/hk/product/liber-v">AVITA LIBER</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/hk/product/pura-a+">AVITA PURA</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/hk/product/essential-lite">AVITA ESSENTIAL</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>AVITA SATUS</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Link href="/hk/product/satus-t101">AVITA SATUS T101</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/hk/product/satus-s">AVITA SATUS S101</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/hk/product/satus-s">AVITA SATUS S102</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/hk/product/satus-s102-intelcore">
                    AVITA SATUS S102-Intel Core
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
