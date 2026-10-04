"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  Home,
  Info,
  RotateCcw,
  Sun,
  Zap,
} from "lucide-react";

type Option<T extends string | number> = {
  label: string;
  detail: string;
  value: T;
};

const usageOptions: Option<number>[] = [
  { label: "Low use", detail: "Around 2,200 kWh a year", value: 2200 },
  { label: "Typical home", detail: "Around 3,200 kWh a year", value: 3200 },
  { label: "High use", detail: "Around 4,500 kWh a year", value: 4500 },
  { label: "Not sure", detail: "Use a cautious typical estimate", value: 2900 },
];

const roofOptions: Option<number>[] = [
  { label: "Small", detail: "About 6 panels", value: 6 },
  { label: "Medium", detail: "About 10 panels", value: 10 },
  { label: "Large", detail: "About 14 panels", value: 14 },
  { label: "Not sure", detail: "Start with 10 panels", value: 10 },
];

const directionOptions: Option<"south" | "south-east-west" | "east-west" | "unknown">[] = [
  { label: "South", detail: "Best starting assumption", value: "south" },
  { label: "SE or SW", detail: "Usually close to south-facing", value: "south-east-west" },
  { label: "East or West", detail: "More morning or evening output", value: "east-west" },
  { label: "Not sure", detail: "We will use a cautious estimate", value: "unknown" },
];

const daytimeOptions: Option<"low" | "medium" | "high">[] = [
  { label: "Low", detail: "Usually out during the day", value: "low" },
  { label: "Medium", detail: "Some daytime electricity use", value: "medium" },
  { label: "High", detail: "Home working, EV or regular daytime use", value: "high" },
];

const orientationFactor = {
  south: 1,
  "south-east-west": 0.92,
  "east-west": 0.82,
  unknown: 0.87,
};

const daytimeFactor = {
  low: 0.3,
  medium: 0.45,
  high: 0.6,
};

