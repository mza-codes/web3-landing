import Heading from "../components/Heading";
import QAComponent from "../components/Q&A";

export default function FAQSection() {
    return (
        <section className="w-full col gap-4">
            <Heading
                className="text-center"
                heading="FAQs"
                subHeading="Frequently asked Questions"
            />
            <div className="row mt-6 transition-all duration-500 ease-in-out">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex-[100%] md:flex-[50%]">
                        <QAComponent />
                    </div>
                ))}
            </div>
        </section>
    );
}
