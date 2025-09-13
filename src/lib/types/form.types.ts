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
  address1?: string; // rajorshi will handle
  area1?: number;
  extraArea1?: number; // ask junior about the field
  building1?: Building; // add // done

  floor1?: string;
  entranceCode1?: string; // exists for movecleaning // change for all services
  addressInfo1?: string; // combine with all info, paste in description
  entrance1?: string;
  address2?: string; // rajorshi will handle
  area2?: number;
  extraArea2?: number; // ask junior about the field
  building2?: Building; // add // done

  floor2?: string;
  entranceCode2?: string; // does not exist // added
  addressInfo2?: string; // combine with all info, paste in description
  entrance2?: string;
  extraServices?: Service[]; // does not exist ?? paste in description
  extraServicesInfo?: string; // combine with all info, paste in description
  specialFurniture: SpecialFurnitureCount; // combine with all info, paste in description
  rut?: boolean;
  discountCode?: string;
  extraMoveCleanOptions?: string[]; // exists, match values in db to values in form
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
  image: string;
};

