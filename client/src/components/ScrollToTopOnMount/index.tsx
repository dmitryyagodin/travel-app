import { useEffect } from "react";

export const ScrollToTopOnMount: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
