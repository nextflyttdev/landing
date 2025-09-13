import React from "react";
import SectionContainer from "../shared/section-container";
import { locations } from "@/lib/constants/locations";

const HomeLocations = () => {
  return (
    <div className="bg-sky-50/40 w-full">
      <SectionContainer>
        <div className=" w-full flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-8 items-center">
          <div className=" col-span-4 w-full flex flex-col justify-center ">
            <img src={"/images/truck.png"} alt="truck" />
          </div>
          <div className=" col-span-8 flex flex-col w-full gap-4">
            <h3 className="font-bold"> Här finns vi</h3>
            <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {locations.map((e)=><li className=" text-neutral-600  font-extralight" key={e.id}>{e.name}</li>)}

            </ul>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default HomeLocations;
