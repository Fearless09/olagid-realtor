"use client";

import { cn, formatMoney } from "@/utils/utils";
import { useState, useMemo } from "react";
import { FiDollarSign, FiInfo } from "react-icons/fi";

const RANGE = {
  min: 10000000,
  max: 250000000,
  step: 1000000,
};

interface MortgageCalculatorProps {
  initialPrice?: number;
}

export default function MortgageCalculator({
  initialPrice = 75000000,
}: MortgageCalculatorProps) {
  const [propertyPrice, setPropertyPrice] = useState<number>(initialPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30);
  const [tenureMonths, setTenureMonths] = useState<number>(12);
  const [interestRate, setInterestRate] = useState<number>(0); // 0% default for Olagid zero-interest developer spreads!

  const calculations = useMemo(() => {
    const downPayment = (propertyPrice * downPaymentPercent) / 100;
    const loanAmount = propertyPrice - downPayment;

    if (loanAmount <= 0) {
      return {
        downPayment,
        loanAmount: 0,
        monthlyPayment: 0,
        totalPayment: propertyPrice,
        totalInterest: 0,
      };
    }

    if (interestRate === 0) {
      const monthlyPayment = loanAmount / tenureMonths;
      return {
        downPayment,
        loanAmount,
        monthlyPayment,
        totalPayment: propertyPrice,
        totalInterest: 0,
      };
    }

    // Amortization formula for mortgage with interest
    const monthlyRate = interestRate / 100 / 12;
    const monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, tenureMonths))) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    const totalPayment = monthlyPayment * tenureMonths + downPayment;
    const totalInterest = totalPayment - propertyPrice;

    return {
      downPayment,
      loanAmount,
      monthlyPayment,
      totalPayment,
      totalInterest,
    };
  }, [propertyPrice, downPaymentPercent, tenureMonths, interestRate]);

  return (
    <section className="rounded-3xl border border-slate-200/90 bg-white px-4 py-6 shadow-lg sm:p-8">
      <main className="flex flex-col justify-between gap-3 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
        <div>
          <span className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-800 uppercase">
            <FiDollarSign className="text-sm text-amber-500" />
            <span>Investment & Mortgage Planner</span>
          </span>
          <h3 className="mt-1 text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
            Installment Payment Estimator
          </h3>
          <p className="mt-1 text-sm text-balance text-slate-500">
            Simulate outright, developer milestone spread (0% interest), or
            long-term mortgage financing.
          </p>
        </div>

        {/* Zero interest badge */}
        <span className="flex items-center gap-1.5 self-start rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-900 sm:self-auto">
          <span className="size-2 animate-pulse rounded-full bg-emerald-600" />
          <span>0% Interest on Olagid Direct Spreads</span>
        </span>
      </main>

      <section className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Sliders & Inputs */}
        <main className="space-y-6 lg:col-span-7">
          {/* Property Price Input */}
          <div>
            <div className="mb-2 flex items-baseline justify-between">
              <label className="text-xs font-bold tracking-wide text-slate-700 uppercase">
                Property / Land Price
              </label>
              <span className="text-base font-extrabold text-[#064e3b]">
                {formatMoney(propertyPrice)}
              </span>
            </div>
            <input
              type="range"
              min={RANGE.min}
              max={RANGE.max}
              step={RANGE.step}
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="h-2 w-full cursor-pointer rounded-lg bg-slate-200 accent-emerald-700"
            />
            <div className="mt-1 flex justify-between text-[11px] text-slate-400">
              <span>{formatMoney(RANGE.min, "NGN", "compact")}</span>
              <span>{formatMoney(RANGE.max / 2, "NGN", "compact")}</span>
              <span>{formatMoney(RANGE.max, "NGN", "compact")}</span>
            </div>
          </div>

          {/* Down Payment % */}
          <Selects
            title={`Initial Down Payment (${downPaymentPercent}%)`}
            subTitle={formatMoney(calculations.downPayment)}
            options={[
              { label: "20%", value: 20 },
              { label: "30%", value: 30 },
              { label: "40%", value: 40 },
              { label: "50%", value: 50 },
            ]}
            value={downPaymentPercent}
            onChange={(val) => setDownPaymentPercent(val)}
          />

          {/* Payment Tenure */}
          <Selects
            title="Spread Duration"
            subTitle={`${tenureMonths} Months (
                ${
                  tenureMonths / 12 >= 1
                    ? `${tenureMonths / 12} Yrs`
                    : `${tenureMonths} Mo`
                }
                )`}
            options={[
              { label: "6 Mo", value: 6 },
              { label: "12 Mo", value: 12 },
              { label: "18 Mo", value: 18 },
              { label: "24 Mo", value: 24 },
            ]}
            value={tenureMonths}
            onChange={(val) => setTenureMonths(val)}
          />

          {/* Interest Option Toggle */}
          <Selects
            title="Financing Mode"
            subTitle={`${
              interestRate === 0
                ? "Olagid Developer Direct (0%)"
                : `${interestRate}% Commercial Bank Mortgage`
            }`}
            options={[
              { label: "0% Direct Developer Spread", value: 0 },
              { label: "16% Bank Mortgage Rate", value: 16 },
            ]}
            value={interestRate}
            onChange={(val) => setInterestRate(val)}
            variant="secondary"
          />
        </main>

        {/* Results Card */}
        <main className="flex flex-col justify-between rounded-2xl bg-linear-to-br from-[#022c22] via-[#064e3b] to-[#047857] p-6 text-white shadow-xl lg:col-span-5">
          <div>
            <span className="text-xs font-bold tracking-wider text-amber-300 uppercase">
              Estimated Monthly Outlay
            </span>
            <div className="mt-1 mb-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
              {formatMoney(calculations.monthlyPayment)}
              <span className="ml-1 text-xs font-normal text-emerald-200">
                / month
              </span>
            </div>

            <hr className="my-5 border-emerald-700/50" />

            <ul className="space-y-3 text-xs sm:text-sm">
              <Summary
                label={`Down Payment (${downPaymentPercent}%)`}
                value={formatMoney(calculations.downPayment)}
              />
              <Summary
                label={`Financed Balance`}
                value={formatMoney(calculations.loanAmount)}
              />
              <Summary
                label={`Spread Tenure`}
                value={`${tenureMonths} Months`}
              />

              {calculations.totalInterest > 0 && (
                <Summary
                  label={`Interest Cost`}
                  value={formatMoney(calculations.totalInterest)}
                  coloered
                />
              )}
            </ul>
          </div>

          <div className="mt-6 mb-2 flex items-start gap-2 border-t border-emerald-700/50 pt-3 text-[11px] text-emerald-200/80">
            <FiInfo className="mt-0.5 shrink-0 text-sm text-amber-400" />
            <span>
              Calculations are indicative. Olagid Realtors customizes payment
              milestones to fit your income flow.
            </span>
          </div>
        </main>
      </section>
    </section>
  );
}

