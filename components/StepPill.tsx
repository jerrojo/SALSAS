"use client";

import React from "react";
import clsx from "clsx";

type Props = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
};

export default function StepPill({ label, selected, onClick, className, ...rest }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx("pill", selected ? "pill-selected" : "pill-unselected", className)}
      aria-pressed={selected}
      {...rest}
    >
      {label}
    </button>
  );
}


