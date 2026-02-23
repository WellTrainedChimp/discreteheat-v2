"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname() || "";

    // Determine the current hub context based on the pathname
    let hubContext: "homeowner" | "specifier" | "trade" | "default" = "default";

    if (pathname.startsWith("/homeowners")) {
        hubContext = "homeowner";
    } else if (pathname.startsWith("/specifiers")) {
        hubContext = "specifier";
    } else if (pathname.startsWith("/trade")) {
        hubContext = "trade";
    }

    // Define navigation links for each context
    const navLinks = {
        default: [
            { label: "Homeowners", href: "/homeowners" },
            { label: "Specifiers", href: "/specifiers" },
            { label: "Trade Installers", href: "/trade" },
        ],
        homeowner: [
            { label: "By Room", href: "/homeowners/by-room" },
            { label: "By Project", href: "/homeowners/by-project" },
            { label: "By Heat Source", href: "/homeowners/by-heat-source" },
            { label: "Compare Systems", href: "/homeowners/vs" },
        ],
        specifier: [
            { label: "Applications", href: "/specifiers/applications" },
            { label: "Technical Data", href: "/specifiers/technical-data" },
            { label: "Spec Support", href: "/specifiers/specification-support" },
            { label: "CPD & Training", href: "/specifiers/cpd" },
        ],
        trade: [
            { label: "Installer Programme", href: "/trade/installer-programme" },
            { label: "Trade Products", href: "/trade/products" },
            { label: "Add2Rad Info", href: "/trade/add2rad" },
            { label: "Resources", href: "/trade/resources" },
        ]
    };

    // Define the primary CTA for each context
    const callToAction = {
        default: { label: "Get a Quote", href: "/homeowners/get-a-quote" },
        homeowner: { label: "Get a Free Quote", href: "/homeowners/get-a-quote" },
        specifier: { label: "Speak to Spec Team", href: "/specifiers/specification-support/request-a-cpd" },
        trade: { label: "Register as Installer", href: "/trade/installer-programme/register" }
    };

    const currentLinks = navLinks[hubContext];
    const currentCTA = callToAction[hubContext];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-7xl rounded-full bg-white/60 backdrop-blur-xl border border-white/20 shadow-sm transition-all duration-300">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/assets/logos/logo.png"
                        alt="DiscreteHeat"
                        width={200}
                        height={50}
                        className="h-7 md:h-8 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {currentLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-[15px] font-medium text-dh-dark hover:text-dh-red transition-colors whitespace-nowrap"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden lg:flex items-center">
                    <Link href={currentCTA.href} className="hp-btn-primary py-2 px-5 text-[14px]">
                        {currentCTA.label}
                    </Link>
                </div>

                {/* Mobile Toggle Placeholder */}
                <button className="lg:hidden p-2 text-dh-dark" aria-label="Menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                </button>
            </div>
        </nav>
    );
}
