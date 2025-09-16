import { Label } from "@/components/ui/label";
import {     CustomSelectValue, Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger, } from "@/components/ui/select";
import { services } from "@/lib/constants/services";
import { Service } from "@/lib/types/form.types";
import { cn, getServiceNameByDbName } from "@/lib/utils";


interface ServiceFieldProps {
  value: Service | undefined;
  onChange: (value: Service) => void;
  error?: boolean;
}

export function ServiceField({ value, onChange, error }: ServiceFieldProps) {
  return (
    <>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="service" >
          Tjänst*
        </Label>
        <Select onValueChange={(val) => onChange(val as Service)} value={value}>
          <SelectTrigger id="service" className="w-full bg-white!">
            <CustomSelectValue
              placeholder={"Välj en tjänst"}
              value={getServiceNameByDbName(value)}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tillängliga tjänster</SelectLabel>
              {services.map((e) => (
                <SelectItem key={e.title} value={e.type}>
                  {e.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-[-6px]">Tjänst måste väljas</p>
      )}
    </>
  );
}

