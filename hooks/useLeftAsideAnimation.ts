import { useEffect } from "react";
import type { RefObject } from "react";
import gsap from "gsap";

export const useLeftAsideAnimation = (
  elRef: RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    gsap.fromTo(
      elRef.current,
      {
        x: -100,
        opacity: 0,
        duration: 1,
      },
      {
        x: 0,
        opacity: 1,
      }
    );
  }, [elRef]);
};
