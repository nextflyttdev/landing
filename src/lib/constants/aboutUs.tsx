import { HelpCircle, Info, Percent, Mail, Lightbulb } from "lucide-react";

export const helpAndContactItems = [
  {
    title: "FAQ",
    description: "Vanliga frågor och svar om våra tjänster och flyttprocessen.",
    icon: <HelpCircle className="size-5 shrink-0" />,
    url: "/hjalp-och-kontakt/faq",
  },
  {
    title: "Om oss",
    description: "Lär känna oss och vårt engagemang för trygg och smidig service.",
    icon: <Info className="size-5 shrink-0" />,
    url: "/hjalp-och-kontakt/om-oss",
  },
  {
    title: "RUT-avdrag",
    description: "Information om hur RUT-avdraget fungerar och hur du kan använda det vid flytt.",
    icon: <Percent className="size-5 shrink-0" />,
    url: "/hjalp-och-kontakt/rut-avdrag",
  },
  {
    title: "Kontakta oss",
    description: "Kom i kontakt med oss för frågor, offert eller rådgivning.",
    icon: <Mail className="size-5 shrink-0" />,
    url: "/hjalp-och-kontakt/kontakta-oss",
  },
  {
    title: "Tips inför flytt",
    description: "Praktiska tips och råd för att göra din flytt enklare och smidigare.",
    icon: <Lightbulb className="size-5 shrink-0" />,
    url: "/hjalp-och-kontakt/tips-infor-flytt",
  },
];
