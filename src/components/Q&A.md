```jsx
export function QAComponentV1({ question, answer }: QAProps) {
    const [isOpen, setIsOpen] = useState(false);

    const styles = {
        bg: isOpen ? "bg-app" : "",
        heading: isOpen ? "text-app_bg" : "text-gray-300/90",
        button: isOpen ? "text-app_bg" : "text-gray-300",
        icon: isOpen ? (
            <AiOutlineMinus size={24} color="inherit" />
        ) : (
            <AiOutlinePlus size={24} color="inherit" />
        ),
    };

    return (
        <motion.div
            initial={{ opacity: 0, translateX: "-40%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            className="bg-white/20 rounded-3xl col m-2"
        >
            <div
                className={`row justify-between gap-2 px-4 py-3 rounded-t-3xl ${styles.bg}`}
            >
                <h2 className={`font-redzone text-xl ${styles.heading}`}>{question}</h2>

                <button
                    onClick={() => setIsOpen((c) => !c)}
                    className={`hover:text-white ${styles.button}`}
                >
                    {styles.icon}
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        transition={{ duration: 0.3 }}
                        initial={{ opacity: 0, translateY: "-30%" }}
                        whileInView={{ opacity: 1, translateY: "0%" }}
                        viewport={{ once: true }}
                        exit={{ opacity: 0, translateY: "-30%" }}
                        className="content py-4 px-4"
                    >
                        {answer ?? dummyAnswer}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
```
