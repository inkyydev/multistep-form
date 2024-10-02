import React, { useContext, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { FormContext } from "./FormContext";

import InsuranceStatus from "./components/healt-insurance/InsuranceStatus";
import SpouseDepents from "./components/healt-insurance/SpouseDependents";
import InsuranceDetails from "./components/healt-insurance/InsuranceDetails";
import SubmitProof from "./components/healt-insurance/SubmitProof";
import Attestation from "./components/healt-insurance/Attestation";
import OffMarketplace from "./components/healt-insurance/OffMarketplace";

const validationSchemas = [
  Yup.object({
    insuranceStatus: Yup.string().required("This field is required"),
  }),
  Yup.object({}),
  Yup.object({
    insuranceProof: Yup.string().required("This field is required"),
  }),
  Yup.object({
    insuranceCarrier: Yup.string().required("This field is required"),
    policyId: Yup.string().required("This field is required"),
    monthlyPremium: Yup.string().required("This field is required"),
    policyHolder: Yup.string().required("This field is required"),
  }),
  Yup.object({
    insuranceInformation: Yup.boolean()
      .oneOf([true], "Please check this field to move forward")
      .required("You must confirm the attestation."),
  }),
];

export default function MultistepFormHealth() {
  const [step, setStep] = useState(0);
  const [steps, setSteps] = useState([InsuranceStatus]);
  const [currentValue, setCurrentValue] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [editSubmission, setEditSubmission] = useState(null);

  const addSubmission = (newSubmission) => {
    if (editSubmission) {
      setSubmissions((prevSubmissions) =>
        prevSubmissions.map((submission) =>
          submission.id === newSubmission.id ? newSubmission : submission
        )
      );
      setEditSubmission(null);
    } else {
      setSubmissions((prevSubmmission) => [...prevSubmmission, newSubmission]);
    }
  };

  const handleDelete = (id) => {
    setSubmissions((prevSubmmission) =>
      prevSubmmission.filter((submission) => submission.id !== id)
    );
  };

  const handleEdit = (submission) => {
    setEditSubmission(submission);
    setStep(2);
  };

  const {
    setCurrentStep,
    setHealthValues,
    setCurrentForm,
    setHealthSubmissions,
  } = useContext(FormContext);

  const initialValues = {
    insuranceStatus: "",
    insuranceCarrier: "",
    policyId: "",
    monthlyPremium: "",
    policyHolder: "",
    isuranceCoverage: "Marketplace",
    insuranceProof: "",
    insuranceInformation: "",
  };

  const determinePath = (selectedValue) => {
    setCurrentValue(selectedValue);
    if (selectedValue === "Yes") {
      setSteps([
        InsuranceStatus,
        SpouseDepents,
        SubmitProof,
        InsuranceDetails,
        Attestation,
      ]);
    } else {
      setSteps([InsuranceStatus, OffMarketplace]);
    }
  };

  const handleSubmit = (values) => {
    setHealthValues(values);
    if (step === 0) {
      determinePath(values.insuranceStatus);
      setStep((prevState) => prevState + 1);
    } else if (step < steps.length - 1) {
      setStep((prevState) => prevState + 1);
    } else if (step === steps.length - 1) {
      // console.log("final step submission", values);
      setCurrentStep(0);
      setCurrentForm("reimbursement");
      setHealthSubmissions(submissions);
    }
  };

  useEffect(() => {
    const CurrentComponent = steps[step];

    if (CurrentComponent === InsuranceStatus) {
      setCurrentStep(0);
    } else if (CurrentComponent === SpouseDepents) {
      setCurrentStep(1);
    } else if (CurrentComponent === SubmitProof) {
      setCurrentStep(2);
    }
  }, [step, setCurrentStep, steps]);

  return (
    <div className="health-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas[step]}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty, setFieldValue }) => (
          <Form>
            {React.createElement(steps[step], {
              step,
              setStep,
              steps,
              setSteps,
              currentValue,
              submissions,
              addSubmission,
              handleDelete,
              handleEdit,
              editSubmission,
              setEditSubmission,
            })}
          </Form>
        )}
      </Formik>
    </div>
  );
}
