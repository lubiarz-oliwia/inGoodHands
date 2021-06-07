import React from "react";

const RadioList = ({ data, ...others }) => (
  <>
    <div {...others}>
      {data.map((value, index) => (
        <>
        <input
            type="radio"
            value={value}
            name="onlyOneOption"
        />
        <label
            key={index}
        >
            {value}
        </label>
        </>
      ))}
    </div>
  </>
);

export default RadioList;
