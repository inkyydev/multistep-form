import ButtonPrevNext from "../ButtonPrevNext";

export default function EmployerReimbursements() {
  return (
    <>
      <div className="form-content-wrapper">
        <div className="reimbursement-wrapper">
          <h2>Employer Reimbursements</h2>
          <h3>
            Your employer has chosen to handle your health expense
            reimbursements directly.
          </h3>
          <h3>Here’s how it works:</h3>
          <ul>
            <li>
              <b>Pay Your Expenses:</b> First, you’ll pay for your eligible
              health expenses upfront.
            </li>
            <li>
              <b>Submit a Claim:</b> After payment, submit your claim through
              Salusion’s platform.
            </li>
            <li>
              <b>Get Reimbursed:</b> Once your claim is approved, Salusion will
              directly deposit the reimbursement into your bank account via ACH.
            </li>
          </ul>
        </div>
      </div>
      <ButtonPrevNext />
    </>
  );
}