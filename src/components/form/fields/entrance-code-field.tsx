import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EntranceCodeFieldProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

export function EntranceCodeField({
  value,
  onChange,
}: EntranceCodeFieldProps) {
  return (
    <div className="grid w-full items-center gap-2">
      <Label htmlFor="portkod" className="">
        Portkod
      </Label>
      <Input
        id="portkod"
        placeholder="1234"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}