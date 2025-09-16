import React from "react";
import { Button } from "../ui/button";
import { Title } from "@radix-ui/react-dialog";
import Link from "next/link";

const ServiceSection = ({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <div className="">
      <div className="grid items-center gap-4 md:gap-8 lg:grid-cols-12">
        <div className="inline-flex flex-row col-span-8 items-start gap-4">
          <img
            className="w-10 h-10 md:w-18 md:h-18 md:block hidden object-contain"
            src={"/icons/branded-row.png"}
          />

          <div className="flex flex-col items-start md:items-center  text-left md:text-center lg:items-start lg:text-left">
            <div className="flex flex-row items-center gap-2">
              <img
                className="w-10 h-10 md:w-18 md:h-18 md:hidden block object-contain"
                src={"/icons/branded-row.png"}
              />
              <h3 className="mb-1 text-primary text-left  text-2xl font-bold lg:text-2xl ">
                {title}
              </h3>
            </div>
            <p className="  max-w-xl   text-sm text-black font-medium ">
              {description}
            </p>
            <Button variant={"secondary"} size={"sm"} asChild className=" mt-4   uppercase font-bold text-sm">
              <Link href={link}>{title} OFFERT</Link>
            </Button>
          </div>
        </div>
        <img
          src={image}
          alt={"woman"}
          className="max-h-96 w-full col-span-4 rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default ServiceSection;
