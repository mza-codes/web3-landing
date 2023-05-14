import Header from "./components/Header";

import AboutSection from "./sections/AboutSection";
import CollectionSection from "./sections/CollectionSection";
import FeaturesSection from "./sections/FeaturesSection";
import MainSection from "./sections/MainSection";
import Popularity from "./sections/Popularity";

function App() {
    return (
        <main className="app-bg min-h-screen">
            <section className="max-w-6xl flex center col mx-auto pb-6 gap-16">
                <Header />
                <MainSection />
                <Popularity />
                <AboutSection />
                <FeaturesSection />
                <CollectionSection />
            </section>
        </main>
    );
}

export default App;
