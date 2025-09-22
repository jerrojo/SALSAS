"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const sp = useSearchParams();
  const url = sp.get("url") || "https://wa.me/525538994836";
  return (
    <div className="space-y-6 py-12">
      <h1 className="font-display text-3xl">¡Listo!</h1>
      <p>Si WhatsApp no se abrió automáticamente, toca aquí:</p>
      <a className="btn-primary inline-block" href={url} target="_blank" rel="noopener noreferrer">
        Abrir WhatsApp
      </a>
      <p className="text-sm text-gray-600">
        Consejo: Si estás en escritorio sin WhatsApp, copia y pega el enlace.
      </p>
    </div>
  );
}


