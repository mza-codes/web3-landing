import Heading from "../components/Heading";
import QAComponent, { QAProps } from "../components/Q&A";

const questions: QAProps[] = [
    {
        question: "What is the NFT-X Space?",
    },
    {
        question: "Where are your company branches located?",
    },
    {
        question: "What is metamask?",
    },
    {
        question: "How can i buy, sell and mint NFT's?",
    },
    {
        question: "What's the best selling liquid at the moment?",
    },
    {
        question: "What is the Service fee?",
    },
    {
        question: "How should i Start?",
    },
    {
        question: "What is the NFT-X Space?",
        answer: "NFT-X Space is a newer way of connecting things that seamlessly integrates with the network.",
    },
];

export default function FAQSection() {
    return (
        <section className="w-full col gap-4">
            <Heading
                className="text-center"
                heading="FAQs"
                subHeading="Frequently asked Questions"
            />
            <div className="row mt-6 transition-all duration-500 ease-in-out">
                {questions.map((prop, i) => (
                    <div key={i} className="flex-[100%] md:flex-[50%]">
                        <QAComponent {...prop} />
                    </div>
                ))}
            </div>
        </section>
    );
}
