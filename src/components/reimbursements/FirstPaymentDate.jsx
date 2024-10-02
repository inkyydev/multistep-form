import { Field } from "formik";
import ButtonPrevNext from "../ButtonPrevNext";

export default function FirstPaymentDate({ step, setStep }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septembar",
    "Ocotber",
    "November",
    "December",
  ];
  const currentYear = "2025";

  return (
    <>
      <div className="form-content-wrapper">
        <h2>Employer First Payment Date</h2>
        <div className="first-payment-date-wrapper">
          <p>Select the first coverage month when.</p>
          <h4>
            Select the first coverage month when your employer will start paying
            your insurance premium
          </h4>
          <p>Employer to start paying premiums on:</p>
          <div className="form-group">
            <Field as="select" name="startPaying">
              {months.map((currMonth, index) => (
                <option value={currMonth} key={index}>
                  {currMonth} {currentYear}
                </option>
              ))}
            </Field>
          </div>
        </div>
      </div>
      <ButtonPrevNext step={step} setStep={setStep} />
    </>
  );
}
