import { useFormStore } from "@/stores/form.store";
import { FormPageHeader } from "../form-page-header";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AddressField } from "../fields/address-field";
import { RadioButtonImageField } from "../fields/radio-button-image-field";
import { buildingOptionsMove, entranceOptions } from "@/lib/constants/formOptions";
import { FloorField } from "../fields/floor-field";
import { AreaField } from "../fields/area-field";
import { EntranceCodeField } from "../fields/entrance-code-field";

export function MovingToPage() {
  const { data, setData, errors, } = useFormStore();

  return (
    <div>
      <FormPageHeader title="Vart flyttar ni till?" />
      <div className=" flex flex-col gap-6 lg:gap-8 w-full">
        <div className="grid w-full items-center gap-1.5" id="address2">
          <AddressField
            error={errors.includes("address2")}
            value={data.address2 ?? ""}
            onChange={(v) => {
              setData({ address2: v });
            }}
          />
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          <div className="grid w-full items-center gap-1.5">
            <AreaField
              label="Storlek"
              value={data.area2}
              onChange={(e) => setData({ area2: parseFloat(e.target.value) })}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <AreaField
              label="Extra förvaring"
              value={data.extraArea2}
              onChange={(e) =>
                setData({ extraArea2: parseFloat(e.target.value) })
              }
            />
          </div>
        </div>
        <div id="building2" className="grid gap-2">
          <Label htmlFor="typeOfBuilding" >
            Typ av byggnad
          </Label>
          <RadioButtonImageField
            containerClassName="grid grid-cols-2 md:grid-cols-3"
            options={buildingOptionsMove}
            onChange={(v) => {
              setData({ building2: v });
            }}
            value={data.building2}
            name="typeOfBuilding"
          />
          {errors.includes("building2") && (
            <p className="text-red-500 text-sm">Byggnad måste väljas</p>
          )}
        </div>
        {(data.building2 === "apartment" || data.building2 === "office") && (
          <>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
              <div className="grid w-full items-center gap-1.5" id="floor2">
                <FloorField
                  asterisk
                  value={data.floor2}
                  onChange={(v) => {
                    setData({ floor2: v });
                  }}
                />
                {errors.includes("floor2") && (
                  <p className="text-red-500 text-sm mt-[-6px]">
                    Våning måste väljas
                  </p>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <EntranceCodeField
                  value={data.entranceCode2}
                  onChange={(v) => setData({ entranceCode2: v })}
                />
              </div>
            </div>
            <div id="entrance2" className=" gap-2 grid">
              <Label htmlFor="typeOfEntrance" >
                Hiss
              </Label>
              <RadioButtonImageField
                containerClassName="flex flex-col gap-2 grid grid-cols-2 md:grid-cols-3"
                options={entranceOptions}
                onChange={(v) => {
                  setData({ entrance2: v });
                }}
                value={data.entrance2}
                name="typeOfEntrance"
              />
              {errors.includes("entrance2") && (
                <p className="text-red-500 text-sm">
                  Ett av hiss alternativen måste väljas
                </p>
              )}
            </div>
          </>
        )}

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="description">Ytterligare information</Label>
          <Textarea
            rows={5}
            id="description"
            placeholder="Beskriv några andra viktiga detaljer om byggnaden"
            value={data.addressInfo2}
            onChange={(e) => setData({ addressInfo2: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}