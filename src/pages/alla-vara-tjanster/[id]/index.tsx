import { Form } from "@/components/form";
import SectionContainer from "@/components/shared/section-container";
import { servicesStaticPaths } from "@/lib/constants/services";
import { Service } from "@/lib/types/form.types";
import React from "react";

export default function ServicePage({
  service,
}: {
  service: (typeof servicesStaticPaths)[0];
}) {
  if (!service) return <div>Service not found</div>;

  return (
    <>
      <div className=" max-w-5xl mx-auto my-10 px-4">
        <div className=" flex flex-col gap-10 md:grid md:grid-cols-12">
          <div className=" md:col-span-4 lg:col-span-5 ">
            <div className=" sticky top-5 w-full">
              <h1 className="text-3xl text-primary font-bold">
                {service.title}
              </h1>
              <p className="mt-4 text-sm">{service.description}</p>
              <div className="">
                <img
                  alt={service.title}
                  className=" mt-6 rounded-md  w-[300px]"
                  src={service.image}
                />
              </div>
              <div className="mt-6">
                <p className=" text-sm  ">
                  Våra certifierade medarbetare använder moderna bärselar och
                  specialverktyg för att hantera allt från tunga möbler och
                  vitvaror till känsliga eller otympliga objekt. Oavsett om det
                  gäller kassaskåp, flyglar eller kristallkronor ser vi till att
                  jobbet utförs säkert, effektivt och utan skador – även i
                  trappor och trånga passager. Med GoFlytt får du en trygg och
                  smidig tjänst som sparar både tid och rygg. Vi bär – du
                  slipper.
                </p>
              </div>
              <div className="">
                <img
                  alt={"Truck"}
                  className=" mt-6 rounded-md  w-[300px]"
                  src={"/images/truck-alone.png"}
                />
              </div>
            </div>
          </div>
          <div className=" md:col-span-8 lg:col-span-7">
            <Form service={service.type as Service} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = servicesStaticPaths.map((service) => ({
    params: { id: service.url.split("/").pop()! },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const service = servicesStaticPaths.find(
    (s) => s.url.split("/").pop() === params.id
  );

  return {
    props: {
      service,
    },
  };
}
