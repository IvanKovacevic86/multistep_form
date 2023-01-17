import React from "react";

const SignUpInfo = (props) => {
  const { values, setValues } = props;

  return (
    <div className="sign-up-container">
      <input
        type="email"
        placeholder="Email..."
        value={values.email}
        onChange={(event) =>
          setValues({ ...values, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Password..."
        value={values.password}
        onChange={(event) =>
          setValues({ ...values, password: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Confirm Password..."
        value={values.confirmPassword}
        onChange={(event) =>
          setValues({ ...values, confirmPassword: event.target.value })
        }
      />
    </div>
  );
};

export default SignUpInfo;
