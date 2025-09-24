"use client";

type Props = {
  value: number | null;
  min?: number;
  max?: number;
  step?: number;
  onChange: (v: number) => void;
  labels?: { [key: number]: string };
  ariaLabel?: string;
};

export default function Slider({
  value,
  onChange,
  min = 1,
  max = 10,
  step = 1,
  labels,
  ariaLabel
}: Props) {
  return (
    <div className="w-full">
      <div
        className="h-3 w-full rounded-full"
        style={{
          background:
            "linear-gradient(90deg, #8bc34a 0%, #ffb74d 30%, #ff7043 60%, #d32f2f 85%, #8A1C16 100%)"
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={typeof value === "number" ? value : (min ?? 1)}
        aria-label={ariaLabel}
        onChange={(e) => onChange(Number(e.target.value))}
        className="heat-slider -mt-6 w-full appearance-none bg-transparent accent-red [&::-webkit-slider-runnable-track]:h-3 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:opacity-0 [&::-webkit-slider-thumb]:h-0 [&::-webkit-slider-thumb]:w-0 [&::-webkit-slider-thumb]:shadow-none [&::-webkit-slider-thumb]:border-0 focus:outline-none"
      />
      <div className="mt-2 select-none">
        <div className="flex justify-between text-[11px] font-medium text-gray-700 px-1">
          {Array.from({ length: 10 }, (_, i) => {
            const n = i + 1;
            const active = typeof value === "number" && n === value;
            return (
              <button
                key={n}
                type="button"
                aria-label={`Nivel ${n}`}
                aria-current={active ? "true" : undefined}
                onClick={() => onChange(n)}
                className={
                  "h-6 w-6 rounded-full flex items-center justify-center transition-colors " +
                  (active
                    ? "bg-red text-white shadow"
                    : "hover:bg-black/5 text-gray-800")
                }
              >
                {n}
              </button>
            );
          })}
        </div>
        <div className="mt-1 flex justify-between text-[12px] text-gray-700">
          <span>{labels?.[1] ?? ""}</span>
          <span>{labels?.[10] ?? ""}</span>
        </div>
      </div>
      <style jsx global>{`
        /* Hide Firefox range thumb (we use numeric markers instead) */
        input.heat-slider::-moz-range-thumb { opacity: 0; border: none; height: 0; width: 0; }
        input.heat-slider::-ms-thumb { opacity: 0; border: none; height: 0; width: 0; }
      `}</style>
    </div>
  );
}


