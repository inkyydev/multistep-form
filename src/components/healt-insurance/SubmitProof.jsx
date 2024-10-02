import { useState } from "react";
import { ErrorMessage, useFormikContext } from "formik";

import ButtonPrevNext from "../ButtonPrevNext";

export default function SubmitProof({ step, setStep }) {
  const { setFieldValue } = useFormikContext();
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    setFileName(e.currentTarget.files[0].name);

    const file = e.currentTarget.files[0];
    setFieldValue("insuranceProof", file);
  };

  return (
    <>
      <div className="form-content-wrapper">
        <h2>Submit Proof of Insurance</h2>
        <h3>Upload your proof of health insurance</h3>
        <p>
          Please ensure that the dates of insurance coverage are included in
          your proof of health insurance.
        </p>
        <p>
          A monthly bill from your insurance provider, a screenshot of the
          confirmation page from your enrollment, an e-mail confirmation of your
          enrollment, your healthcare.gov (or state exchange) confirmation page,
          or even a screenshot from your health insurance online portal will be
          considered as Proof of Coverage.
        </p>
        <div className="add-document-wrapper">
          <label>
            <input type="file" name="insuranceProof" onChange={handleChange} />
            <span>{fileName ? fileName : "+ Add Document"}</span>
          </label>
          <ErrorMessage
            name="insuranceProof"
            component="div"
            className="error-message-fields"
          />
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={setStep} />
    </>
  );
}
