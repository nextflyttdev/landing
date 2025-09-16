import { services } from "@/lib/constants/services";
import Link from "next/link";
import React from "react";

const AllServicesGrid = () => {
  return (
    <div className=" grid gap-4 mx-auto max-w-4xl grid-cols-2 md:grid-cols-4">
      {services.map((e) => (
        <Link
          href={e.url}
          style={{ backgroundImage: ` url('${e.image}')` }}
          className={` bg-cover bg-center h-40 rounded-md text-white  `}
        >
          <div className=" font-bold hover:bg-black/0 transition duration-300 text-sm w-full h-full bg-black/20 flex justify-center items-center rounded-md">
            {e.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllServicesGrid;
