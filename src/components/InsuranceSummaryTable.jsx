import { useContext } from "react";

import { FormContext } from "../FormContext";

export default function InsuranceSummaryTable({ setSubmissions }) {
  const { onboradValues, healthValues } = useContext(FormContext);

  return (
    <>
      <table className="table-form-all">
        <tbody>
          <tr>
            <td>Type of Insurance</td>
            <td>{onboradValues.ichraEligibility}</td>
          </tr>
          <tr>
            <td>Policy Holder</td>
            <td>{healthValues.policyHolder}</td>
          </tr>
          {setSubmissions.map((submission) => (
            <tr key={submission.id}>
              <td>Covered Individuals</td>
              <td>
                {submission.firstName} {submission.lastName},{" "}
                {submission.relationship}
              </td>
            </tr>
          ))}
          <tr>
            <td>Insurance Coverage Period</td>
            <td>January 2025 - December 2025</td>
          </tr>
          <tr>
            <td>Insurance Documents</td>
            <td>{healthValues.insuranceProof.name}</td>
          </tr>
          <tr>
            <td>Insurance Carrier</td>
            <td>{healthValues.insuranceCarrier}</td>
          </tr>
          <tr>
            <td>Policy ID</td>
            <td>{healthValues.policyId}</td>
          </tr>
          <tr>
            <td>Monthly Premium</td>
            <td>${healthValues.monthlyPremium}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
