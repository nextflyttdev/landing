import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeHero = () => {
  return (
    <>
      <div className=" block md:hidden relative h-[600px] ">
        <img
          src={"/images/hero.jpg"}
          className=" bg-center object-cover bg-cover h-full w-full"
        />
        <div className=" absolute left-0 top-0 w-full h-full flex flex-col justify-center gap-4 ">
          <div className=" flex justify-center">
            <img
              className=" h-[300px] object-contain   "
              src={"/images/man2.png"}
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
      <div className="bg-[url('/images/hero.jpg')] hidden md:block bg-cover bg-center h-[600px] w-full">
        <div className=" mx-auto h-[600px]  max-w-[1000px] grid grid-cols-2">
          <div className=" w-full h-full relative">
            <div className=" h-full">
              <img
                className=" object-contain h-[600px]"
                src={"/images/man2.png"}
              />
            </div>
          </div>
          <div className=" p-4 flex justify-center flex-col items-start gap-4 h-full">
            <h1 className=" font-bold text-2xl md:text-7xl text-primary">
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
