import React, { useContext, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { FormContext } from "./FormContext";

import BankInformation from "./components/reimbursements/BankInformation";
import ChoiceBetweenAchCheck from "./components/reimbursements/ChoiceBetweenAchCheck";
import PayrollAttestation from "./components/reimbursements/PayrollAttestation";
import FirstPaymentDate from "./components/reimbursements/FirstPaymentDate";
import DirectPayment from "./components/reimbursements/DirectPayment";
import DirectPaymentInstructions from "./components/reimbursements/DirectPaymentInstructions";
import FinalDataCheck from "./components/reimbursements/FinalDataCheck";

export default function MultistepFormReimbursement() {
  const [step, setStep] = useState(0);
  const [steps, setSteps] = useState([ChoiceBetweenAchCheck]);
  const [validationSchemas, setValidationSchemas] = useState([Yup.object({})]); // Dynamically change this based on path
  const [tableStep, setTableStep] = useState(false);

  const { setCurrentStep } = useContext(FormContext);

  const initialValues = {
    paymentOption: "ACH Reimbursement",
    payrollTerms: "",
    startPaying: "",
    insuranceInformation: "",
    addNewBank: "",
    routingNumber: "",
    bankName: "",
    nickName: "",
    accountType: "",
    accountNumber: "",
    sendToName: "",
    sendToAddress: "",
    city: "",
    state: "",
    zip: "",
  };

  const achValidationSchema = [
    Yup.object({}),
    Yup.object({
      addNewBank: Yup.string().required("This field is required"),
      routingNumber: Yup.string().required("This field is required"),
      bankName: Yup.string().required("This field is required"),
      nickName: Yup.string().required("This field is required"),
      accountType: Yup.string().required("This field is required"),
      accountNumber: Yup.string().required("This field is required"),
    }),
    Yup.object({
      insuranceInformation: Yup.boolean()
        .oneOf([true], "Please check this field to move forward")
        .required("You must confirm the attestation."),
    }),
  ];

  const directPaymentValidationSchema = [
    Yup.object({}),
    Yup.object({
      payrollTerms: Yup.boolean()
        .oneOf([true], "Please check this field to move forward")
        .required("This field is required."),
    }),
    Yup.object({}),
    Yup.object({}),
    Yup.object({
      sendToName: Yup.string().required("This field is required"),
      sendToAddress: Yup.string().required("This field is required"),
      city: Yup.string().required("This field is required"),
      state: Yup.string().required("This field is required"),
      zip: Yup.string().required("This field is required"),
    }),
    Yup.object({
      insuranceInformation: Yup.boolean()
        .oneOf([true], "Please check this field to move forward")
        .required("You must confirm the attestation."),
    }),
  ];

  const determinePath = (selectedValue) => {
    if (selectedValue === "ACH Reimbursement") {
      setSteps([ChoiceBetweenAchCheck, BankInformation, FinalDataCheck]);
      setValidationSchemas(achValidationSchema);
      setStep(1);
      setTableStep(true);
    } else {
      setSteps([
        ChoiceBetweenAchCheck,
        PayrollAttestation,
        FirstPaymentDate,
        DirectPayment,
        DirectPaymentInstructions,
        FinalDataCheck,
      ]);
      setValidationSchemas(directPaymentValidationSchema);
      setTableStep(false);
    }
  };

  const handleSubmit = (values) => {
    if (step === 0) {
      setStep((prevState) => prevState + 1);
      determinePath(values.paymentOption);
    } else if (step < steps.length - 1) {
      setStep((prevState) => prevState + 1);
    } else if (step === steps.length - 1) {
      console.log("final step submission", values);
    }
  };

  useEffect(() => {
    const CurrentComponent = steps[step];

    if (
      CurrentComponent === ChoiceBetweenAchCheck ||
      CurrentComponent === PayrollAttestation
    ) {
      setCurrentStep(0);
    } else if (CurrentComponent === FirstPaymentDate) {
      setCurrentStep(1);
    }
  }, [step, setCurrentStep, steps]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas[step]}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form>
            {React.createElement(steps[step], {
              step,
              setStep,
              steps,
              setSteps,
              tableStep,
            })}
          </Form>
        )}
      </Formik>
    </>
  );
}
