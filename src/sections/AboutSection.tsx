import Button from "./Button";

const tags = [
    "Wide range of platforms",
    "World class artists",
    "Any type of assets",
    "Fast payments",
];

export default function AboutSection() {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row-reverse min-h-[80dvh] center">
            <div className="text w-1/2 col gap-4">
                <span className="text-xl font-redzone text-app">About Us</span>
                <h1 className="text-6xl font-redzone">
                    Discover more Collect And Sell Rare NFTs
                </h1>
                <span className="text-gray-400 leading-8 text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eum
                    praesentium? Numquam officiis totam consequuntur dignissimos alias,
                    quae autem!
                </span>
                <div className="row gap-2">
                    {tags.map((tg, i) => (
                        <button
                            key={i}
                            className="rounded-full px-4 py-3 bg-white/20 hover:bg-white/30"
                        >
                            {tg}
                        </button>
                    ))}
                </div>
            </div>
            <div className="image w-1/2">
                <img
                    src="/assets/robo.png"
                    alt="robo"
                    className="object-contain max-w-[80%] max-h-[70%]"
                />
            </div>
        </section>
    );
}
