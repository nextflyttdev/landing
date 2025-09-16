import AllServicesGrid from "@/components/services/all-services-grid";
import AllServicesList from "@/components/services/all-services-list";
import SectionContainer from "@/components/shared/section-container";
import ServicesPrivatPublic from "@/components/shared/services-privat-public";
import React from "react";

const Index = () => {
  return (
    <div>
      <section className=" relative">
        <div className="absolute w-full h-full left-0 top-0">
          <div className=" h-full max-w-7xl mx-auto grid grid-cols-2">
            <div></div>
            <div className="flex flex-col justify-center items-center">
              <h1 className=" font-bold text-primary text-3xl  md:text-4xl lg:text-6xl">Din Flyttfirma <br/> <span className="text-secondary">i Stockholm</span></h1>


            </div>

          </div>

        </div>
        <img
          className=" w-full object-contain bg-center"
          src={"/images/services.jpg"}
        />
      </section>
      <SectionContainer>
        <AllServicesGrid />
      </SectionContainer>
      <SectionContainer>
        <AllServicesList />
      </SectionContainer>
      <ServicesPrivatPublic />
    </div>
  );
};

export default Index;
