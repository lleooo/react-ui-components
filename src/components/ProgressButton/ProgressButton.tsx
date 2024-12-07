type Props = {
  progress: number;
  clickEvent: () => void;
  combo?: number;
};

const ProgressButton = ({progress, clickEvent, combo}: Props) => {
  return (
    <div className="relative w-20">
      <button
        className="progress-btn w-full bg-red-500 px-3 py-2"
        onClick={clickEvent}
      >
        <span className="relative z-10 text-white">按鈕:{combo}</span>
      </button>
      <div
        className="absolute top-0 left-0 h-full bg-slate-600 w-0"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressButton;
