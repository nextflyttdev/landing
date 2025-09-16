import HomeLocations from "@/components/home/home-locations";
import HomeRatings from "@/components/home/home-ratings";
import SectionContainer from "@/components/shared/section-container";
import ServicesPrivatPublic from "@/components/shared/services-privat-public";
import React from "react";

const OmOss = () => {
  return (
    <div>
      <SectionContainer>
        <div className="flex flex-col justify-center items-center">
          <img className=" w-60" src={"/images/om-oss.png"} />
          <h1 className="text-2xl font-bold text-primary">Vi är Nextflytt</h1>
          <br/>
          <span className="font-semibold text-sm text-black">
            Din nästa flytt - enklare än någonsin
          </span>
          <div className=" mx-auto max-w-2xl mt-5">
            <p className=" text-center text-sm">
              Vi startade vår verksamhet 2020 och vårt erfarna team är här för
              att göra din flytt enkel och trygg. Vi vet att en flytt handlar om
              mer än att bara flytta lådor – det handlar om att komma vidare
              till nästa kapitel.
            </p>
            <br />
            <p className=" text-center text-sm">
              Därför arbetar vi med ansvar, omsorg och engagemang för att ge dig
              en smidig flytt utan stress.
            </p>
            <br />
            <p className=" text-center text-sm">Välkommen till Nextflytt.</p>
          </div>
                    <img className=" w-[400px] rounded-md object-contain mt-10" src={"/images/om-oss2.png"} />

        </div>
      </SectionContainer>
      <HomeRatings />
      <br />
      <ServicesPrivatPublic />
      <br />
    </div>
  );
};

export default OmOss;
