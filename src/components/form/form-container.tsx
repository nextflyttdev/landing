import { useFormStore } from "@/stores/form.store";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { type ReactNode } from "react";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";


interface FormPageContainerProps {
  children: ReactNode;
}

function scrollToElement(elementId: string, offset = 0): void {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Scroll error: Element with ID '${elementId}' not found.`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

export function FormPageContainer(props: FormPageContainerProps) {
  const { page, pagesCount, nextPage, prevPage } = useFormStore();

  const handleNavigation = (direction: "next" | "prev") => {
    if (direction === "prev") {
      prevPage();
      scrollToElement("top-of-form", 220);
      return;
    }
    const errors = nextPage();

    if (errors.length === 0) {
      scrollToElement("top-of-form", 220);
    } else {
      scrollToElement(errors[0], 110);
    }
  };

  return (
    <div className="p-3 rounded-lg" id="top-of-form">
      <div className="mb-4">
        <div className="font-bold">
          Steg {page + 1} av {pagesCount}
        </div>
        {/* <Progress value={page + 1} total={pagesCount} /> */}
      </div>
      <div>{props.children}</div>
      <div className="pb-4 flex justify-between">
        {page <= 0 ? (
          <div className="pt-4"></div>
        ) : (
          <div className="pt-4">
            <Button
              variant="outline"
              onClick={() => handleNavigation("prev")}
            >
              <ArrowLeftIcon /> Tillbaka
            </Button>
          </div>
        )}
        {page < pagesCount - 1 && (
          <div className="pt-4" >
            <Button onClick={() => handleNavigation("next")}>
              Nästa <ArrowRightIcon size={30} strokeWidth={3} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}