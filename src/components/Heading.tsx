type Props = {
    heading: string;
    subHeading: string;
    className?: string;
};

export default function Heading({ heading, subHeading, className = "" }: Props) {
    return (
        <div className={`${className}`}>
            <h4 className="font-redzone text-app text-xl">{heading}</h4>
            <h2 className="font-redzone text-4xl">{subHeading}</h2>
        </div>
    );
}