function OptionButton<T extends string | number>({
  option,
  selected,
  onSelect,
}: {
  option: Option<T>;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={`min-h-24 border-2 p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-2 ${
        selected
          ? "border-[#f97316] bg-orange-50"
          : "border-gray-200 bg-white hover:border-orange-300"
      }`}
    >
      <span className="flex items-start justify-between gap-3">
        <span>
          <span className="block font-black text-[#1a1a1a]">{option.label}</span>
          <span className="mt-1 block text-xs leading-relaxed text-gray-500">
            {option.detail}
          </span>
        </span>
        <span
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            selected ? "border-[#f97316] bg-[#f97316] text-white" : "border-gray-300"
          }`}
          aria-hidden="true"
        >
          {selected && <Check className="h-3.5 w-3.5" />}
        </span>
      </span>
    </button>
  );
}

export default function SolarSavingsEstimator({ cityName }: { cityName?: string }) {
  const [step, setStep] = useState(0);
  const [annualUsage, setAnnualUsage] = useState<number | null>(null);
  const [roofChoice, setRoofChoice] = useState<string | null>(null);
  const [panelCount, setPanelCount] = useState<number | null>(null);
  const [direction, setDirection] = useState<keyof typeof orientationFactor | null>(null);
  const [daytimeUse, setDaytimeUse] = useState<keyof typeof daytimeFactor>("medium");
  const [includeBattery, setIncludeBattery] = useState(false);
  const [importRate, setImportRate] = useState(25);
  const [exportRate, setExportRate] = useState(8);

  const estimate = useMemo(() => {
    if (!annualUsage || !panelCount || !direction) return null;

    const systemSize = panelCount * 0.44;
    const annualGeneration = systemSize * 875 * orientationFactor[direction];
    const directUseFactor = includeBattery
      ? Math.min(0.8, daytimeFactor[daytimeUse] + 0.3)
      : daytimeFactor[daytimeUse];
    const selfUsed = Math.min(annualUsage, annualGeneration * directUseFactor);
    const exported = Math.max(0, annualGeneration - selfUsed);
    const annualValue = selfUsed * (Math.max(0, importRate) / 100) + exported * (Math.max(0, exportRate) / 100);

    return {
      systemSize,
      annualGeneration,
      selfUsed,
      exported,
      low: Math.round((annualValue * 0.85) / 10) * 10,
      high: Math.round((annualValue * 1.15) / 10) * 10,
    };
  }, [annualUsage, panelCount, direction, daytimeUse, includeBattery, importRate, exportRate]);

  const canContinue =
    (step === 0 && annualUsage !== null) ||
    (step === 1 && panelCount !== null && direction !== null) ||
    step === 2;

  function reset() {
    setStep(0);
    setAnnualUsage(null);
    setRoofChoice(null);
    setPanelCount(null);
    setDirection(null);
    setDaytimeUse("medium");
    setIncludeBattery(false);
    setImportRate(25);
    setExportRate(8);
  }

  return (
    <section id="solar-estimator" className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#f97316]">
            Quick solar estimate
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a] md:text-4xl">
            What could solar be worth to you?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
            Answer three short questions for an indicative annual range{cityName ? ` for a ${cityName} home` : ""}.
            No contact details are required.
          </p>
        </div>

        <div className="overflow-hidden border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 bg-[#1a1a1a] px-5 py-4 text-white sm:px-8">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                {step < 3 ? `Step ${step + 1} of 3` : "Your estimate"}
              </span>
              <div className="flex gap-2" aria-label={`Estimator progress: ${Math.min(step + 1, 3)} of 3`}>
                {[0, 1, 2].map((item) => (
                  <span
                    key={item}
                    className={`h-2 w-8 ${item <= step ? "bg-[#f97316]" : "bg-white/20"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-8 md:p-10">
            {step === 0 && (
              <div>
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-orange-100 text-[#f97316]">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#1a1a1a]">How much electricity do you use?</h3>
                    <p className="mt-1 text-sm text-gray-500">Your annual figure is normally shown on an electricity bill.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {usageOptions.map((option) => (
                    <OptionButton
                      key={`${option.label}-${option.value}`}
                      option={option}
                      selected={annualUsage === option.value}
                      onSelect={() => setAnnualUsage(option.value)}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-orange-100 text-[#f97316]">
                    <Home className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#1a1a1a]">Tell us about the roof</h3>
                    <p className="mt-1 text-sm text-gray-500">Choose the closest answers. A survey would confirm both.</p>
                  </div>
                </div>

                <p className="mb-3 text-xs font-black uppercase tracking-widest text-gray-500">Usable roof space</p>
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {roofOptions.map((option) => (
                    <OptionButton
                      key={`${option.label}-${option.detail}`}
                      option={option}
                      selected={roofChoice === option.label}
                      onSelect={() => {
                        setRoofChoice(option.label);
                        setPanelCount(option.value);
                      }}
                    />
                  ))}
                </div>

                <p className="mb-3 mt-7 text-xs font-black uppercase tracking-widest text-gray-500">Main roof direction</p>
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {directionOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      option={option}
                      selected={direction === option.value}
                      onSelect={() => setDirection(option.value)}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-orange-100 text-[#f97316]">
                    <Sun className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#1a1a1a]">When do you use electricity?</h3>
                    <p className="mt-1 text-sm text-gray-500">Using more solar at home normally makes each generated unit more valuable.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {daytimeOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      option={option}
                      selected={daytimeUse === option.value}
                      onSelect={() => setDaytimeUse(option.value)}
                    />
                  ))}
                </div>

                <p className="mb-3 mt-7 text-xs font-black uppercase tracking-widest text-gray-500">Include battery storage?</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    aria-pressed={!includeBattery}
                    onClick={() => setIncludeBattery(false)}
                    className={`min-h-20 border-2 p-4 text-left font-black ${!includeBattery ? "border-[#f97316] bg-orange-50" : "border-gray-200"}`}
                  >
                    No battery
                    <span className="mt-1 block text-xs font-normal text-gray-500">Use solar as it is generated</span>
                  </button>
                  <button
                    type="button"
                    aria-pressed={includeBattery}
                    onClick={() => setIncludeBattery(true)}
                    className={`min-h-20 border-2 p-4 text-left font-black ${includeBattery ? "border-[#f97316] bg-orange-50" : "border-gray-200"}`}
                  >
                    Add battery
                    <span className="mt-1 block text-xs font-normal text-gray-500">Store more for later use</span>
                  </button>
                </div>
              </div>
            )}

            {step === 3 && estimate && (
              <div aria-live="polite">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Check className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f97316]">Indicative annual value</p>
                    <p className="mt-2 text-4xl font-black tracking-tight text-[#1a1a1a] sm:text-5xl">
                      £{estimate.low.toLocaleString()}–£{estimate.high.toLocaleString()}
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
                      This combines estimated grid electricity avoided and export income. It is a starting range, not a quote or guaranteed saving.
                    </p>

                    <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      <div className="bg-gray-50 p-4">
                        <p className="text-xl font-black text-[#1a1a1a]">{estimate.systemSize.toFixed(1)} kWp</p>
                        <p className="mt-1 text-xs text-gray-500">Illustrative system</p>
                      </div>
                      <div className="bg-gray-50 p-4">
                        <p className="text-xl font-black text-[#1a1a1a]">{Math.round(estimate.annualGeneration / 100) * 100} kWh</p>
                        <p className="mt-1 text-xs text-gray-500">Modelled generation</p>
                      </div>
                      <div className="col-span-2 bg-gray-50 p-4 sm:col-span-1">
                        <p className="text-xl font-black text-[#1a1a1a]">{Math.round(estimate.selfUsed / 100) * 100} kWh</p>
                        <p className="mt-1 text-xs text-gray-500">Used at the property</p>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/quote"
                        className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#f97316] px-6 py-3 font-black uppercase tracking-wider text-white transition-colors hover:bg-[#e8650f]"
                      >
                        Get a tailored survey <ArrowRight className="h-4 w-4" />
                      </Link>
                      <button
                        type="button"
                        onClick={reset}
                        className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-gray-200 px-6 py-3 font-bold text-gray-700 hover:border-[#f97316]"
                      >
                        <RotateCcw className="h-4 w-4" /> Start again
                      </button>
                    </div>
                  </div>

                  <div className="border border-gray-200 bg-gray-50 p-5">
                    <div className="mb-4 flex items-center gap-2">
                      <Info className="h-4 w-4 text-[#f97316]" />
                      <h3 className="font-black text-[#1a1a1a]">Adjust the tariff assumptions</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="text-xs font-bold text-gray-600">
                        Import rate
                        <span className="mt-1 flex items-center border border-gray-200 bg-white px-3">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={importRate}
                            onChange={(event) => setImportRate(Number(event.target.value))}
                            className="min-w-0 flex-1 py-3 text-base font-black text-[#1a1a1a] outline-none"
                          />
                          <span>p/kWh</span>
                        </span>
                      </label>
                      <label className="text-xs font-bold text-gray-600">
                        Export rate
                        <span className="mt-1 flex items-center border border-gray-200 bg-white px-3">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={exportRate}
                            onChange={(event) => setExportRate(Number(event.target.value))}
                            className="min-w-0 flex-1 py-3 text-base font-black text-[#1a1a1a] outline-none"
                          />
                          <span>p/kWh</span>
                        </span>
                      </label>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-gray-500">
                      Model uses 440 W panels and an indicative South West yield adjusted for roof direction. It excludes shading survey results, degradation, finance, maintenance, replacement costs and battery purchase price.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step < 3 && (
              <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
                <button
                  type="button"
                  onClick={() => setStep((current) => Math.max(0, current - 1))}
                  disabled={step === 0}
                  className="inline-flex min-h-11 items-center gap-2 px-2 font-bold text-gray-500 disabled:invisible"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => canContinue && setStep((current) => Math.min(3, current + 1))}
                  disabled={!canContinue}
                  className="inline-flex min-h-12 items-center gap-2 bg-[#f97316] px-6 py-3 font-black uppercase tracking-wider text-white transition-colors hover:bg-[#e8650f] disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  {step === 2 ? "Show my estimate" : "Continue"} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-relaxed text-gray-500">
          This estimator is an illustrative guide, not financial advice. A site survey and written design are required before making a purchasing decision.
        </p>
      </div>
    </section>
  );
}
