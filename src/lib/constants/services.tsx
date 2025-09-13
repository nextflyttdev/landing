import {
  Package,
  Trash2,
  Truck,
  Sparkles,
  Briefcase,
  Box,
  Piano,
  Braces,
} from "lucide-react";

export const services = [
  {
    title: "Bärhjälp",
    shortDescription:
      "Professionell hjälp med att bära tunga och otympliga saker på ett säkert och effektivt sätt.",
    icon: <Package className="size-5 text-primary shrink-0" />,
    url: "/alla-vara-tjanster/barhjalp",
  },

  {
    title: "Flytthjälp",
    shortDescription:
      "Smidiga flyttjänster för både små och stora flyttar, anpassade efter dina behov.",
    icon: <Truck className="size-5 text-primary shrink-0" />,
    url: "/alla-vara-tjanster/flytthjalp",
  },
  {
    title: "Flyttstädning",
    shortDescription:
      "Noggrann städning vid flytt för att du ska kunna lämna ditt hem skinande rent och godkänt.",
    icon: <Sparkles className="size-5 text-primary shrink-0" />,
    url: "/alla-vara-tjanster/flyttstadning",
  },
  {
    title: "Kontorsflytt",
    shortDescription:
      "Effektiva och säkra lösningar för att flytta hela eller delar av ditt kontor utan avbrott.",
    icon: <Briefcase className="size-5 text-primary shrink-0" />,
    url: "/alla-vara-tjanster/kontorsflytt",
  },
];
export const servicesStaticPaths = services.map((e) => ({
  title: e.title,
  url: e.url,
  shortDescription: e.shortDescription,
}));
