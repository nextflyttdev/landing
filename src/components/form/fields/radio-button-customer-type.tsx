import { companyOrPrivate } from "@/lib/constants/formOptions";
import { CustomerType } from "@/lib/types/form.types";

interface CustomRadioGroupProps {
  name: string;
  value: CustomerType | undefined;
  onChange?: (value: CustomerType) => void;
}

export function RadioButtonCustomerType({
  name,
  value,
  onChange,
}: CustomRadioGroupProps) {
  return (
    <ul className="flex flex-col w-full gap-6">
      {companyOrPrivate.map((option) => (
        <li key={option.value}>
          <input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            checked={option.value === value}
            className="hidden peer"
            onChange={() => onChange?.(option.value)}
          />
          <label
            htmlFor={option.value}
            className="inline-flex items-center justify-between w-full p-5 text-content bg-white shadow-sm border-input rounded-lg cursor-pointer peer-checked:border-primary border-2 peer-checked:bg-input-select peer-checked:text-primary  hover:bg-input-select"
          >
            <div className="block">
              <div className="w-full text-lg text-title font-semibold">
                {option.title}
              </div>
              <div className="text-sm text-content">{option.subtitle}</div>
            </div>
            {option.image && (
              <div className="max-w-40 ">
                <img
                  src={option.image}
                  alt={option.title}
                  className="h-full w-full"
                />
              </div>
            )}
          </label>
        </li>
      ))}
    </ul>
  );
}
