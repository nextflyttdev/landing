import { useFormStore } from "@/stores/form.store";
import { FormPageHeader } from "../form-page-header";

import { getServiceNameByDbName } from "@/lib/utils";
import {format} from "date-fns"
import { ExtraServiceSummary } from "../sumamry/extra-services-summary";
import { ExtraMoveCleanOptionsSummary } from "../sumamry/extra-move-summary";
import { RutField } from "../fields/rut-field";
import SubmitButton from "../fields/submit-button";
import { Separator } from "@radix-ui/react-select";
export function SummaryPage() {
  const { data, setData,  submitForm, submissionLoading } =
    useFormStore();
  return (
    <div>
      <FormPageHeader
        title="Sammanfattning"
        subtitle="Den här offertförfrågan är helt kostnadsfri, dubbelkolla gärna informationen och bekräfta nedan"
      />
      <div className="mx-auto p-6 rounded-xl">
        <SummaryItem value={data.customerName} bold />
        <SummaryItem value={data.customerEmail} />
        <SummaryItem value={data.customerPhone} end />
        <SummaryItem value={getServiceNameByDbName(data.service)} bold />
        <SummaryItem
          value={
            data.date
              ? format(new Date(data.date), "yyyy-MM-dd")
              : "Inget datum valt"
          }
          end
        />
        {data.service &&
          ["move", "movecompany", "transport"].includes(data.service) && (
            <>
              <SummaryItem
                value={
                  data.address1 === "N/A" ? "Ingen adress än" : data.address1
                }
                bold
              />
              <SummaryItem value={data.area1} end m2 />
              <SummaryItem
                value={
                  data.address1 === "N/A" ? "Ingen adress än" : data.address2
                }
                bold
              />
              <SummaryItem value={data.area2} end m2 />
            </>
          )}
    
        {data.service && ["throw", "carry"].includes(data.service) && (
          <>
            <SummaryItem
              value={
                data.address1 === "N/A" ? "Ingen adress än" : data.address1
              }
              bold
              end
            />
          </>
        )}

        {data.service && data.service === "clean" && (
          <>
            <SummaryItem
              value={
                data.address1 === "N/A" ? "Ingen adress än" : data.address1
              }
              bold
            />
            <SummaryItem value={data.area1} end m2 />
            <ExtraMoveCleanOptionsSummary
              selectedExtraMoveCleanOptions={data.extraServices}
            />
          </>
        )}

        {data.service &&
          [
            "clearence cleaning",
            "construction",
            "office",
            "show cleaning",
            "big",
          ].includes(data.service) && (
            <>
              <SummaryItem
                value={data.address1 === "N/A" ? "Ingen adress" : data.address1}
                bold
              />
              <SummaryItem value={data.area1} end m2 />
            </>
          )}
        <ExtraServiceSummary
          service={data.service}
          extraServices={data.extraServices}
        />
      </div>

      {/* <div className="mx-auto bg-primary bg-opacity-5 p-6 rounded-xl mt-10">
        <RutField
          value={data.rut ?? false}
          onClick={() => {
            setData({ rut: !data.rut });
          }}
        />

      </div> */}
      <div className="flex justify-center mt-4">
      
        <SubmitButton
          onClick={() => submitForm()}
          isLoading={submissionLoading}
        />
      </div>
    </div>
  );
}


function SummaryItem({
  value,
  bold,
  end,
  m2,
}: {
  value?: string | number;
  bold?: boolean;
  end?: boolean;
  m2?: boolean;
}) {
  return (
    <div className="pt-4">
      {bold ? (
        <p className="text-lg flex font-semibold text-title">
          {m2 ? (value !== undefined ? `${value} m2` : null) : value || null}
        </p>
      ) : (
        <p className="text-lg flex font-normal text-title">
          {m2 ? (value !== undefined ? `${value} m2` : null) : value || null}
        </p>
      )}
      {!end || <Separator className="my-4" />}
    </div>
  );
}