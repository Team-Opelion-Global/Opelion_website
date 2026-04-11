"use client";

import { Suspense } from "react";
import QuoteForm from "./form";

export default function QuoteRequestPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <QuoteForm />
    </Suspense>
  );
}
