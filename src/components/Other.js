import React from "react";

const Other = (props) => {
  const { values, setValues } = props;
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality..."
        value={values.nationality}
        onChange={(event) =>
          setValues({ ...values, nationality: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Other..."
        value={values.other}
        onChange={(event) =>
          setValues({ ...values, other: event.target.value })
        }
      />
    </div>
  );
};

export default Other;
