import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaBitcoin } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";

const socialIcons = [AiOutlineTwitter, FaBitcoin, RiDiscordFill, FaGithub];

const links = [
    ["MarketPlace", "About us", "Our team", "Team Details", "Error 404", "Cart Page"],
    ["Company", "Wallet", "Create Page", "Login Page", "Registration", "Checkout"],
    ["Services", "Contact Us", "Shop page", "Shop Details", "Collectors"],
];

export default function FooterSection() {
    return (
        <footer className="relative w-full row gap-4 justify-between">
            {/* Left Section */}
            <div className="col gap-4 min-w-[200px] justify-between">
                <div className="space-y-6">
                    <h3 className="font-redzone text-4xl">Space.</h3>
                    <div className="row gap-4">
                        {socialIcons.map((Icon, i) => (
                            <a href="#" className="hover:text-white/50 text-white">
                                <Icon key={i} size={18} color="inherit" />
                            </a>
                        ))}
                    </div>
                </div>

                <span className="text-gray-400 text-sm">
                    All rights reserved &#169; <b>{new Date().getFullYear()}.</b>
                </span>
            </div>
            {/* Right Section */}
            <div className="row gap-24">
                {links.map((group, i) => (
                    <div key={i} className="col gap-2">
                        {group.map((link, i) =>
                            i === 0 ? (
                                <span key={link} className="font-redzone mb-2">
                                    {link}
                                </span>
                            ) : (
                                <a
                                    key={link}
                                    href={`#${link}`}
                                    className={`font-nominee text-gray-400 text-xs hover:text-white`}
                                >
                                    {link}
                                </a>
                            )
                        )}
                    </div>
                ))}
            </div>
        </footer>
    );
}
