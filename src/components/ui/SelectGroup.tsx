import { cn } from "@/utils/utils";
import React, { ComponentProps, FC, ReactNode } from "react";

type SelectGroupProps = FC<
  Omit<ComponentProps<"select">, "size"> & {
    label: string;
    Icon?: FC<ComponentProps<"svg">>;
    options: ReactNode;
    size?: "sm" | "md";
  }
>;
const SelectGroup: SelectGroupProps = ({
  label,
  Icon,
  className,
  options,
  size = "md",
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className={cn(
          "mb-1.5 flex items-center gap-1 text-[11px] font-bold tracking-wider text-slate-500 uppercase",
          { "mb-1 text-[10px]": size == "sm" },
        )}
      >
        {!!Icon && <Icon className="text-emerald-700" />}
        <span>{label}</span>
      </label>

      <select
        className={cn(
          "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-800 outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm",
          { "rounded-lg px-2.5 py-2 text-[10px]": size === "sm" },
          className,
        )}
        {...props}
      >
        {options}
      </select>
    </div>
  );
};

export default SelectGroup;
