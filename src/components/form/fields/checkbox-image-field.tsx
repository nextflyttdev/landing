import React from "react";

interface CheckboxOption {
  value: string;
  title: string;
  image: string | React.FC<any>;
}

interface CustomCheckboxProps {
  name: string;
  option: CheckboxOption;
  containerClassName?: string;
  selectedValue: boolean;
  onChange: () => void;
}

export function CheckboxImageField({
  containerClassName,
  name,
  option,
  selectedValue,
  onChange,
}: CustomCheckboxProps) {
  return (
    <ul
      className={`${
        containerClassName || "grid grid-cols-2 md:grid-cols-4"
      } w-full gap-6`}
    >
      <li className="h-full">
        <input
          type="checkbox"
          id={option.value}
          name={name}
          value={option.value}
          className="hidden peer"
          checked={selectedValue}
          onChange={onChange}
        />
        <label
          htmlFor={option.value}
          className="inline-flex h-full flex-col justify-between items-center w-full p-5 text-title bg-white border-2 border-input rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary peer-checked:bg-input-select hover:text-content hover:bg-input-select"
        >
          <div className="block mb-4"></div>
          <div className="max-w-40">
            { typeof option.image === "string" ? (
              <img src={option.image} alt={option.title} />
            ) : (
              <option.image width={"100%"} height={"100%"} />
            )}
          </div>
        </label>
      </li>
    </ul>
  );
}