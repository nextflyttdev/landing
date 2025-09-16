import { extraMoveCleanOptions } from "@/lib/constants/formOptions";
import { Separator } from "@radix-ui/react-select";

export function ExtraMoveCleanOptionsSummary({
  selectedExtraMoveCleanOptions,
}: {
  selectedExtraMoveCleanOptions: string[] | undefined;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <p className="text-lg font-semibold text-title w-full">Tillägstjänster</p>
      {selectedExtraMoveCleanOptions === undefined ? (
        <p>Inga tilläggstjänster valda</p>
      ) : (
        <>
          {selectedExtraMoveCleanOptions.map((value) => {
            const option = extraMoveCleanOptions.find((o) => o.value === value);

            if (!option) {
              return null;
            }
            return (
              <span
                key={option.value}
                className="px-3 py-1 text-md font-medium bg-primary text-white rounded-full"
              >
                {option.label}
              </span>
            );
          })}
        </>
      )}

      <Separator
       className="my-4" />
    </div>
  );
}