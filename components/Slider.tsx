"use client";

type Props = {
  value: number;
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
        className="h-3 w-full rounded-md"
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
        value={value}
        aria-label={ariaLabel}
        onChange={(e) => onChange(Number(e.target.value))}
        className="-mt-7 w-full appearance-none bg-transparent accent-red [&::-webkit-slider-runnable-track]:h-3 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-red"
      />
      <div className="mt-2 select-none">
        <div className="flex justify-between text-[11px] font-medium text-gray-700 px-1">
          {Array.from({ length: 10 }, (_, i) => {
            const n = i + 1;
            const active = n === value;
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
    </div>
  );
}


