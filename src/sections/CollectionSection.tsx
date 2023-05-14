import Button from "../components/Button";
import Heading from "../components/Heading";

export default function CollectionSection() {
    return (
        <div className="w-full flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-[1] text-start col gap-4 items-start pr-4">
                <Heading heading="Collection" subHeading="Bored apes NFT Items" />
                <span className="text-gray-400/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus
                    ad accusamus aut debitis consectetur sequi magnam? Eum, fuga?
                </span>
                <Button outline>View on Opensea</Button>
            </div>
            <div className="flex-[2] overflow-auto scroll-p-6 no-scrollbar inline-flex flex-row gap-4">
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
