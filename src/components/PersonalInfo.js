import React from "react";

const PersonalInfo = (props) => {
  const { values, setValues } = props;

  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="First Name..."
        value={values.firstName}
        onChange={(event) =>
          setValues({ ...values, firstName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last Name..."
        value={values.lastName}
        onChange={(event) =>
          setValues({ ...values, lastName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="UserName..."
        value={values.userName}
        onChange={(event) =>
          setValues({ ...values, userName: event.target.value })
        }
      />
    </div>
  );
};

export default PersonalInfo;