type SummaryProp = { label: string; value: string; coloered?: boolean };
const Summary = ({ label, value, coloered = false }: SummaryProp) => {
  return (
    <li
      className={cn("flex justify-between font-medium text-emerald-100/90", {
        "text-amber-300": coloered,
      })}
    >
      <span>{label}:</span>
      <span
        className={cn("font-bold text-white", { "text-amber-300": coloered })}
      >
        {value}
      </span>
    </li>
  );
};

type SelectsProps = {
  title: string;
  subTitle: string;
  options: { label: string; value: number }[];
  value: number;
  onChange: (value: number) => void;
  variant?: "primary" | "secondary";
};
const Selects = ({
  onChange,
  options,
  subTitle,
  title,
  value,
  variant = "primary",
}: SelectsProps) => {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label className="text-xs font-bold tracking-wide text-slate-700 uppercase">
          {title}
        </label>
        <span
          className={cn("text-sm font-bold text-slate-800", {
            "text-xs font-medium text-slate-500": variant === "secondary",
          })}
        >
          {subTitle}
        </span>
      </div>

      <div
        className={cn("grid grid-cols-4 gap-2", {
          "grid-cols-2": variant === "secondary",
        })}
      >
        {options.map((opt, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onChange(opt.value)}
            className={cn(
              `transition-300 cursor-pointer rounded-xl py-2 text-xs font-bold`,
              {
                "bg-slate-100 text-slate-600 hover:bg-slate-200":
                  variant === "primary",
                "bg-emerald-800 text-white shadow-xs hover:bg-emerald-700":
                  variant === "primary" && value === opt.value,

                "border border-slate-200 bg-slate-50 font-semibold text-slate-600":
                  variant === "secondary",
                "border-emerald-700 bg-emerald-50 font-bold text-emerald-950":
                  variant === "secondary" && value === opt.value,
              },
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};
