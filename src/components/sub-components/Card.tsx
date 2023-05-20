import { ReactNode } from "react";

export type CardProps = {
    icon: ReactNode;
    title: string;
    description: string;
};

export default function Card({ icon, description, title }: CardProps) {
    return (
        <div className="py-12 px-6 col gap-4 flex-1 max-w-[320px] items-start">
            <div className="mb-4">{icon}</div>
            <h4 className="font-redzone text-3xl">{title}</h4>
            <span className="text-app_gray">{description}</span>
        </div>
    );
}
