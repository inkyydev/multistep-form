import { Field, ErrorMessage } from "formik";
import ButtonPrevNext from "../ButtonPrevNext";

import usaImg from "../../assets/usa-img.svg";

export default function DirectPaymentInstructions({ step, setStep }) {
  return (
    <>
      <div className="form-content-wrapper">
        <div className="payment-instructions-continued">
          <div className="heading-payment-wrapper">
            <h2>
              Direct Payment <br /> Instructions (continued)
            </h2>
            <img src={usaImg} alt="usa" />
          </div>
          <div className="instructions-wrapper d-flex">
            <div className="d-flex-100 form-group">
              <Field type="text" placeholder="Send To Name" name="sendToName" />
              <ErrorMessage
                name="sendToName"
                component="div"
                className="error-message-fields"
              />
            </div>
            <div className="d-flex-100 form-group">
              <Field
                type="text"
                placeholder="Send To Address"
                name="sendToAddress"
              />
              <ErrorMessage
                name="sendToAddress"
                component="div"
                className="error-message-fields"
              />
            </div>
            <div className="d-flex-33 form-group">
              <Field type="text" placeholder="City" name="city" />
              <ErrorMessage
                name="city"
                component="div"
                className="error-message-fields"
              />
            </div>
            <div className="d-flex-33 form-group">
              <Field type="text" placeholder="State" name="state" />
              <ErrorMessage
                name="state"
                component="div"
                className="error-message-fields"
              />
            </div>
            <div className="d-flex-33 form-group">
              <Field type="number" placeholder="Zip" name="zip" />
              <ErrorMessage
                name="zip"
                component="div"
                className="error-message-fields"
              />
            </div>
          </div>
          <p>
            Please verify that the information on the payment envelope is
            correct and meets the specification of your carrier.
          </p>
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={setStep} />
    </>
  );
}
