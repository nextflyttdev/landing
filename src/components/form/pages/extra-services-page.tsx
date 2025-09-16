import { useFormStore } from "@/stores/form.store";
import { FormPageHeader } from "../form-page-header";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { extraServiceOptions, extraServicesMap } from "@/lib/constants/formOptions";

import { Service } from "@/lib/types/form.types";
import { useEffect, useState } from "react";
import { CheckboxImageField } from "../fields/checkbox-image-field";

interface ExtraServiceOption {
  value: Service;
  title: string;
  image: string;
}

export function ExtraServicePage() {
  const { data, setData,  } = useFormStore();
  const [selectedValues, setSelectedValues] = useState<Service[]>(
    data.extraServices || [],
  );

  const getRelevantExtraServices = () => {
    if (!data.service) return [];
    const mapEntry = extraServicesMap.find((entry) =>
      entry.key.includes(data.service!),
    );
    return mapEntry?.extraServices
      .map(
        (extraKey) =>
          extraServiceOptions[extraKey as keyof typeof extraServiceOptions],
      )
      .filter(Boolean) as ExtraServiceOption[];
  };

  const relevantExtraServices = getRelevantExtraServices();

  const handleSelectionChange = (value: Service) => {
    setSelectedValues((prev) => {
      const updatedValues = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];
      return updatedValues;
    });
  };

  useEffect(() => {
    setData({
      extraServices: selectedValues,
    });
  }, [selectedValues, setData]);

  return (
    <div>
      <FormPageHeader
        title="Något extra?"
        subtitle="Här hittar du våra tilläggstjänster. Boka nu för paketpriser!"
      />
      <div className="flex w-full gap-8">
        {relevantExtraServices.map((extraService, index) => (
          <div key={index} className="grid w-full gap-2">
            <Label htmlFor={`name-${data.service}-${index}`}>
              {extraService.title}
            </Label>
            <CheckboxImageField
              containerClassName="w-auto"
              name={`name-${data.service}-${index}`}
              option={extraService}
              selectedValue={selectedValues.includes(extraService.value)}
              onChange={() => handleSelectionChange(extraService.value)}
            />
          </div>
        ))}
      </div>
      <div className="grid w-full items-center gap-2 mt-8">
        <Label htmlFor="additional-info">Ytterligare information</Label>
        <Textarea
          rows={5}
          id="additional-info"
          placeholder="Här kan du skriva all extra information vi kan behöva"
          value={data.extraServicesInfo ?? ""}
          onChange={(e) => setData({ extraServicesInfo: e.target.value })}
        />
      </div>
    </div>
  );
}