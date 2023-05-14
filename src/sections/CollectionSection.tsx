import Button from "../components/Button";

export default function CollectionSection() {
    return (
        <div className="w-full row gap-4 items-center">
            <div className="flex-[1] text-start col gap-4 items-start pr-4">
                <h4 className="font-redzone text-app text-xl">Collection</h4>
                <h2 className="font-redzone text-4xl">Bored apes NFT Items</h2>
                <span className="text-gray-400/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus
                    ad accusamus aut debitis consectetur sequi magnam? Eum, fuga?
                </span>
                <Button outline>View on Opensea</Button>
            </div>
            <div className="flex-[2] overflow-hidden inline-flex flex-row gap-4">
                {[1, 2, 3, 1, 2].map((n, i) => (
                    <div className="min-w-[200px] rounded-md" key={i}>
                        <img
                            className="object-cover"
                            src={`/assets/av-${n}.png`}
                            alt="avatar"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
