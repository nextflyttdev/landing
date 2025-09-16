import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeHero = () => {
  return (
    <>
      <div className=" block lg:hidden relative h-[600px] xl:h-[450px] lg:h-[400px] ">
        <img
          src={"/images/hero-bg.jpg"}
          className=" bg-center object-cover bg-cover h-full w-full"
        />
        <div className=" absolute left-0 top-0 w-full h-full flex flex-col justify-center gap-4 ">
          <div className=" flex justify-center">
            <img
              className=" h-[300px] object-contain   "
              src={"/images/man.png"}
            />
          </div>
          <div className=" p-4 flex justify-center flex-col items-center gap-4 ">
            <h1 className=" font-bold text-3xl text-center  text-primary">
              Din Kompleta <br />
              <span className="text-secondary">flyttpartner</span>{" "}
            </h1>
            <div className="flex justify-center gap-2 items-center">
              <Button
                size={"sm"}
                className="font-bold text-sm"
                variant={"secondary"}
                asChild
              >
                <Link href={"/alla-vara-tjanster/privatkun"}>PRIVATKUNDER</Link>
              </Button>
              <Button
                size={"sm"}
                className="font-bold text-sm"
                variant={"default"}
                asChild
              >
                <Link href={"/alla-vara-tjanster/foretagskund"}>
                  FÖRETAGSKUND
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/images/hero-bg.jpg')]  hidden lg:block bg-cover bg-center h-[600px] xl:h-[450px] lg:h-[400px] w-full">
   
        <div className=" mx-auto h-[600px] xl:h-[450px] lg:h-[400px] relative  max-w-[1400px] grid grid-cols-2">
                <div className=" absolute z-0 left-0 top-0 w-full h-full ">
            <div className=" h-full">
              <img
                className=" object-cover h-full"
                src={"/images/man.png"}
              />
            </div>
          </div>
          <div></div>
          <div className=" z-0 p-4 flex justify-center flex-col items-start gap-4 h-full">
            <h1 className=" font-bold text-2xl lg:text-7xl text-primary">
              {" "}
              Din Kompleta <br />{" "}
              <span className="text-secondary">flyttpartner</span>{" "}
            </h1>
            <div className=" flex flex-row justify-start gap-2 items-center mt-6">
              <Button
                size={"lg"}
                className="font-bold"
                variant={"secondary"}
                asChild
              >
                <Link href={"/alla-vara-tjanster/privatkun"}>PRIVATKUNDER</Link>
              </Button>
              <Button
                size={"lg"}
                className="font-bold"
                variant={"default"}
                asChild
              >
                <Link href={"/alla-vara-tjanster/foretagskund"}>
                  FÖRETAGSKUND
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
