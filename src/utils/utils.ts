import { PropertyCategory } from "@/data/properties";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getBadge = (badge: PropertyCategory) => {
  switch (badge) {
    case "sale":
      return { bg: "bg-emerald-700", name: "For Sale" };
    case "rent":
      return { bg: "bg-blue-600", name: "For Rent" };
    case "land":
      return { bg: "bg-amber-600", name: "Land Plot" };
    case "off-plan":
      return { bg: "bg-purple-600", name: "Off-Plan" };
    default:
      return { bg: "bg-slate-900", name: badge };
  }
};

export const formatMoney = (
  value: number,
  currency: string = "NGN",
  notation: "standard" | "scientific" | "engineering" | "compact" = "standard",
) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    notation,
  }).format(value);
};
