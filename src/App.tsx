import Header from "./components/Header";

import AboutSection from "./sections/AboutSection";
import CollectionSection from "./sections/CollectionSection";
import FAQSection from "./sections/FAQSection";
import FeaturesSection from "./sections/FeaturesSection";
import FooterSection from "./sections/FooterSection";
import MainSection from "./sections/MainSection";
import Popularity from "./sections/Popularity";
import PromoSection from "./sections/PromoSection";

function App() {
    return (
        <main className="app-bg min-h-screen">
            <section className="max-w-6xl xl:px-0 px-4 flex center col mx-auto pb-8 md:gap-36 gap-20">
                <div className="fixed inset-0 round-gradient"></div>
                <Header />
                <MainSection />
                <Popularity />
                <AboutSection />
                <FeaturesSection />
                <CollectionSection />
                <FAQSection />
                <PromoSection />
                <FooterSection />
            </section>
        </main>
    );
}

export default App;
