import SpecifierHero from '@/components/server/specifiers/SpecifierHero';
import SpecifierRouting from '@/components/server/specifiers/SpecifierRouting';
import SpecifierFeatures from '@/components/server/specifiers/SpecifierFeatures';
import SpecifierDownloads from '@/components/server/specifiers/SpecifierDownloads';
import ProofBar from '@/components/server/ProofBar';
import NavbarMorph from '@/components/client/NavbarMorph';

export default function SpecifiersHub() {
    return (
        <>
            <NavbarMorph />
            <main className="min-h-screen bg-dh-grey-light selection:bg-dh-red/20 selection:text-dh-red">
                <SpecifierHero />
                <ProofBar />
                <SpecifierRouting />
                <SpecifierFeatures />
                <SpecifierDownloads />
            </main>
        </>
    );
}
