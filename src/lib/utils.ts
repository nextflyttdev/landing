import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { services } from "./constants/services";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function getServiceNameByDbName(
  name: string | undefined,
): string | undefined {
  if (name === undefined) return undefined;
  const service = services.find((service) => service.type === name);
  return service?.title;
}

export function getServiceNameByUrlName(urlName: string) {
  const service = services.find(
    (service) => service.url.replace("/alla-vara-tjanster/", "") === urlName,
  );
  if (service?.title) return service.title;
  return urlName;
}