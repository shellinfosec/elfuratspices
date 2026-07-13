import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export function ScrollReset() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}
