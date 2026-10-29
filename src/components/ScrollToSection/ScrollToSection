import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToSection() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (hash) {
        const section = document.getElementById(
          decodeURIComponent(hash.slice(1)),
        );

        if (section) {
          section.scrollIntoView({ behavior: "instant" });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: "instant" });
    });

    return () => cancelAnimationFrame(frameId);
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToSection;
