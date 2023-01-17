import React, { useState } from "react";
import Other from "./Other";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";

const initialValue = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  userName: "",
  nationality: "",
  other: "",
};

const Form = () => {
  const [formPage, setFormPage] = useState(0);
  const [values, setValues] = useState(initialValue);

  const formTitles = ["Sign Up", "Personal Info", "Other"];

  const pageDisplay = () => {
    if (formPage === 0) {
      return <SignUpInfo values={values} setValues={setValues} />;
    } else if (formPage === 1) {
      return <PersonalInfo values={values} setValues={setValues} />;
    } else {
      return <Other values={values} setValues={setValues} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width: formPage === 0 ? "33.3%" : formPage === 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{formTitles[formPage]}</h1>
        </div>
        <div className="body">{pageDisplay()}</div>
        <div className="footer">
          <button
            disabled={formPage === 0}
            onClick={() => {
              setFormPage((state) => state - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (formPage === formTitles.length - 1) {
                alert("Form Submited");
              } else {
                setFormPage((state) => state + 1);
              }
            }}
          >
            {formPage === formTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
