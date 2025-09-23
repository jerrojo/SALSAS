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
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={ariaLabel}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-red [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red"
      />
      <div className="mt-2 flex items-center justify-between text-xs text-gray-600">
        <span>{labels?.[min] ?? ""}</span>
        <span className="font-medium text-charcoal">{value}</span>
        <span>{labels?.[max] ?? ""}</span>
      </div>
    </div>
  );
}


