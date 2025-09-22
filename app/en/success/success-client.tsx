"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const sp = useSearchParams();
  const url = sp.get("url") || "https://wa.me/525538994836";
  return (
    <div className="space-y-6 py-12">
      <h1 className="font-display text-3xl">All set!</h1>
      <p>If WhatsApp didn’t open automatically, tap here:</p>
      <a className="btn-primary inline-block" href={url} target="_blank" rel="noopener noreferrer">
        Open WhatsApp
      </a>
      <p className="text-sm text-gray-600">
        Tip: On desktop without WhatsApp, copy and paste the link.
      </p>
    </div>
  );
}


