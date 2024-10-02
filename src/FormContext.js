import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [currentForm, setCurrentForm] = useState("onboard");
  const [currentStep, setCurrentStep] = useState(0);
  const [onboradValues, setOnboardValues] = useState({});
  const [healthValues, setHealthValues] = useState({});
  const [healthSubmissions, setHealthSubmissions] = useState({});

  return (
    <FormContext.Provider
      value={{
        currentForm,
        setCurrentForm,
        currentStep,
        setCurrentStep,
        onboradValues,
        setOnboardValues,
        healthValues,
        setHealthValues,
        healthSubmissions,
        setHealthSubmissions,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
