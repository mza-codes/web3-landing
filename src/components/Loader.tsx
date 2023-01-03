type LoaderProps = {
  color?: string;
  tailwindBg?: string;
  inline?: 0 | 1;
};

const Loader = ({ color, tailwindBg, inline }: LoaderProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center w-auto h-auto ${
        inline ? "p-4" : "p-px"
      }`}
    >
      <div className="lds-ellipsis">
        <div
          style={{ background: color }}
          className={tailwindBg ?? "bg-amber-700"}
        />
        <div
          style={{ background: color }}
          className={tailwindBg ?? "bg-amber-700"}
        />
        <div
          style={{ background: color }}
          className={tailwindBg ?? "bg-amber-700"}
        />
        <div
          style={{ background: color }}
          className={tailwindBg ?? "bg-amber-700"}
        />
      </div>
    </div>
  );
};

export default Loader;
