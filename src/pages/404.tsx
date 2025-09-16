import SectionContainer from "@/components/shared/section-container";
import React from "react";

const NotFound = () => {
  return (
   <div className=" h-full">
     <SectionContainer>
      <div className=" h-full flex flex-col items-center justify-center">
        <h1 className=" text-7xl md:text-[90px] font-black text-secondary">
          404
        </h1>
        <h1 className=" text-4xl md:text-5xl font-black text-primary">
          Not Found
        </h1>
      </div>
    </SectionContainer>
   </div>
  );
};

export default NotFound;
