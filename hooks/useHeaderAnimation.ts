import { useEffect } from "react";
import type { RefObject } from "react";
import gsap from "gsap";

export const useHeaderAnimation = (elRef: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    gsap.fromTo(
      elRef.current,
      {
        y: -100,
        opacity: 0,
        duration: 1,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  }, [elRef]);
};
