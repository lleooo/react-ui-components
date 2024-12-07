import ProgressButton from "../ProgressButton/ProgressButton";
import {useCombo} from "./hooks/useCombo";

const ComboButton = () => {
  const {start, progress, combo} = useCombo();

  return (
    <ProgressButton clickEvent={start} progress={progress} combo={combo} />
  );
};

export default ComboButton;
