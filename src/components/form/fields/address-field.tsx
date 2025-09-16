import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface AddressFieldProps {
  onChange: (value: string) => void;
  error: boolean;
  value: string;
}
export function AddressField({ onChange, error, value }: AddressFieldProps) {
  const [unknownAddress, setUnknownAddress] = useState(false);

  const handleCheckboxClick = () => {
    if (unknownAddress) {
      setUnknownAddress(false);
            onChange("");

    } else {
      setUnknownAddress(true);
      onChange("N/A");
    }
  };

  return (
    <>
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="address" className="">
          Adress *
        </Label>
        <Input
          id="address"
          value={value}
          disabled={unknownAddress}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Sök efter adressen"
        />

        <label
          className={`flex items-center gap-2 cursor-pointer p-2 bg-white  
              ${unknownAddress ? " text-primary bg-accent" : "text-content"} `}
        >
          <input
            type="checkbox"
            checked={unknownAddress}
            onChange={handleCheckboxClick}
            className="w-4 h-4 border rounded-md accent-primary"
          />
          <span className="text-sm font-medium">
            Jag vet inte adressen ännu
          </span>
        </label>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-[-6px]">Adress måste väljas</p>
      )}
    </>
  );
}

interface PlaceAutocompleteProps {
  storeValue: string;
  onChange: (value: string) => void;
  placeholder: string;
  id: string;
}
import { useRef } from "react";
