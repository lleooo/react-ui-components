import {useEffect, useRef, useState} from "react";

export const useCombo = () => {
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(0);
  const comboCount = useRef(0);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(timerRef.current);
      setProgress(0);
      comboCount.current = 0;
    }
  }, [progress]);

  const start = () => {
    comboCount.current++;
    if (timerRef.current !== 0) {
      clearInterval(timerRef.current);
      setProgress(0);
    }

    timerRef.current = window.setInterval(() => {
      setProgress(pre => pre + 1);
    }, 15);
  };

  return {
    start: start,
    combo: comboCount.current,
    progress: progress,
  };
};
