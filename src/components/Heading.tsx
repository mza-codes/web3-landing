type Props = {
    heading: string;
    subHeading: string;
};

export default function Heading({ heading, subHeading }: Props) {
    return (
        <>
            <h4 className="font-redzone text-app text-xl">{heading}</h4>
            <h2 className="font-redzone text-4xl">{subHeading}</h2>
        </>
    );
}
