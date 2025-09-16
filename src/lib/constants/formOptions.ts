import {
  BuildingOptions,
  CompanyOrPrivate,
  EntranceOptions,
  ExtraMoveCleanOptions,
  ExtraServiceOptions,
  ExtraServicesMap,
} from "../types/form.types";

export const buildingOptionsMove: BuildingOptions[] = [
  {
    value: "apartment",
    title: "Lägenhet",
    image: "/form/icons/building/apartment.webp",
  },
  {
    value: "house",
    title: "Hus",
    image: "/form/icons/building/house.webp",
  },
  {
    value: "office",
    title: "Kontor",
    image: "/form/icons/building/office.webp",
  },
  {
    value: "storage",
    title: "Magasinering",
    image: "/form/icons/building/storage.webp",
  },
  {
    value: "other",
    title: "Annan",
    image: "/form/icons/building/other.webp",
  },
];

export const buildingOptionsClean: BuildingOptions[] = [
  {
    value: "apartment",
    title: "Lägenhet",
    image: "/form/icons/building/apartment.webp",
  },
  {
    value: "house",
    title: "Hus",
    image: "/form/icons/building/house.webp",
  },
  {
    value: "office",
    title: "Kontor",
    image: "/form/icons/building/office.webp",
  },
  {
    value: "other",
    title: "Annan",
    image: "/form/icons/building/other.webp",
  },
];

export const entranceOptions: EntranceOptions[] = [
  {
    value: "Ingen hiss",
    title: "Ingen hiss",
    image: "/form/icons/elevator/stairs.webp",
  },
  {
    value: "Liten hiss",
    title: "Liten hiss",
    image: "/form/icons/elevator/small-elevator.webp",
  },
  {
    value: "Stor hiss",
    title: "Stor hiss",
    image: "/form/icons/elevator/large-elevator.webp",
  },
];

export const extraServiceOptions: ExtraServiceOptions = {
  move: {
    value: "move",
    title: "Flytthjälp",
    image: "/images/extra-services/moving.webp",
  },
  throw: {
    value: "throw",
    title: "Bortforsling",
    image: "/images/extra-services/removal.webp",
  },
  packing: {
    value: "packing",
    title: "Packhjälp",
    image: "/images/extra-services/all-rooms.webp",
  },
  clean: {
    value: "clean",
    title: "Flyttstädning",
    image: "/images/extra-services/move-cleaning.webp",
  },
  big: {
    value: "big",
    title: "Storstädning",
    image: "/images/extra-services/big-cleaning.webp",
  },
};

export const extraServicesMap: ExtraServicesMap[] = [
  {
    key: ["move", "piano", "movecompany", "transport"],
    extraServices: ["clean", "packing"],
  },
  {
    key: ["clean"],
    extraServices: ["move", "throw"],
  },
  {
    key: ["throw", "carry"],
    extraServices: ["clean", "big"],
  },
  {
    key: ["packing"],
    extraServices: ["clean", "move"],
  },
  {
    key: [
      "big",
      "construction",
      "show cleaning",
      "office",
      "clearence cleaning",
    ],
    extraServices: ["throw", "move"],
  },
];

export const extraMoveCleanOptions: ExtraMoveCleanOptions[] = [
  { value: "cleaningSupplies", label: "Städmaterial inkluderat" },
  { value: "storage", label: "Tillfällig förvaring" },
  { value: "furnitureAssembly", label: "Montering/Demontering av möbler" },
  { value: "packingMaterials", label: "Flyttkartonger och packmaterial" },
];

export const companyOrPrivate: CompanyOrPrivate[] = [
  {
    value: "private",
    title: "Privat",
    subtitle: "Checka in med oss och få en offert inom 24 timmar",
  },
  {
    value: "company",
    title: "Företag",
    subtitle:
      "Skräddarsydd service för ditt företag med en personlig kontaktperson",
  },
];
