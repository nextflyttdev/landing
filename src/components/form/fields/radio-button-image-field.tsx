interface RadioOption<T = string> {
  value: T;
  title: string;
  image: string;
}

interface CustomRadioGroupProps<T = string> {
  name: string;
  options: RadioOption<T>[];
  value: T | undefined;
  onChange: (value: T) => void;
  containerClassName?: string;
}

export function RadioButtonImageField<T extends string>({
  containerClassName,
  name,
  options,
  value,
  onChange,
}: CustomRadioGroupProps<T>) {
  return (
    <ul
      className={`${
        containerClassName
          ? containerClassName
          : "grid grid-cols-2 md:grid-cols-4"
      } w-full gap-6`}
    >
      {options.map((option) => (
        <li className="h-full" key={option.value}>
          <input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            checked={option.value === value}
            className="hidden peer"
            onChange={() => onChange(option.value)}
          />
          <label
            htmlFor={option.value}
            className="inline-flex px-2 h-full flex-col justify-between items-center w-full p-5 text-title bg-white border-2 border-input rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary peer-checked:bg-input-select hover:text-content hover:bg-accent"
          >
            <div className="block ">
              <div className="w-full text-lg 2xl:text-sm font-semibold text-center">
                {option.title}
              </div>
            </div>
            {/* <div className="max-w-40">
              <img src={option.image} alt={option.title} />
            </div> */}
          </label>
        </li>
      ))}
    </ul>
  );
}