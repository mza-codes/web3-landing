import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
    id: string;
    children: ReactNode;
    n: number;
};

export default function Animate({ children, id, n }: Props) {
    return (
        <motion.section
            className="w-full"
            id={id}
            initial={{ opacity: 0, translateX: `${isEven(n) ? "-" : ""}100%` }}
            whileInView={{ opacity: 1, translateX: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
        >
            {children}
        </motion.section>
    );
}

function isEven(n: number) {
    return n % 2 === 0;
}
