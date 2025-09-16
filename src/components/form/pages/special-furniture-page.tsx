import { useFormStore } from "@/stores/form.store";
import { FormPageHeader } from "../form-page-header";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { SpecialFurnitureField } from "../fields/special-furniture-field";

export function SpecialFurniturePage() {
  const { data, setSpecialFurnitureCount,  } = useFormStore();

  return (
    <div>
      <FormPageHeader
        title="Några speciella möbler?"
        subtitle="Vissa möbler och objekt är svårare att flytta, välj de speciella möbler eller objekt ni har"
      />
      <div className="flex flex-col gap-6 lg:gap-8 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
          <SpecialFurnitureField
            option={{
              value: "fragile",
              title: "Känsligt",
              subtitle: "Konst, Marmorskiva",
              image: "",
            }}
            count={data.specialFurniture.fragile}
            setCount={(v) => {
              typeof v === "number" && setSpecialFurnitureCount({ fragile: v });
            }}
          />
          <SpecialFurnitureField
            option={{
              value: "unwieldy",
              title: "Otymplig",
              subtitle: "Kristallkrona, Växt, Akvarium",
              image: "",
            }}
            count={data.specialFurniture.unwieldy}
            setCount={(v) => {
              typeof v === "number" &&
                setSpecialFurnitureCount({ unwieldy: v });
            }}
          />
          <SpecialFurnitureField
            option={{
              value: "heavy",
              title: "Tungt",
              subtitle: "Piano, Kassaskåp, Stenmöbel",
              image: "",
            }}
            count={data.specialFurniture.heavy}
            setCount={(v) => {
              typeof v === "number" && setSpecialFurnitureCount({ heavy: v });
            }}
          />
        </div>

        <div className="grid w-full items-center gap-2">
          <Label htmlFor="description">Övrig information</Label>
          <Textarea
            rows={5}
            id="description"
            placeholder="Finns det något särskilt avseende dessa möbler/objekt vi behöver veta?"
          />
        </div>
      </div>
    </div>
  );
}