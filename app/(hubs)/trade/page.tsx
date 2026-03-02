import TradeHero from '@/components/server/trade/TradeHero';
import TradeBenefits from '@/components/server/trade/TradeBenefits';
import ExploreCategorySection from '@/components/blocks/ExploreCategorySection';
import CTABanner from '@/components/blocks/CTABanner';
import ResourcesGrid from '@/components/blocks/ResourcesGrid';
import NavbarMorph from '@/components/client/NavbarMorph';
import { FileText, Calculator, Layers, LayoutTemplate, PenTool, ClipboardCheck, Video, MapPin } from 'lucide-react';
import Link from 'next/link';

const tradeProductData = [
    {
        title: "ThermaSkirt H2O",
        description: "BM2: 126W/m at dT50. BM3: 188W/m at dT50.",
        href: "/trade/products/thermaskirt-h2o",
        image: "https://images.unsplash.com/photo-1621844883401-eb4dacebb2c2?auto=format&fit=crop&q=80&w=1080"
    },
    {
        title: "ThermaSkirt e",
        description: "Up to 130W/m output (BMe2).",
        href: "/trade/products/thermaskirt-e",
        image: "https://images.unsplash.com/photo-1544485304-6330ce1bb82f?auto=format&fit=crop&q=80&w=1080"
    },
    {
        title: "Add2Rad",
        description: "Retrofit emitter supplement. Connects in series to existing radiator tails.",
        href: "/trade/add2rad",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080"
    },
    {
        title: "Tools & Accessories",
        description: "Order push-fit connectors, corner shrouds, mounting brackets, and specialized ThermaSkirt chop saw blades.",
        href: "/trade/products/accessories-and-components",
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=1080"
    }
];

const trainingSupportData = [
    {
        title: "Registered Installer Programme",
        description: "Join the network to receive direct homeowner leads and access trade pricing.",
        href: "/trade/installer-programme/register",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1080"
    },
    {
        title: "Training Academy",
        description: "Book an in-person session at our Manchester HQ or access online certification.",
        href: "/trade/installer-programme/training",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1080"
    },
    {
        title: "Lead Referral System",
        description: "How we distribute pre-qualified enquiries to installers in their local postcode area.",
        href: "/trade/installer-programme/lead-referral",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080"
    },
    {
        title: "Benefits & Rewards",
        description: "Earn points on every metre installed. Unlock branded uniform and premium tools.",
        href: "/trade/installer-programme/benefits",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1080"
    }
];

const add2radData = [
    {
        title: "The Add2Rad Method",
        description: "How to supplement existing radiators to handle 35-45°C flow temperatures.",
        href: "/trade/add2rad/the-method",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080"
    },
    {
        title: "Heat Pump Installer Guide",
        description: "Technical integration guide for air source and ground source installers.",
        href: "/trade/add2rad/heat-pump-installer-guide",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1080"
    },
    {
        title: "Quoting & Pricing Models",
        description: "How to estimate and price Add2Rad retrofit projects for homeowners.",
        href: "/trade/add2rad/quoting-for-add2rad",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1080"
    }
];

const resourcesData = [
    {
        title: "Installation Manuals",
        description: "Step-by-step PDF guides for all profiles and corners.",
        icon: FileText,
        href: "/trade/resources/installation-manuals"
    },
    {
        title: "Technical Data Sheets",
        description: "Output tables, dimensions, and compliance docs.",
        icon: Layers,
        href: "/trade/resources/technical-data-sheets"
    },
    {
        title: "Flow Temp Calculator",
        description: "Calculate exact required lengths based on heat loss.",
        icon: Calculator,
        href: "/trade/add2rad/flow-temperature-calculator"
    },
    {
        title: "Pipe Templates",
        description: "Downloadable set-out templates for first fix.",
        icon: PenTool,
        href: "/trade/resources/pipe-templates"
    },
    {
        title: "Cutting Lists",
        description: "Optimise typical room layouts for minimal waste.",
        icon: LayoutTemplate,
        href: "/trade/resources/cutting-lists"
    },
    {
        title: "Commissioning Specs",
        description: "Handover checklists and pressure testing forms.",
        icon: ClipboardCheck,
        href: "/trade/resources/commissioning-checklists"
    },
    {
        title: "Video Library",
        description: "Short visual explainers for tricky corner cuts.",
        icon: Video,
        href: "/trade/resources/video-library"
    },
    {
        title: "RAMS Overview",
        description: "Risk assessment and method statement templates.",
        icon: FileText,
        href: "/trade/resources/rams-overview"
    }
];

export default function TradeHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <TradeHero />
                <ExploreCategorySection
                    id="trade-products"
                    heading="Trade Products"
                    description="View output capacities, dimensions, and technical specifications for the full product range."
                    tiles={tradeProductData}
                />

                <ExploreCategorySection
                    id="training"
                    heading="Training & Support"
                    description="Everything you need to succeed as a registered ThermaSkirt installer."
                    tiles={trainingSupportData}
                />

                <TradeBenefits />

                <CTABanner
                    heading="Join the Registered Installer Network"
                    description="Get exclusive access to trade pricing, pre-qualified leads, and our comprehensive training programme."
                    primaryCTA="Register as an Installer"
                    primaryCTALink="/trade/installer-programme/register"
                    secondaryCTA="View Trade Products"
                    secondaryCTALink="/trade/products"
                    additionalLinks={[{ text: 'How Lead Referral Works \u2192', href: '/trade/installer-programme/lead-referral' }]}
                />

                <ResourcesGrid
                    id="resources"
                    heading="Resources & Downloads"
                    description="Technical documentation, installation guides, and marketing materials."
                    resources={resourcesData}
                />

                <ExploreCategorySection
                    id="add2rad"
                    heading="Add2Rad — Heat Pump Retrofit"
                    description="The smart way to make any home heat pump ready without replacing radiators."
                    tiles={add2radData}
                />

                {/* Minimal Merchants section */}
                <section className="py-16 px-6 lg:px-12 bg-white border-t border-gray-100">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl font-bold text-dh-dark mb-2">Stocking & Distribution</h2>
                            <p className="text-dh-grey">Available at over 375 merchant branches nationwide.</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/trade/merchants/find-a-branch" className="inline-flex items-center text-sm font-semibold hover:text-dh-red transition-colors border border-gray-200 px-5 py-2.5 rounded-full hover:border-dh-red group">
                                <MapPin size={16} className="mr-2 text-dh-red group-hover:-translate-y-0.5 transition-transform" />
                                Find a Branch
                            </Link>
                            <Link href="/trade/merchants/open-a-trade-account" className="inline-flex items-center text-sm font-semibold hover:text-dh-red transition-colors border border-gray-200 px-5 py-2.5 rounded-full hover:border-dh-red group">
                                Open a Trade Account
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
