import React from "react";

const HomeFeatureHeros = () => {
  return (
    <div>
      <section className=" flex flex-col w-full gap-10 md:gap-20">
        <div className="">
          <div className="grid items-center gap-4 md:gap-8 lg:grid-cols-12">
            <div className="inline-flex  flex-row items-start gap-4  col-span-7">
              <img
                className="w-10 h-10 md:w-28 md:h-28 md:block hidden object-contain"
                src={"/icons/branded-row.png"}
              />

              <div className="flex flex-col items-start md:items-center  text-left md:text-center lg:items-start lg:text-left">
                <div className="flex flex-row items-center gap-2">
                  <img
                    className="w-10 h-10 md:w-28 md:h-28 md:hidden block object-contain"
                    src={"/icons/branded-row.png"}
                  />
                  <h3 className="mb-1 text-primary text-left  text-2xl font-bold lg:text-4xl">
                    Helhetslösning för din flytt
                  </h3>
                </div>
                <p className="text-neutral-800 mb-0  max-w-xl   text-sm md:text-base ">
                  Vi tar hand om allt – packning, bärhjälp, bortforsling, möbler
                  och flyttstäd. Våra erfarna experter i Stockholm gör din flytt
                  smidig, trygg och helt utan stress.{" "}
                </p>
              </div>
            </div>
            <img
              src={"/images/woman-sofa.jpg"}
              alt={"woman"}
              className="max-h-72 w-full rounded-md object-cover col-span-5"
            />
          </div>
        </div>

        <div className="">
          <div className="grid items-center gap-4 md:gap-8 lg:grid-cols-12">
            <img
              src={"/images/woman-laptop.jpg"}
              alt={"woman"}
              className="max-h-72 w-full  md:order-1 order-2 rounded-md object-cover lg:col-span-5"
            />
            <div className="inline-flex flex-row md:order-2 order-1  lg:col-span-7 items-start gap-4">
              <img
                className="w-10 h-10 md:w-28 md:h-28 md:block hidden object-contain"
                src={"/icons/branded-row.png"}
              />

              <div className="flex flex-col items-start md:items-center  text-left md:text-center lg:items-start lg:text-left">
                <div className="flex flex-row items-center gap-2">
                  <img
                    className="w-10 h-10 md:w-28 md:h-28 md:hidden block object-contain"
                    src={"/icons/branded-row.png"}
                  />
                  <h3 className="mb-1 text-primary text-left  text-2xl font-bold lg:text-4xl">
                    Spara 50 % med RUT
                  </h3>
                </div>
                <p className="text-neutral-800 mb-0 max-w-xl   text-sm md:text-base ">
                  Med RUT-avdraget betalar du bara halva priset på flytt och
                  städtjänster. Vi sköter allt det administrativa, enkelt,
                  snabbt och helt utan krångel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeFeatureHeros;
