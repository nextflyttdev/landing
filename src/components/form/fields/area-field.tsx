import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


interface AreaFieldProps {
  value: number | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export function AreaField({
  value,
  onChange,
  label,
}: AreaFieldProps) {
  return (
    <div className="grid w-full items-center gap-2">
      <Label
        htmlFor="storlek"
        className=" "
      >
        {label} *
      </Label>
      <Input
        type="number"
        id="storlek"
        placeholder="0 m2"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}