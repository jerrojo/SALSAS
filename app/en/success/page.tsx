import { Suspense } from "react";
import Link from "next/link";
import SuccessClient from "./success-client";

export default function SuccessEN() {
  return (
    <Suspense fallback={<div className="py-12">...</div>}>
      <SuccessClient />
      <div className="mt-6">
        <Link href="/en" className="underline">
          Back
        </Link>
      </div>
    </Suspense>
  );
}


