import { Form } from "@/components/form";
import SectionContainer from "@/components/shared/section-container";
import React from "react";

const Offert = () => {
  return (
    <SectionContainer>
      <div className="md:grid md:grid-cols-2 relative ">
        <div className="  flex-col justify-center items-center hidden md:flex">
          <img
           className=" sticky top-10 max-w-lg scale-x-[-1]"
           src={"/images/om-oss.png"}
          />
        </div>
        <Form />
      </div>
    </SectionContainer>
  );
};

export default Offert;
