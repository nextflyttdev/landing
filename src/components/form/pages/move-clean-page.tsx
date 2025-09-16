import { useFormStore } from "@/stores/form.store";
import { FormPageHeader } from "../form-page-header";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { buildingOptionsClean, extraMoveCleanOptions, extraServiceOptions, extraServicesMap } from "@/lib/constants/formOptions";

import { Service } from "@/lib/types/form.types";
import { useEffect, useState } from "react";
import { CheckboxImageField } from "../fields/checkbox-image-field";
import { AddressField } from "../fields/address-field";
import { AreaField } from "../fields/area-field";
import { RadioButtonImageField } from "../fields/radio-button-image-field";
import { FloorField } from "../fields/floor-field";
import { EntranceCodeField } from "../fields/entrance-code-field";
import { MultiSelect } from "@/components/ui/multiselect";


export function MoveCleanPage() {
  const { data, setData, errors } = useFormStore();

  return (
    <div>
      <FormPageHeader title="Vart ska det flyttstädas?" />
      <div className="flex flex-col gap-6 lg:gap-8 w-full">
        <div className="grid w-full items-center gap-1.5" id="address1">
          <AddressField
            error={errors.includes("address1")}
            value={data.address1 ?? ""}
            onChange={(v) => {
              setData({ address1: v });
            }}
          />
        </div>
        <div className="grid w-full items-center gap-1.5" id="area1">
          <AreaField
            
            label="Storlek *"
            value={data.area1}
            onChange={(e) => setData({ area1: parseFloat(e.target.value) })}
          />
          {errors.includes("area1") && (
            <p className="text-red-500 text-sm mt-[-6px]">
              Area måste fyllas i
            </p>
          )}
        </div>
        <div id="building1" className=" gap-2 grid w-full">
          <Label htmlFor="typeOfBuilding" >
            Typ av byggnad
          </Label>
          <RadioButtonImageField
            containerClassName="grid grid-cols-2 md:grid-cols-4"
            options={buildingOptionsClean}
            onChange={(v) => {
              setData({ building1: v });
            }}
            name="typeOfBuilding"
            value={data.building1}
          />
          {errors.includes("building1") && (
            <p className="text-red-500 text-sm">Byggnad måste väljas</p>
          )}
        </div>
        {(data.building1 === "apartment" || data.building1 === "office") && (
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
            <div className="grid w-full items-center gap-1.5">
              <FloorField
                value={data.floor1}
                onChange={(v) => {
                  setData({ floor1: v });
                }}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <EntranceCodeField
                value={data.entranceCode1}
                onChange={(v) => setData({ entranceCode1: v })}
              />
            </div>
          </div>
        )}
        <div className="grid gap-2 w-full">
          <Label htmlFor="typeOfBuilding ">Tilläggstjänster</Label>
          <MultiSelect
            options={extraMoveCleanOptions}
            onValueChange={(v) => setData({ extraMoveCleanOptions: v })}
            defaultValue={data.extraMoveCleanOptions}
            placeholder="Välj tilläggstjänster"
            variant="inverted"
            animation={2}
            maxCount={3}
          />
        </div>
        <div className="grid w-full items-center gap-1">
          <Label htmlFor="description">Övrig information</Label>
          <Textarea
            rows={5}
            id="description"
            placeholder="Beskriv övriga önskemål avseende flyttstädningen?"
            value={data.addressInfo1}
            onChange={(e) => setData({ addressInfo1: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}