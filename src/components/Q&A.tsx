import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export type QAProps = {
    question: string;
    answer?: string;
};

export default function QAComponent({ question, answer }: QAProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            className="bg-white/20 rounded-3xl col m-2"
        >
            <motion.div
                transition={{ duration: 0.36 }}
                animate={{ height: "auto" }}
                className={`row justify-between gap-2 px-4 py-3 rounded-t-3xl ${
                    isOpen ? "bg-app" : ""
                }`}
            >
                <h2
                    className={`font-redzone text-xl ${
                        isOpen ? "text-[#272936]" : "text-gray-300/90"
                    }`}
                >
                    {question}
                </h2>
                {isOpen ? (
                    <button
                        onClick={() => setIsOpen(false)}
                        className={`hover:text-white ${
                            isOpen ? "text-[#272936]" : "text-gray-300"
                        }`}
                    >
                        <AiOutlineMinus size={24} color="inherit" />
                    </button>
                ) : (
                    <button
                        onClick={() => setIsOpen(true)}
                        className={`hover:text-white ${
                            isOpen ? "text-[#272936]" : "text-gray-300"
                        }`}
                    >
                        <AiOutlinePlus size={24} color="inherit" />
                    </button>
                )}
            </motion.div>
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        transition={{ duration: 0.3 }}
                        initial={{ opacity: 0, translateY: "-50%" }}
                        whileInView={{ opacity: 1, translateY: "0%" }}
                        viewport={{ once: true }}
                        exit={{ opacity: 0, translateY: "-50%" }}
                        className="content py-4 px-4"
                    >
                        {answer ??
                            `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Error soluta ad natus deserunt possimus reiciendis quidem
                                doloremque reprehenderit!`}
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </motion.div>
    );
}
