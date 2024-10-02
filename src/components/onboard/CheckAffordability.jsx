import { Field } from "formik";
import ButtonPrevNext from "../ButtonPrevNext";

export default function CheckAffordability({ step, setStep }) {
  return (
    <>
      <div className="form-content-wrapper">
        <h2>Check Affordability</h2>
        <div className="check-aff-wrapper d-flex">
          <div className="form-group d-flex-50">
            <label>
              <span>Please Enter Your Zipcode</span>
              <Field name="zipcode" type="text" placeholder=" 78250" />
            </label>
          </div>
          <div className="form-group d-flex-50">
            <label>
              <span>Please Enter Your Household Income</span>
              <Field name="houseHoldIncome" type="text" placeholder="78250" />
            </label>
          </div>
          <div className="form-group d-flex-50">
            <label>
              <span>An affordable ICHRA is</span>
              <Field name="affordableIchra" type="text" placeholder="78250" />
            </label>
          </div>
          <div className="form-group d-flex-50">
            <label>
              <span>Your self-only ICHRA is</span>
              <Field name="selfOnlyIchra" type="text" placeholder="78250" />
            </label>
          </div>
          <div className="form-group form-group-radio d-flex-50">
            <span>Your ICHRA is</span>
            <label>
              <Field name="yourIchraIs" type="radio" value="Affordable" />
              <span>Affordable</span>
            </label>
            <label>
              <Field name="yourIchraIs" type="radio" value="Unaffordable" />
              <span>Unaffordable</span>
            </label>
          </div>
        </div>
      </div>
      <ButtonPrevNext isHidden={true} step={step} setStep={setStep} />
    </>
  );
}
