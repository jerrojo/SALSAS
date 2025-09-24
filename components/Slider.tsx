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
        className="h-5 w-full rounded-md"
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
        className="-mt-5 w-full appearance-none bg-transparent accent-red [&::-webkit-slider-runnable-track]:h-5 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-red"
      />
      <div className="mt-2 grid grid-cols-12 text-[11px] font-medium text-gray-700">
        <div className="col-span-2 text-left">{labels?.[1] ?? ""}</div>
        <div className="col-span-8 flex justify-between px-1">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <div className="col-span-2 text-right">{labels?.[10] ?? ""}</div>
      </div>
    </div>
  );
}


