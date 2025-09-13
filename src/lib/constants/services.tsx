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
    icon: <Package className="size-5 shrink-0" />,
    url: "/alla-vara-tjanster/barhjalp",
  },
  {
    title: "Bortforsling",
    shortDescription:
      "Vi forslar bort gamla möbler, skräp och annat du inte längre behöver – snabbt och miljövänligt.",
    icon: <Trash2 className="size-5 shrink-0" />,
    url: "/alla-vara-tjanster/bortforsling",
  },
  {
    title: "Flytthjälp",
    shortDescription:
      "Smidiga flyttjänster för både små och stora flyttar, anpassade efter dina behov.",
    icon: <Truck className="size-5 shrink-0" />,
    url: "/alla-vara-tjanster/flytthjalp",
  },
  {
    title: "Flyttstädning",
    shortDescription:
      "Noggrann städning vid flytt för att du ska kunna lämna ditt hem skinande rent och godkänt.",
    icon: <Sparkles className="size-5 shrink-0" />,
    url: "/alla-vara-tjanster/flyttstadning",
  },
  {
    title: "Kontorsflytt",
    shortDescription:
      "Effektiva och säkra lösningar för att flytta hela eller delar av ditt kontor utan avbrott.",
    icon: <Briefcase className="size-5 shrink-0" />,
    url: "/alla-vara-tjanster/kontorsflytt",
  },
  {
    title: "Packhjälp",
    shortDescription:
      "Vi hjälper dig att packa dina saker med rätt material och teknik för maximal säkerhet.",
    icon: <Box className="size-5 shrink-0" />,
    url: "/alla-vara-tjanster/packhjalp",
  },
  {
    title: "Pianoflytt",
    shortDescription:
      "Specialiserad hjälp med att flytta piano eller andra tunga instrument på ett tryggt sätt.",
    icon: <Piano className="size-5 shrink-0" />,
    url: "/alla-vara-tjanster/pianoflytt",
  },
  {
    title: "Storstädning",
    shortDescription:
      "Grundlig storstädning för hem eller kontor – perfekt inför speciella tillfällen eller sommar/vinterstädning.",
    icon: <Braces className="size-5 shrink-0" />,
    url: "/alla-vara-tjanster/storstadning",
  },
];
export const servicesStaticPaths = services.map((e) => ({
  title: e.title,
  url: e.url,
  shortDescription: e.shortDescription,
}));
