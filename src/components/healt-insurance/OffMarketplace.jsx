import ButtonPrevNext from "../ButtonPrevNext";

export default function OffMarketplace({ step, setStep }) {
  return (
    <>
      <div className="form-content-wrapper">
        <h2>Off Marketplace</h2>
        <h3>We recommend getting your insurance from off the marketplace.</h3>
        <div className="off-wrapper-all">
          <h3>Off-Marketplace Broker</h3>
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={setStep} isHidden={true} />
    </>
  );
}
