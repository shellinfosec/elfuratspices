import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export function ScrollReset() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    // Delay slightly to allow the router to complete its transition
    setTimeout(() => {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }, 10);
  }, [pathname]);
  return null;
}
