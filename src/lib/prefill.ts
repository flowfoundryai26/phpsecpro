"use client";

import { useEffect } from "react";
import type { ServiceRequested } from "@/types";

const EVENT_NAME = "ffs:prefill-service";

export function requestServicePrefill(service: ServiceRequested) {
  window.dispatchEvent(new CustomEvent<ServiceRequested>(EVENT_NAME, { detail: service }));
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function useServicePrefillListener(onPrefill: (service: ServiceRequested) => void) {
  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<ServiceRequested>;
      onPrefill(custom.detail);
    };
    window.addEventListener(EVENT_NAME, handler);
    return () => window.removeEventListener(EVENT_NAME, handler);
  }, [onPrefill]);
}
