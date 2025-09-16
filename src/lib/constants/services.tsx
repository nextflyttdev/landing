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
    image: "/images/services/barhjalp.jpg",
    description: `Vi tar hand om allt – packning, bärhjälp, bortforsling,
    möbler och flyttstäd. Våra erfarna experter i Stockholm
    gör din flytt smidig, trygg och helt utan stress.`,
    type: "carry",
  },

  {
    title: "Flytthjälp",
    shortDescription:
      "Smidiga flyttjänster för både små och stora flyttar, anpassade efter dina behov.",
    icon: <Truck className="size-5 text-primary shrink-0" />,
    url: "/alla-vara-tjanster/flytthjalp",
    image: "/images/services/flytthalp.jpg",
    description: `Oavsett om det handlar om en liten lägenhet eller ett helt hus
    erbjuder vi flexibla och trygga flyttlösningar. Vi packar, transporterar
    och levererar dina ägodelar med största omsorg så att du kan fokusera
    på det som är viktigast i din flytt.`,
    type: "move",
  },
  {
    title: "Flyttstädning",
    shortDescription:
      "Noggrann städning vid flytt för att du ska kunna lämna ditt hem skinande rent och godkänt.",
    icon: <Sparkles className="size-5 text-primary shrink-0" />,
    url: "/alla-vara-tjanster/flyttstadning",
    image: "/images/services/flyttstadning.jpg",
    description: `Vi säkerställer att ditt hem är skinande rent när du lämnar det.
    Våra professionella städteam följer alla krav och riktlinjer för att garantera
    att städningen blir godkänd av både hyresvärdar och bostadsrättsföreningar.
    En bekymmersfri flyttstädning som sparar både tid och energi.`,
    type: "clean",
  },
  {
    title: "Kontorsflytt",
    shortDescription:
      "Effektiva och säkra lösningar för att flytta hela eller delar av ditt kontor utan avbrott.",
    icon: <Briefcase className="size-5 text-primary shrink-0" />,
    url: "/alla-vara-tjanster/kontorsflytt",
    image: "/images/services/kontorsflytt.jpg",
    description: `Vi erbjuder skräddarsydda lösningar för kontorsflyttar i Stockholm.
    Med minimal störning för din verksamhet ser vi till att arbetsplatser, IT-utrustning
    och möbler flyttas säkert och effektivt. Perfekt för företag som vill fortsätta
    arbeta utan onödiga avbrott under flytten.`,
    type: "movecompany",
  },
];

export const servicesStaticPaths = services.map((e) => ({
  title: e.title,
  url: e.url,
  description: e.description,
  image: e.image,
}));
