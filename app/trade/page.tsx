import TradeHero from '@/components/server/trade/TradeHero';
import TradeRouting from '@/components/server/trade/TradeRouting';
import TradeBenefits from '@/components/server/trade/TradeBenefits';
import { Gallery4 } from '@/components/blocks/gallery4';
import NavbarMorph from '@/components/client/NavbarMorph';

const tradeProductData = [
    {
        id: "h2o-trade",
        title: "ThermaSkirt H2O",
        description: "Standard 19.5mm profile. 136W/m output at dT50. Supplied in 6m lengths. Requires minimum 15mm feed pipework.",
        href: "/trade/products/thermaskirt-h2o",
        image: "https://images.unsplash.com/photo-1621844883401-eb4dacebb2c2?auto=format&fit=crop&q=80&w=1080"
    },
    {
        id: "electric-trade",
        title: "ThermaSkirt e",
        description: "Direct electric element. 165W/m output. Connects directly to local 230V fused spur. No central manifold required.",
        href: "/trade/products/thermaskirt-e",
        image: "https://images.unsplash.com/photo-1544485304-6330ce1bb82f?auto=format&fit=crop&q=80&w=1080"
    },
    {
        id: "add2rad-trade",
        title: "Add2Rad Heat Pump Booster",
        description: "Retrofit booster fan system. Increases existing Type 22 radiator outputs by up to 50% without replacing the rad or altering pipework.",
        href: "/trade/add2rad",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1080"
    },
    {
        id: "tools-trade",
        title: "Tools & Accessories",
        description: "Order push-fit connectors, corner shrouds, mounting brackets, and specialized ThermaSkirt chop saw blades.",
        href: "/trade/products/accessories",
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=1080"
    }
];

export default function TradeHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-white selection:bg-dh-red/20 selection:text-dh-red">
                <TradeHero />
                <TradeRouting />
                <TradeBenefits />
                <div className="bg-[#111111]">
                    <Gallery4
                        title="Trade Products"
                        description="View output capacities, dimensions, and technical specifications for the full product range."
                        items={tradeProductData}
                    />
                </div>
            </main>
        </>
    );
}
