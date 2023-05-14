import Button from "../components/Button";

export default function PromoSection() {
    return (
        <section className="w-full pt-28">
            <div className="relative bg-gradient-to-bl from-sky-700 via-purple-700 to-blue-800 rounded-3xl h-[394px]">
                <img
                    className="object-scale-down max-w-[200px] sm:max-w-sm max-h-[inherit] absolute left-4 md:left-32 scale-150 -top-24 "
                    src="/assets/vr-person.webp"
                    alt="vr_person"
                />
                <article className="absolute col gap-6 items-start justify-center h-[inherit] right-1 max-w-[50%]">
                    <h4 className="font-redzone text-6xl">Join Us now</h4>
                    <span className="text-gray-100">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem illo
                        eaque fugiat pariatur error!
                    </span>
                    <Button outline>Join Tournament</Button>
                </article>
            </div>
        </section>
    );
}
