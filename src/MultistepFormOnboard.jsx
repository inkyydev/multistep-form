import React, { useContext, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import IchraElihibility from "./components/onboard/IchraEligibility";
import PtcDiscussion from "./components/onboard/PtcDiscussion";
import CheckAffordability from "./components/onboard/CheckAffordability";
import AcceptDecline from "./components/onboard/AcceptDecline";
import CreateAccount from "./components/onboard/CreateAccount";
import Exit from "./components/onboard/Exit";

import { FormContext } from "./FormContext";

const validationSchemas = [
  Yup.object({
    ichraEligibility: Yup.string().required("This field is required"),
  }),
  Yup.object({}),
  Yup.object({}),
  Yup.object({}),
  Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&#]/,
        "Password must contain at least one special character (@, $, !, %, etc.)"
      )
      .required("Password is required"),
  }),
];

export default function MultistepFormOnboard() {
  const [step, setStep] = useState(0);
  const [steps, setSteps] = useState([IchraElihibility]);
  const [currentValue, setCurrentValue] = useState("Individual coverage");

  const { setCurrentStep, setCurrentForm, setOnboardValues } =
    useContext(FormContext);

  const initialValues = {
    ichraEligibility: "Individual coverage",
    zipcode: "",
    houseHoldIncome: "",
    affordableIchra: "",
    selfOnlyIchra: "",
    yourIchraIs: "Affordable",
    ichraBenefit: "",
    password: "",
  };

  const determinePath = (selectedValue) => {
    setCurrentValue(selectedValue);
    if (selectedValue === "Individual coverage") {
      setSteps([
        IchraElihibility,
        PtcDiscussion,
        CheckAffordability,
        AcceptDecline,
        CreateAccount,
      ]);
    } else if (
      selectedValue === "Group coverage through spouse or parent" ||
      selectedValue === "Other types of insurance" ||
      selectedValue === "I do not plan on being covered during this period"
    ) {
      setSteps([IchraElihibility, Exit]);
    } else if (selectedValue === "Medicare") {
      setSteps([IchraElihibility, AcceptDecline, CreateAccount]);
    }
  };

  const handleSubmit = (values) => {
    if (step === 0) {
      determinePath(values.ichraEligibility);
      setStep((prevState) => prevState + 1);
    } else if (step < steps.length - 1) {
      setStep((prevState) => prevState + 1);
    } else if (step === steps.length - 1) {
      // console.log("final step submission", values);
      setCurrentForm("health");
      setCurrentStep(0);
      setOnboardValues(values);
    }
  };

  useEffect(() => {
    const CurrentComponent = steps[step];
    console.log(CurrentComponent);

    if (
      CurrentComponent === PtcDiscussion ||
      CurrentComponent === AcceptDecline
    ) {
      setCurrentStep(1);
    } else if (CurrentComponent === CreateAccount) {
      setCurrentStep(2);
    } else if (CurrentComponent === IchraElihibility) {
      setCurrentStep(0);
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
              currentValue,
            })}
          </Form>
        )}
      </Formik>
    </>
  );
}
