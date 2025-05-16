"use client";

import { useWindowSize } from "@/app/hooks/useWindowSize";

export function ResponsivityMsg() {
  const { width } = useWindowSize();

  if (width < 500) {
    return (
      <span style={{ color: "red", fontSize: "14px" }}>
        Responsividade em construção
      </span>
    );
  }

  return null;
}
