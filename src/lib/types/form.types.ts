const topLevelServices = [
  "carry",
  "throw",
  "move",
  "clean",
  "movecompany",
  "packing",
  "piano",
  "transport",
] as const;

const cleaningServices = [
  "big",
  "construction",
  "office",
  "show cleaning",
  "clearence cleaning",
] as const;
const buildings = [
  "house",
  "apartment",
  "villa",
  "office",
  "storage",
  "other",
  "1742801", // special one to exclude
] as const;

export const extraOptions = [
  "cleaningSupplies",
  "storage",
  "furnitureAssembly",
  "packingMaterials",
] as const;

export type Service =
  | (typeof topLevelServices)[number]
  | (typeof cleaningServices)[number];

export type CustomerType = "company" | "private";

export type SpecialFurniture = "unwieldy" | "heavy" | "fragile";
export type SpecialFurnitureCount = { [key in SpecialFurniture]: number };
export type Building = Exclude<(typeof buildings)[number], "1742801">;

export type OfferFormData = {
  customerType?: CustomerType;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  date?: Date;
  service?: Service;
  address1?: string; 
  area1?: number;
  extraArea1?: number; 
  building1?: Building;

  floor1?: string;
  entranceCode1?: string; 
  addressInfo1?: string; 
  entrance1?: string;
  address2?: string; 
  area2?: number;
  extraArea2?: number; 
  building2?: Building; 

  floor2?: string;
  entranceCode2?: string; 
  addressInfo2?: string; 
  entrance2?: string;
  extraServices?: Service[]; 
  extraServicesInfo?: string; 
  specialFurniture: SpecialFurnitureCount; 
  rut?: boolean;
  discountCode?: string;
  extraMoveCleanOptions?: string[]; 
};

export type RenderCondition =
  | {
      services: [Service, ...Service[]];
    }
  | {
      alwaysVisible: true;
    };

export type BuildingOptions = {
  value: Building;
  title: string;
  image: string;
};

export type EntranceOptions = {
  value: string;
  title: string;
  image: string;
};

type ExtraService = {
  value: Service;
  title: string;
  image: string;
};

export type ExtraServiceOptions = {
  [key in Service]?: ExtraService;
};

export type ExtraServicesMap = {
  key: Service[];
  extraServices: Service[];
};
export type ExtraOptionValue = (typeof extraOptions)[number];

export type ExtraMoveCleanOptions = {
  value: ExtraOptionValue
  label: string;
};


export type CompanyOrPrivate = {
  value: CustomerType;
  title: string;
  subtitle: string;
  image?: string;
};

export type FloorOptions = { key: string; value: string };
