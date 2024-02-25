"use client"
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {Image, NavbarMenu} from "@nextui-org/react";
import {link as linkStyles} from "@nextui-org/theme";

import {siteConfig} from "@/config/site";
import clsx from "clsx";

import {ThemeSwitch} from "@/components/theme-switch";
import {GithubIcon, HeartFilledIcon, InstagramIcon, LoginIcon} from "@/components/icons";
import React, {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/shadcn/ui/dropdown-menu";

const Profile = () => {
    const {user, isAuthenticated, isLoading, logout} = useAuth0();
    const [menuOpen, setMenuOpen] = useState(false);

    const name = user?.name;
    const picture = user?.picture;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        logout({logoutParams: {returnTo: window.location.origin}});
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Image
                    src={picture}
                    alt={name}
                    width={40}
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-4">
                <DropdownMenuLabel>Hi {name}!</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={handleLogout}>
                        <LoginIcon height={"28"} width={"28"}/> Log out
                        <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export const Navbar = () => {
    const {isAuthenticated, loginWithRedirect} = useAuth0();
    const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);

    return (
        <NextUINavbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}
                      className={"flex z-20 box-border border-shadow-lg p-0 capitalize rounded-[3.5rem] max-w-screen-lg mx-auto mt-7 shadow"}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
                <NavbarBrand>
                    <Link className="flex justify-start items-center gap-2 ml-2 flex-shrink-0 mt-1" href="/">
                        <Image
                            width={64}
                            alt={"logo"}
                            src={"/logo.png"}
                            className={"flex-shrink-0"}
                        />
                        <p className="font-bold main">Team 334</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex md:text-center gap-4 mr-0 lg:mr-[4.5rem]" justify="center">
                {siteConfig.navItems.map((item) => (
                    <NavbarItem key={item.href}>
                        <Link
                            className={clsx(
                                linkStyles({color: "foreground"}),
                                "data-[active=true]:text-primary data-[active=true]:font-medium transition ease-in-out delay-200 hover:text-blue-600 font-bold"
                            )}
                            color="foreground"
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="gap-2 flex">
                    <Link isExternal href={siteConfig.links.instagram} aria-label="Instagram"
                          className={"hidden lg:flex"}>
                        <InstagramIcon className="text-default-500 m-auto"/>
                    </Link>
                    <Link isExternal href={siteConfig.links.github} aria-label="Github" className={"hidden lg:flex"}>
                        <GithubIcon className={"text-default-500 m-auto"}/>
                    </Link>
                    <ThemeSwitch/>
                </NavbarItem>

                <NavbarItem className="hidden md:flex">
                    <Button
                        isExternal
                        as={Link}
                        className="text-sm text-default-800 font-bold bg-default-100"
                        href={siteConfig.links.donate}
                        startContent={<HeartFilledIcon className="text-danger m-auto"/>}
                        variant="flat"
                    >
                        Donate
                    </Button>
                </NavbarItem>
                <div className="hidden lg:flex border-l dark:border-gray-300 border-gray-900 h-6 mx-2"/>
                <NavbarItem className="hidden lg:flex">
                    {isAuthenticated ? (
                        <Profile/>
                    ) : (
                        <Button
                            onClick={() => loginWithRedirect()}
                            className="text-sm text-default-800 font-bold bg-default-100"
                            variant="flat"
                            startContent={<LoginIcon width={40} height={40} className="text-danger m-auto"/>}
                        >
                            Log In
                        </Button>
                    )}
                </NavbarItem>

            </NavbarContent>
            <NavbarMenu
                className={"box-border border-shadow-lg p-0 capitalize rounded-[1.1rem] shadow flex flex-col justify-center mt-10 space-y-10 space-x-2"}>
                <NavbarMenuItem>
                    <Link
                        color={"success"}
                        className={"w-full text-center block main text-2xl"}
                        href={"/"}
                        size={"lg"}
                    >
                        Home
                    </Link>
                </NavbarMenuItem>
                {siteConfig.navItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`} className={"hover:animate-pulse"}>
                        <Link
                            color={
                                index === 1 ? "primary" : index === siteConfig.navItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full text-center block main text-2xl"
                            href={item.href}
                            size="lg"
                            onPress={() => setIsMenuOpen()}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))} {/* TODO: REDO Mobile Nav Menu*/}
            </NavbarMenu>
        </NextUINavbar>
    );
};
