import { create } from "zustand";
import { z } from "zod";
import {
  CustomerType,
  OfferFormData,
  SpecialFurnitureCount,
} from "@/lib/types/form.types";
type FormData = OfferFormData;
export type FormDataKey = keyof OfferFormData;
export type FormStore = {
  data: FormData;
  setData: (val: Partial<FormData>) => void;
  page: number;
  pagesCount: number;
  setPagesCount: (c: number) => void;
  nextPage: () => FormDataKey[];
  prevPage: () => void;
  setSpecialFurnitureCount: (data: Partial<SpecialFurnitureCount>) => void;
  mandatoryFields: string[];
  setMandatoryFields: (fields: string[]) => void;
  errors: FormDataKey[];
  thankYou: boolean;
  setThankYou: (val: boolean) => void; // ✅ new

  submitForm: () => void;
  resetForm: () => void;
  submissionLoading: boolean;
};

export const useFormStore = create<FormStore>((set, get) => ({
  data: {
    specialFurniture: {
      unwieldy: 0,
      fragile: 0,
      heavy: 0,
    },
  },
  setData: (updatedData) => {
    let errors = get().errors;
    for (const field of Object.keys(updatedData)) {
      if (errors.includes(field as FormDataKey)) {
        errors = errors.filter((f) => field !== f);
      }
    }
    const prevData = get().data;
    const newData = {
      ...prevData,
      ...sanitizeData(updatedData),
      ...updateRutBasedOnCustomerType(updatedData.customerType),
    };
    set({ data: newData, errors });
  },
  page: 0,
  pagesCount: 1,
  setPagesCount: (c) => set({ pagesCount: c }),
  nextPage: () => {
    const { data, mandatoryFields } = get();
    const errors: FormDataKey[] = [];
    for (const field of mandatoryFields) {
      const value = data[field as FormDataKey];
      if (!isValidValue(field as FormDataKey, value, data))
        errors.push(field as FormDataKey);
    }
    if (errors.length === 0) {
      set((prev) => ({ page: prev.page + 1 }));
    }
    set({ errors });
    return errors;
  },
  prevPage: () => set((prev) => ({ page: prev.page - 1 })),
  setSpecialFurnitureCount: (updatedData) => {
    const prevData = get().data;
    const newData = {
      ...prevData,
      specialFurniture: {
        ...prevData.specialFurniture,
        ...updatedData,
      },
    };
    set({ data: newData });
  },
  mandatoryFields: [],
  setMandatoryFields: (fields) => set({ mandatoryFields: fields }),
  errors: [],
  thankYou: false,
  resetForm: () => {
    set({
      data: {
        specialFurniture: {
          unwieldy: 0,
          fragile: 0,
          heavy: 0,
        },
      },
      page: 0,
      errors: [],
      thankYou: false,
    });
  },
  submitForm: () => {},
  setThankYou: (val) => set({ thankYou: val }), 

  submissionLoading: false,
}));

function updateRutBasedOnCustomerType(customerType?: CustomerType) {
  if (customerType === undefined) return {};
  return { rut: customerType === "private" };
}

function sanitizeData(updatedData: Partial<FormData>) {
  const sanitizeDueToBuilding1: Partial<FormData> =
    "building1" in updatedData &&
    updatedData.building1 &&
    ["house", "storage", "other"].includes(updatedData["building1"])
      ? { floor1: undefined, entranceCode1: undefined }
      : {};
  const sanitizeDueToBuilding2: Partial<FormData> =
    "building2" in updatedData &&
    updatedData.building2 &&
    ["house", "storage", "other"].includes(updatedData["building2"])
      ? { floor2: undefined, entranceCode2: undefined }
      : {};
  return { ...updatedData, ...sanitizeDueToBuilding1, sanitizeDueToBuilding2 };
}

function isValidValue(
  key: FormDataKey,
  value: FormData[FormDataKey] /* (FormData)[keyof FormData] */,
  data: FormData
) {
  if (
    data.service &&
    ["piano", "move", "movecompany", "throw", "carry"].includes(data.service)
  ) {
    if (["floor1", "entrance1"].includes(key)) {
      if (data.building1 !== "apartment" && data.building1 !== "office") {
        return true;
      }
    }

    if (["floor2", "entrance2"].includes(key)) {
      if (data.building2 !== "apartment" && data.building2 !== "office") {
        return true;
      }
    }
  }

  if (value === null || value === undefined) {
    return false;
  }
  if (typeof value === "string" && value.trim() === "") {
    return false;
  }
  return true;
}

async function logLead(data: OfferFormData) {
  try {
    const email = z.string().email().safeParse(data.customerEmail);
    const phone = z.string().min(8).safeParse(data.customerPhone);
    if (!email.success && !phone.success) {
      console.log("Invalid email and phone number");
      return false;
    }

    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
