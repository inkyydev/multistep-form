import ButtonPrevNext from "../ButtonPrevNext";

import InsuranceStatus from "./InsuranceStatus";
import SpouseDepentsSubmission from "./SpouseDependentsSubmission";
import InsuranceDetails from "./InsuranceDetails";
import SubmitProof from "./SubmitProof";
import Attestation from "./Attestation";

export default function SpouseDepents({
  step,
  setStep,
  setSteps,
  submissions,
  handleDelete,
  handleEdit,
}) {
  const handleAddSteps = (e) => {
    e.preventDefault();
    setSteps([InsuranceStatus, SpouseDepents, SpouseDepentsSubmission]);
    setStep((prevStep) => prevStep + 1);
  };

  const handleNextSteps = () => {
    setSteps([
      InsuranceStatus,
      SpouseDepents,
      SubmitProof,
      InsuranceDetails,
      Attestation,
    ]);
  };

  return (
    <>
      <div className="form-content-wrapper">
        <h2>Add Spouse & Dependents</h2>
        <h3>Who else is covered by your insurance?</h3>
        <div className="insurance-list-wrapper">
          {submissions.length > 0 ? (
            submissions.map((submission) => (
              <div className="insurance-list-single" key={submission.id}>
                <div className="insurance-text">
                  <p>
                    {submission.firstName} {submission.lastName},{" "}
                    {submission.relationship}
                  </p>
                </div>
                <div className="insurance-handle-person">
                  <button onClick={() => handleDelete(submission.id)}>
                    Delete
                  </button>
                  <button onClick={() => handleEdit(submission)}>Edit</button>
                </div>
              </div>
            ))
          ) : (
            <p>Please Add Dependent</p>
          )}
        </div>
        <a href="#" className="add-person" onClick={handleAddSteps}>
          + Add Spouse or Dependent
        </a>
      </div>
      <ButtonPrevNext
        step={step}
        setStep={setStep}
        nextSteps={handleNextSteps}
      ></ButtonPrevNext>
    </>
  );
}
