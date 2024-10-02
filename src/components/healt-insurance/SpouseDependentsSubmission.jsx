import { Field } from "formik";
import { useEffect, useState } from "react";

export default function SpouseDepentsSubmission({
  setStep,
  addSubmission,
  editSubmission,
  setEditSubmission,
}) {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    relationship: "Spouse",
    dateOfBirth: "",
    gender: "man",
    streetAddress: "",
    apt: "",
    city: "",
    state: "",
    zipCode: "",
  });

  useEffect(() => {
    if (editSubmission) {
      setFormValues(editSubmission);
    }
  }, [editSubmission]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSubmision = {
      id: editSubmission ? editSubmission.id : Date.now(),
      ...formValues,
    };

    addSubmission(newSubmision);

    setFormValues({
      firstName: "",
      lastName: "",
      relationship: "spouse",
      dateOfBirth: "",
      gender: "man",
      streetAddress: "",
      apt: "",
      city: "",
      state: "",
      zipCode: "",
    });

    setStep(1);
  };

  const handleBack = (e) => {
    e.preventDefault();

    setStep(1);
    setEditSubmission(null);
  };

  return (
    <>
      <h2>Spouse & Dependent Submission</h2>
      <div className="d-flex">
        <div className="form-group d-flex-50">
          <label htmlFor="">
            <span>First Name</span>
            <Field
              type="text"
              name="firstName"
              placeholder="Katherine"
              onChange={handleChange}
              value={formValues.firstName}
            />
          </label>
        </div>
        <div className="form-group d-flex-50">
          <label>
            <span>Last Name</span>
            <Field
              type="text"
              name="lastName"
              placeholder="Grettum"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group d-flex-50">
          <label>
            <span>Relationship</span>
            <Field
              as="select"
              name="relationship"
              onChange={handleChange}
              value={formValues.relationship}
            >
              <option value="spouse">Spouse</option>
              <option value="dependent">Dependent</option>
            </Field>
          </label>
        </div>
        <div className="form-group d-flex-50">
          <label>
            <span>Date of Birth</span>
            <Field
              type="date"
              name="dateOfBirth"
              placeholder="01/21/2018"
              onChange={handleChange}
              value={formValues.dateOfBirth}
            />
          </label>
        </div>
        <div className="form-group d-flex-50">
          <label>
            <span>Gender</span>
            <Field
              as="select"
              name="gender"
              value={formValues.gender}
              onChange={handleChange}
            >
              <option value="man">Man</option>
              <option value="female">Female</option>
            </Field>
          </label>
        </div>
        <div className="form-group d-flex-50">
          <label>
            <span>Street Address</span>
            <Field
              type="text"
              name="streetAddress"
              placeholder="1 Main Street"
              value={formValues.streetAddress}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group d-flex-50">
          <label>
            <span>Apt, etc. (Optional)</span>
            <Field
              type="text"
              name="apt"
              value={formValues.apt}
              placeholder="Female"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group d-flex-50">
          <label>
            <span>City</span>
            <Field
              type="text"
              value={formValues.city}
              name="city"
              placeholder="Brooklyn"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group d-flex-50">
          <label>
            <span>State</span>
            <Field
              type="text"
              value={formValues.state}
              name="state"
              placeholder="New York"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group d-flex-50">
          <label>
            <span>Zip Code</span>
            <Field
              type="number"
              value={formValues.zipCode}
              name="zipCode"
              placeholder="Zip Code"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className="btn-wrapper-form">
        <a href="#" onClick={handleBack} className="btn-back">
          Back
        </a>
        <a href="#" className="btn-next" onClick={handleSubmit}>
          Save
        </a>
      </div>
    </>
  );
}
