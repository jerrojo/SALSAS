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
  min = 0,
  max = 10,
  step = 1,
  labels,
  ariaLabel
}: Props) {
  return (
    <div className="w-full">
      <div
        className="h-8 w-full rounded-md"
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
        className="-mt-6 w-full appearance-none bg-transparent accent-red [&::-webkit-slider-runnable-track]:h-8 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-red"
      />
      <div className="mt-2 grid grid-cols-5 text-[11px] font-medium text-white">
        <div className="text-left">{labels?.[min] ?? ""}</div>
        <div className="text-center">{labels ? "" : ""}</div>
        <div className="text-center"></div>
        <div className="text-center"></div>
        <div className="text-right">{labels?.[max] ?? ""}</div>
      </div>
    </div>
  );
}


