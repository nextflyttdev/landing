import { servicesStaticPaths } from "@/lib/constants/services";
import React from "react";

export default function ServicePage({
  service,
}: {
  service: (typeof servicesStaticPaths)[0];
}) {
  if (!service) return <div>Service not found</div>;

  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-bold">{service.title}</h1>
        <p className="mt-4">{service.shortDescription}</p>
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
