import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaBitcoin } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";
import { appLinks, routes } from "../constants";

const socialIcons = [AiOutlineTwitter, FaBitcoin, RiDiscordFill, FaGithub];

const links = [
    ["MarketPlace", "About us", "Our team", "Team Details", "Error 404", "Cart Page"],
    ["Company", "Wallet", "Create Page", "Login Page", "Registration", "Checkout"],
    ["Services", "Contact Us", "Shop page", "Shop Details", "Collectors"],
];

export default function FooterSection() {
    return (
        <footer id={routes.footer} className="relative w-full row gap-4 justify-between">
            {/* Left Section */}
            <div className="col gap-4 min-w-[200px] justify-between">
                <div className="space-y-6">
                    <h3 className="font-redzone text-4xl">Space.</h3>
                    <div className="row gap-4">
                        {socialIcons.map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="hover:text-white/50 text-white"
                            >
                                <Icon size={18} color="inherit" />
                            </a>
                        ))}
                    </div>
                </div>

                <span className="text-gray-400 text-sm">
                    All rights reserved &#169; <b>{new Date().getFullYear()}.</b>
                </span>
            </div>
            {/* Right Section */}
            <div className="row md:gap-24 gap-6">
                {links.map((group, idx) => (
                    <ul key={idx + 1} className="col gap-2">
                        {group.map((link, i) => (
                            <li key={link}>
                                {i === 0 ? (
                                    <span className="font-redzone mb-2">{link}</span>
                                ) : (
                                    <a
                                        href={`#${appLinks[i]}`}
                                        className={`font-nominee text-gray-400 text-xs hover:text-white`}
                                    >
                                        {link}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </footer>
    );
}
