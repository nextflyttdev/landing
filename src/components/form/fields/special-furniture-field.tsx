import { Button } from "@/components/ui/button";
import { SpecialFurniture } from "@/lib/types/form.types";


interface FurnitureCounter {
  value: SpecialFurniture;
  title: string;
  subtitle: string;
  image: string;
}
interface SpecialFurnitureFieldProps {
  option: FurnitureCounter;
  count: number;
  setCount: (count: number) => void;
}

export function SpecialFurnitureField({
  option,
  count,
  setCount,
}: SpecialFurnitureFieldProps) {
  return (
    <div
      onClick={() => {
        if (count === 0) {
          setCount(1);
        }
      }}
      className={`${
        count > 0
          ? "border-primary text-primary"
          : "border-input hover:text-content"
      } cursor-pointer inline-flex h-full flex-col justify-between items-center w-full p-5 text-content bg-white border rounded-lg hover:bg-gray-50 transition-all duration-200`}
    >
      <div
        className={`${
          count > 0 ? "flex justify-start max-w-28" : "max-w-40"
        } transition-all duration-200 p-4`}
      >
       {option.image &&  <img
          src={option.image}
          alt={option.title}
          className="w-full h-auto object-contain"
        />}
      </div>

      <div className="block text-center">
        <div className="w-full text-lg font-semibold">{option.title}</div>
        <div className="text-sm font-normal text-gray-500">
          {option.subtitle}
        </div>
      </div>

      <div
        className="mt-6 gap-2 w-full flex justify-between items-center"
        style={{
          height: "2.5rem",
          opacity: count === 0 ? 0 : 1,
          pointerEvents: count === 0 ? "none" : "auto",
          transition: "opacity 200ms ease-in-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          className="flex-1"
          onClick={(e) => {
            e.stopPropagation();
            setCount(Math.max(0, count - 1));
          }}
          variant="outline"
        >
          -
        </Button>
        <span className="font-bold px-2">{count}</span>
        <Button
          className="flex-1"
          onClick={(e) => {
            e.stopPropagation();
            setCount(count + 1);
          }}
          variant="outline"
        >
          +
        </Button>
      </div>
    </div>
  );
}