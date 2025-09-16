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

export function Form(props: { service?: Service }) {
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
    if (props.service) setData({ service: props.service });
  }, [props.service]);

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

  console.log(visiblePages);
  return (
    <>
      {thankYou ? (
        <></>
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
