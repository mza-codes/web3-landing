import { useState } from "react";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";

export default function ThemeControl() {
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <div className="row gap-2 items-center">
                <BiMoon size={20} color={!isDark ? "#fff" : "#999"} />
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        onChange={(e) => {
                            const doc = document.getElementById("app-body");
                            if (!doc) return;
                            doc.classList.toggle("light");
                            setIsDark(e.target.checked);
                        }}
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600/20 peer-focus:outline-none peer-focus:ring0-4 peer-focus:ring0-blue-300 dark:peer-focus:ring0-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-app after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    <span role="sr-only"></span>
                </label>
                <BsSun size={20} color={isDark ? "#fff" : "#999"} />
            </div>
        </>
    );
}
