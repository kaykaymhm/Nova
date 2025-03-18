import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { link as linkStyles } from "@heroui/theme";

export const Navbar = () => {
  return (
    <HeroUINavbar 
      maxWidth="xl" 
      position="sticky" 
      className="bg-transparent backdrop-blur-sm border-b border-gray-800"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            {/* Nova Bundler Logo */}
            <Image 
              src="/logo.avif" 
              alt="Nova Bundler Logo" 
              width={40} 
              height={40} 
              className="rounded-md"
            />
            <p className="font-righteous text-inherit text-xl tracking-wider">NOVA BUNDLER</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-4">
          <Link 
            href="https://docs.tradeonnova.io" 
            className={clsx(linkStyles({ color: "foreground" }), "hover:text-purple-400")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="bg-gradient-to-r from-purple-600 to-purple-400 text-white font-righteous tracking-wide"
            href="https://t.me/NovaBundlerBot?start=start"
            target="_blank"
            rel="noopener noreferrer"
            variant="flat"
            radius="full"
          >
            Launch App
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-black/90 backdrop-blur-md pt-8">
        <div className="mx-4 mt-2 flex flex-col gap-4">
          <NavbarMenuItem>
            <Link 
              href="https://docs.tradeonnova.io" 
              className="text-foreground text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="mt-4">
            <Button
              as={Link}
              className="bg-gradient-to-r from-purple-600 to-purple-400 text-white font-righteous tracking-wide w-full"
              href="https://t.me/NovaBundlerBot?start=start"
              target="_blank"
              rel="noopener noreferrer"
              variant="flat"
              radius="full"
            >
              Launch App
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
