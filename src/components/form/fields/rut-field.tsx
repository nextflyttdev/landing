import { CheckIcon } from "lucide-react";

type RutFieldProps = {
  onClick: (v: boolean) => void;
  value: boolean;
};

export function RutField({ onClick, value }: RutFieldProps) {
  return (
    <div>
      <button
        type="button"
        onClick={() => onClick(value)}
        className={`w-full flex items-center gap-4 p-3 bg-white border-2 border-input rounded-lg shadow-sm 
                    ${
                      value
                        ? "border-primary text-primary bg-accent "
                        : "text-content"
                    } hover:bg-accent `}
      >
        <div
          className={`w-8 h-8 flex items-center justify-center border-2 rounded-md 
                      ${
                        value
                          ? "bg-primary border-primary text-white"
                          : "border-input bg-white"
                      }`}
        >
          {value && (
            <CheckIcon size={24} strokeWidth={2} className="text-white" />
          )}
        </div>
        <span className="text-2xl font-semibold">RUT</span>{" "}
        <span className="text-sm md:text-xl text-muted-foreground ml-2">
          (50% skattereduktion)
        </span>
      </button>
    </div>
  );
}