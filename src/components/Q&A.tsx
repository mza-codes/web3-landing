import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type Props = {};

export default function QAComponent({}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white/20 rounded-3xl col m-2">
            <div
                className={`row justify-between gap-2 px-4 py-3 rounded-t-3xl ${
                    isOpen ? "bg-app" : ""
                }`}
            >
                <h2
                    className={`font-redzone text-xl ${
                        isOpen ? "text-[#272936]" : "text-gray-300/90"
                    }`}
                >
                    What is the NFT-X Space?
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
            </div>
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        transition={{ duration: 0.3 }}
                        initial={{ opacity: 0, translateY: "-50%" }}
                        whileInView={{ opacity: 1, translateY: "0%" }}
                        exit={{ opacity: 0, translateY: "-50%" }}
                        className="content py-4 px-4"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
                        asperiores assumenda, sed eligendi nulla obcaecati fuga eum
                        doloremque cumque necessitatibus in quis nesciunt!
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
}
