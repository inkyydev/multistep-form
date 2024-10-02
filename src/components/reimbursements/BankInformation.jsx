import { Field, ErrorMessage } from "formik";
import ButtonPrevNext from "../ButtonPrevNext";
export default function BankInformation({ step, setStep }) {
  return (
    <>
      <div className="form-content-wrapper">
        <h2>Bank Information</h2>
        <div className="d-flex">
          <div className="form-group d-flex-50">
            <label>
              <span>Add New Bank</span>
              <Field
                type="text"
                name="addNewBank"
                placeholder="Marlborough Savings Bank"
              />
            </label>
            <ErrorMessage
              name="addNewBank"
              component="div"
              className="error-message-fields"
            />
          </div>
          <div className="form-group d-flex-50">
            <label>
              <span>Routing Number</span>
              <Field
                type="number"
                name="routingNumber"
                placeholder="211370752"
              />
            </label>
            <ErrorMessage
              name="routingNumber"
              component="div"
              className="error-message-fields"
            />
          </div>
          <div className="form-group d-flex-50">
            <label>
              <span>Bank Name</span>
              <Field
                type="text"
                name="bankName"
                placeholder="Marlborough Savings Bank"
              />
            </label>
            <ErrorMessage
              name="bankName"
              component="div"
              className="error-message-fields"
            />
          </div>
          <div className="form-group d-flex-50">
            <label>
              <span>Nick Name</span>
              <Field
                type="text"
                name="nickName"
                placeholder="Marlborough Savings Bank"
              />
            </label>
            <ErrorMessage
              name="nickName"
              component="div"
              className="error-message-fields"
            />
          </div>
          <div className="form-group d-flex-50">
            <label>
              <span>Account Type</span>
              <Field type="text" name="accountType" placeholder="Checking" />
            </label>
            <ErrorMessage
              name="accountType"
              component="div"
              className="error-message-fields"
            />
          </div>
          <div className="form-group d-flex-50">
            <label>
              <span>Account Number</span>
              <Field type="text" name="accountNumber" placeholder="123" />
            </label>
            <ErrorMessage
              name="accountNumber"
              component="div"
              className="error-message-fields"
            />
          </div>
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={setStep} />
    </>
  );
}
