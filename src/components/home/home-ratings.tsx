import React from "react";
import SectionContainer from "../shared/section-container";
import { locations } from "@/lib/constants/locations";
import { ratings } from "@/lib/constants/ratings";

const HomeRatings = () => {
  return (
    <div className="bg-sky-50/40 w-full">
      <SectionContainer>
        <div className=" w-full flex flex-col gap-4 items-center">
          <ul className="grid grid-cols-2 gap-6 gap-y-10  md:gap-10 md:grid-cols-4">
            {ratings.map((e) => (
              <SectionItem
                key={e.id}
                image={e.image}
                title={e.title}
                icon={e.icon}
              />
            ))}
          </ul>
        </div>
      </SectionContainer>
    </div>
  );
};

export default HomeRatings;

const SectionItem = (props: { image: string; title: string; icon: string }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-2">
      <img alt="marker" src={props.image} />
      <div className="flex flex-col items-center flex-1 w-full">
        <img className=" w-28" src={props.icon} alt="icon" />
        <h3 className="font-bold text-center text-primary text-md md:text-lg">
          {props.title}
        </h3>
      </div>
    </div>
  );
};
