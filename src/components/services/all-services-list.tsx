import React from "react";
import { services } from "@/lib/constants/services";
import ServiceSection from "./service-section";

const AllServicesList = () => {
  return (
    <div className=" max-w-4xl mx-auto w-full flex flex-col gap-10 md:gap-20">
      {services.map((e) => (
        <ServiceSection
          key={e.title}
          title={e.title}
          image={e.image}
          description={e.description}
          link={e.url}
        />
      ))}
    </div>
  );
};

export default AllServicesList;
