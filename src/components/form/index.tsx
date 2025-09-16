import { RenderCondition, Service } from "@/lib/types/form.types";
import { FormDataKey, useFormStore } from "@/stores/form.store";
import { ReactNode, useEffect, useMemo } from "react";
import { StartPage } from "./pages/start-page-form";
import { FormPageContainer } from "./form-container";
import { MovingFromPage } from "./pages/moving-from-page";
import { MovingToPage } from "./pages/moving-to-page";
import { SpecialFurniturePage } from "./pages/special-furniture-page";
import { SummaryPage } from "./pages/summary-page";
import { ThrowAndCarryPage } from "./pages/throw-carry-page";
import { ExtraServicePage } from "./pages/extra-services-page";
import { MoveCleanPage } from "./pages/move-clean-page";
import { Button } from "../ui/button";
import Link from "next/link";

export function Form({ service }: { service?: Service }) {
  const {
    data,
    setData,
    page,
    setPagesCount,
    setMandatoryFields,
    thankYou,
    resetForm,
  } = useFormStore();

  useEffect(() => {
    resetForm();
    if (service) setData({ service: service });
  }, [service]);
  const pageComponents: {
    element: ReactNode;
    renderCondition: RenderCondition;
    mandatoryFields: FormDataKey[];
  }[] = [
    // All services has this
    {
      element: <StartPage />,
      renderCondition: { alwaysVisible: true },
      mandatoryFields: [
        "customerName",
        "customerEmail",
        "customerPhone",
        "service",
      ],
    },
    {
      element: <MovingFromPage />,
      renderCondition: {
        services: ["move", "movecompany"],
      },
      mandatoryFields: ["address1", "building1", "floor1", "entrance1"],
    },
    {
      element: <MovingToPage />,
      renderCondition: {
        services: ["move", "movecompany", "transport"],
      },
      mandatoryFields: ["address2", "building2", "floor2", "entrance2"],
    },
    {
      element: <SpecialFurniturePage />,
      renderCondition: {
        services: ["move", "movecompany"],
      },
      mandatoryFields: [],
    },
    {
      element: <MoveCleanPage />,
      renderCondition: {
        services: ["clean"],
      },
      mandatoryFields: ["address1", "area1", "building1"],
    },
    {
      element: <ThrowAndCarryPage />,
      renderCondition: {
        services: ["throw", "carry"],
      },
      mandatoryFields: ["address1", "building1", "floor1", "entrance1"],
    },
    {
      element: <ExtraServicePage />,
      renderCondition: { alwaysVisible: true },
      mandatoryFields: [],
    },
    // // All services has this
    {
      element: <SummaryPage />,
      renderCondition: { alwaysVisible: true },
      mandatoryFields: [],
    },
  ];

  const visiblePages = useMemo(() => {
    const visiblePages = pageComponents.filter((page) =>
      isPageVisible(page.renderCondition, data.service)
    );
    return visiblePages;
  }, [data.service]);

  useEffect(() => {
    setPagesCount(visiblePages.length);
    setMandatoryFields(visiblePages[page].mandatoryFields);
  }, [visiblePages, page, thankYou]);

  return (
    <>
      {thankYou ? (
        <div className="flex h-full items-center justify-center">
          <div>
            <div className="flex flex-col items-center space-y-2 border-green-200 shadow-lg shadow-green-100 border p-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-28 w-28 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1 className="text-4xl font-bold">Tack !</h1>
              <p className="text-gray-600 mt-4">
                  Tack för ditt intresse! Kolla din e-post för en länk till guiden.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 w-full">
                <Button asChild className="font-bold" variant={"default"}><Link href={"/"}>Startsida</Link></Button>
                <Button asChild className=" font-bold" variant={"secondary"}><Link href={"/alla-vara-tjanster"}>Våra tjänster</Link></Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <FormPageContainer>{visiblePages[page].element}</FormPageContainer>
      )}
    </>
  );
}

export function isPageVisible(options: RenderCondition, service?: Service) {
  if ("alwaysVisible" in options && options.alwaysVisible) return true;
  if (!service || !("services" in options)) return false;
  return options.services.includes(service);
}
