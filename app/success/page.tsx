import { Suspense } from "react";
import Link from "next/link";
import SuccessClient from "./success-client";

export default function SuccessES() {
  return (
    <Suspense fallback={<div className="py-12">...</div>}>
      <SuccessClient />
      <div className="mt-6">
        <Link href="/" className="underline">
          Volver
        </Link>
      </div>
    </Suspense>
  );
}


