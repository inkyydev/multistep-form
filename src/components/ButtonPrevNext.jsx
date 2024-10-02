import React from "react";

export default function ButtonPrevNext({
  step,
  setStep,
  nextSteps,
  backSteps,
  isHidden,
  children,
  nextText,
  backText,
}) {
  return (
    <div className="button-wrapper">
      {step > 0 && (
        <button
          className="btn-back"
          type="button"
          onClick={() => {
            if (backSteps) {
              backSteps();
            } else {
              setStep((prev) => prev - 1);
            }
          }}
        >
          {backText || "Back"}
        </button>
      )}
      {!isHidden && (
        <button type="submit" className="btn-next" onClick={nextSteps}>
          {nextText || "Next"}
        </button>
      )}

      {children}
    </div>
  );
}
