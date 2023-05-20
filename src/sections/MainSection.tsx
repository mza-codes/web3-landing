import Button from "../components/Button";

export default function MainSection() {
    return (
        <section className="w-full flex flex-col md:flex-row center gap-8">
            <div className="text md:w-1/2 col gap-8">
                <h1 className="md:text-8xl text-5xl font-redzone">
                    Discover Collect Sell Digital NFT.
                </h1>
                <span className="text-app_gray leading-8 text-xl">
                    Generate 10,000+ NDT Collection Only by uploading the layers, and get
                    ready to sell your collection.
                </span>
                <div className="row gap-4">
                    <Button>Get Started</Button>
                    <Button outline={true}>Join Discord</Button>
                </div>
            </div>
            <div className="relative md:w-1/2 col gap-4 center">
                <img
                    src="/assets/etherum.png"
                    alt="etherum_logo"
                    className="w-[86%] h-[70%] object-contain"
                />
            </div>
        </section>
    );
}
