import { Label } from "@/components/ui/label";
import { CustomSelectValue, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/select";
import { floorOptions } from "@/lib/constants/floors";


interface FloorFieldProps {
  value: string | undefined; 
  onChange: (value: string) => void; 
  asterisk?: boolean;
}

export function FloorField({ value, onChange, asterisk }: FloorFieldProps) {
  return (
    <div className="grid gap-2 w-full items-center">
      <Label
        htmlFor="vaning"
        className=" "
      >
        Våning *
      </Label>
      <Select
        onValueChange={(val) => {
          onChange(val);
        }}
        value={value}
      >
        <SelectTrigger id="vaning" className="w-full">
          <CustomSelectValue
            placeholder={"Välj en våning"}
            value={
              value === "BV" ? "Bottenvåning" : value ? `Våning ${value}` : ""
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Våning</SelectLabel>
            {floorOptions.map((floor) => (
              <SelectItem key={floor.key} value={floor.value}>
                {floor.value === "BV"
                  ? "Bottenvåning"
                  : `Våning ${floor.value}`}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}