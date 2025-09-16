import { extraServicesMap } from "@/lib/constants/formOptions";
import { services } from "@/lib/constants/services";
import { Service } from "@/lib/types/form.types";
import { Separator } from "@radix-ui/react-select";
import { CheckIcon, XIcon } from "lucide-react";


interface ExtraServiceSummaryProps {
  service: Service | undefined;
  extraServices?: Service[];
}

export function ExtraServiceSummary({
  service,
  extraServices,
}: ExtraServiceSummaryProps) {
  if (service === undefined) return null;

  const relatedServices = extraServicesMap
    .find((map) => map.key.includes(service))
    ?.extraServices.map((extraService) => {
      const serviceDetails = services.find(
        (s) => s.type === extraService,
      );
      if (!serviceDetails) return null;

      return {
        name: serviceDetails.title,
        type: serviceDetails.type,
        yes: extraServices?.includes(extraService),
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <div className="pt-4">
      <div className="mb-4">
        <div className="flex justify-between align-middle">
          <p className="text-lg flex text-title font-semibold">
            Extra tjänster
          </p>
        </div>
      </div>
      {relatedServices?.map((relatedService) => (
        <div key={relatedService.type} className="mb-4">
          <div className="flex justify-between align-middle">
            <p className="text-lg flex text-title">{relatedService.name}</p>
            {/* {relatedService.yes ? (
              <CheckIcon color="green" />
            ) : (
              <XIcon color="red" />
            )} */}
          </div>
        </div>
      ))}
      <Separator className="my-4" />
    </div>
  );
}