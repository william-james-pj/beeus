import { useEffect, useState } from "react";
import styles from './progressBar.module.scss';

export const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      setPercentage((scrolled / scrollable) * 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} style={{ width: `${percentage}vw` }} />
  );
};
