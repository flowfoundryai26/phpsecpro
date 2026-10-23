"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { requestServicePrefill } from "@/lib/prefill";

export function CtaRequestButton() {
  return (
    <Magnetic strength={0.15}>
      <Button size="lg" onClick={() => requestServicePrefill("security-assessment")}>
        Get Free Security Check
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Magnetic>
  );
}
