import Button from "./Button";
import AppLogo from "./sub-components/AppLogo";
import ThemeControl from "./sub-components/ThemeControl";

const links = ["Home", "Marketplace", "Blog", "Road Map"];

export default function Header() {
    return (
        <header className="sticky w-full mt-2 py-4 px-1 min-h-16 row items-center justify-between gap-2">
            <div className="row items-center gap-2">
                <AppLogo />
                <div className="ml-24 row gap-8">
                    {links.map((li, i) => (
                        <a
                            key={i}
                            href="#"
                            className={`uppercase font-redzone ${
                                i === 0 ? "font-medium" : ""
                            }`}
                        >
                            {li}
                        </a>
                    ))}
                </div>
            </div>
            <div className="row items-center gap-12">
                <ThemeControl />
                <Button>Connect Wallet</Button>
            </div>
        </header>
    );
}
