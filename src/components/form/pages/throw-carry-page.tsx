import DatePicker from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStore } from "@/stores/form.store";
import { FormPageHeader } from "../form-page-header";
import { ServiceField } from "../fields/service-field";
import { AddressField } from "../fields/address-field";
import { RadioButtonImageField } from "../fields/radio-button-image-field";
import { buildingOptionsMove, entranceOptions } from "@/lib/constants/formOptions";
import { FloorField } from "../fields/floor-field";
import { EntranceCodeField } from "../fields/entrance-code-field";
import { Textarea } from "@/components/ui/textarea";

export function ThrowAndCarryPage() {
  const { data, setData, errors,  } = useFormStore();

  return (
    <div>
      <FormPageHeader title="Vart ska tjänsten utföras?" />
      <div className=" flex flex-col gap-6 lg:gap-8 w-full">
        <div className="grid w-full items-center gap-1.5" id="address1">
          <AddressField
            error={errors.includes("address1")}
            value={data.address1 ?? ""}
            onChange={(v) => {
              setData({ address1: v });
            }}
          />
        </div>
        <div id="building1" className=" grid gap-2">
          <Label htmlFor="typeOfBuilding" >
            Typ av byggnad*
          </Label>
          <RadioButtonImageField
            containerClassName="grid grid-cols-2 md:grid-cols-3"
            options={buildingOptionsMove}
            name="typeOfBuilding"
            onChange={(v) => {
              setData({ building1: v });
            }}
            value={data.building1}
          />
          {errors.includes("building1") && (
            <p className="text-red-500 text-sm">Byggnad måste väljas</p>
          )}
        </div>
        {(data.building1 === "apartment" || data.building1 === "office") && (
          <>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
              <div className="grid w-full items-center gap-1.5" id="floor1">
                <FloorField
                  asterisk
                  value={data.floor1}
                  onChange={(v) => {
                    setData({ floor1: v });
                  }}
                />
                {errors.includes("floor1") && (
                  <p className="text-red-500 text-sm mt-[-6px]">
                    Våning måste väljas
                  </p>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <EntranceCodeField
                  value={data.entranceCode1}
                  onChange={(v) => setData({ entranceCode1: v })}
                />
              </div>
            </div>
            <div id="entrance1" className="grid gap-2">
              <Label htmlFor="typeOfEntrance" >
                Hissasterisk
              </Label>
              <RadioButtonImageField
                containerClassName="flex flex-col gap-2 grid grid-cols-2 md:grid-cols-3"
                options={entranceOptions}
                name="typeOfEntrance"
                onChange={(v) => {
                  setData({ entrance1: v });
                }}
                value={data.entrance1}
              />
              {errors.includes("entrance1") && (
                <p className="text-red-500 text-sm">
                  Ett av hiss alternativen måste väljas
                </p>
              )}
            </div>
          </>
        )}

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="description">Övrig information</Label>
          <Textarea
            rows={5}
            id="description"
            placeholder="Beskriv andra viktiga detaljer om byggnaden"
            value={data.addressInfo1}
            onChange={(e) => setData({ addressInfo1: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}