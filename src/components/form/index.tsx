import { RenderCondition, Service } from "@/lib/types/form.types";
import { FormDataKey, useFormStore } from "@/stores/form.store";
import { ReactNode, useEffect, useMemo } from "react";
import { StartPage } from "./pages/start-page-form";
import { FormPageContainer } from "./form-container";


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

    // // moving, company moving, transport
    // {
    //   element: <MovingFromPage />,
    //   renderCondition: {
    //     services: ["move", "movecompany", "transport"],
    //   },
    //   mandatoryFields: ["address1", "building1", "floor1", "entrance1"],
    // },
    // {
    //   element: <MovingToPage />,
    //   renderCondition: {
    //     services: ["move", "movecompany", "transport"],
    //   },
    //   mandatoryFields: ["address2", "building2", "floor2", "entrance2"],
    // },

    // //piano moving
    // {
    //   element: <MovingFromPianoPage />,
    //   renderCondition: {
    //     services: ["piano"],
    //   },
    //   mandatoryFields: ["address1", "building1", "floor1", "entrance1"],
    // },
    // {
    //   element: <MovingToPianoPage />,
    //   renderCondition: {
    //     services: ["piano"],
    //   },
    //   mandatoryFields: ["address2", "building2", "floor2", "entrance2"],
    // },

    // // move, move company and transport
    // {
    //   element: <SpecialFurniturePage />,
    //   renderCondition: {
    //     services: ["move", "movecompany", "transport"],
    //   },
    //   mandatoryFields: [],
    // },
    // // Move clean page
    // {
    //   element: <MoveCleanPage />,
    //   renderCondition: {
    //     services: ["clean"],
    //   },
    //   mandatoryFields: ["address1", "area1", "building1"],
    // },
    // // Throw and Carry page
    // {
    //   element: <ThrowAndCarryPage />,
    //   renderCondition: {
    //     services: ["throw", "carry"],
    //   },
    //   mandatoryFields: ["address1", "building1", "floor1", "entrance1"],
    // },
    // // packing page
    // {
    //   element: <PackingPage />,
    //   renderCondition: {
    //     services: ["packing"],
    //   },
    //   mandatoryFields: ["address1"],
    // },
    // // packing page
    // {
    //   element: <OtherCleaningPage />,
    //   renderCondition: {
    //     services: [
    //       "big",
    //       "clearence cleaning",
    //       "construction",
    //       "office",
    //       "show cleaning",
    //     ],
    //   },
    //   mandatoryFields: ["address1", "building1"],
    // },
    // All services has this
    // {
    //   element: <ExtraServicePage />,
    //   renderCondition: { alwaysVisible: true },
    //   mandatoryFields: [],
    // },
    // // All services has this
    // {
    //   element: <SummaryPage />,
    //   renderCondition: { alwaysVisible: true },
    //   mandatoryFields: [],
    // },
  ];

  const visiblePages = useMemo(() => {
    const visiblePages = pageComponents.filter((page) =>
      isPageVisible(page.renderCondition, data.service),
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
        < ></>
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