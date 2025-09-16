import React from "react";
import { Button } from "../ui/button";

const ServicesPrivatPublic = () => {
  return (
    <section className=" bg-gray-100 w-full">
      <div className=" max-w-4xl mx-auto flex flex-col gap-4 px-4 py-8 md:px-8 md:py-14">
        <h2 className="text-xl md:text-2xl font-bold text-center text-primary">
          Tjänster för både privatpersoner och företag
        </h2>
        <div>
          <p className="text-sm font-semibold text-center text-black">
            Flytt & Städ i Stockholm – enkelt och tryggt
          </p>
          <p className=" mt-2 text-sm max-w-2xl mx-auto font-normal text-center text-black">
            Vi hjälper både privatpersoner och företag med skräddarsydda
            lösningar inom flytt och städ. Du väljer tjänsterna – vi fixar
            resten, smidigt och professionellt.
          </p>
        </div>
        <div className=" max-w-2xl grid gap-8 grid-cols-2 mx-auto">
          <Button
            size={"sm"}
            className="font-bold text-sm"
            variant={"secondary"}
          >
            BOKA DIN FLYTT NU
          </Button>
          <Button size={"sm"} className="font-bold text-sm" variant={"default"}>
            FLYTT TIPS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPrivatPublic;
