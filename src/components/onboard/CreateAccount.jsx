import { Field, ErrorMessage, useFormikContext } from "formik";
import { useState } from "react";

export default function CreateAccount() {
  const { handleChange } = useFormikContext();

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    specialChar: false,
    number: false,
    upperCase: false,
  });

  const validatePassword = (password) => {
    const criteria = {
      length: password.length >= 8,
      specialChar: /[@$!%*?&#]/.test(password),
      number: /[0-9]/.test(password),
      upperCase: /[A-Z]/.test(password),
    };
    setPasswordCriteria(criteria);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    handleChange(e);
    validatePassword(password);
  };

  return (
    <>
      <h2>Create Salusion Account</h2>
      <div className="set-password-wrapper">
        <div className="form-group">
          <label htmlFor="password">
            <span>Set Password</span>
            <Field
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={handlePasswordChange}
            />
          </label>

          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
          <button type="submit" className="btn-next">
            Save Changes
          </button>
          <ul className="password-requirements">
            <li
              style={{ color: passwordCriteria.length ? "green" : "#465578" }}
            >
              At least 8 characters long
            </li>
            <li
              style={{
                color: passwordCriteria.specialChar ? "green" : "#465578",
              }}
            >
              At least one special character
            </li>
            <li
              style={{ color: passwordCriteria.number ? "green" : "#465578" }}
            >
              At least one number
            </li>
            <li
              style={{
                color: passwordCriteria.upperCase ? "green" : "#465578",
              }}
            >
              At least one uppercase letter
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
