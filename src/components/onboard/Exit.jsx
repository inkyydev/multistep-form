import ButtonPrevNext from "../ButtonPrevNext";

export default function Exit({ step, setStep }) {
  return (
    <>
      <div className="form-content-wrapper">
        <h2>Exit</h2>
        <div className="exit-wrapper">
          <p>
            To participate in your company’s ICHRA, you must be insured by
            either
          </p>
          <div className="list-wrapper">
            <ul>
              <li>Individual coverage health insurance</li>
              <li>Medicare</li>
            </ul>
          </div>
          <p>
            If your circumstance changes and you want to participate, use the
            link in the onboarding email or ask your employer to reinvite you.
          </p>
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={setStep} isHidden={true} />
    </>
  );
}
