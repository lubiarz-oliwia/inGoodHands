import React from "react";

const DropDownList = ({ data, ...others }) => (
  <>
    <select {...others}>
      {data.map((value, index) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  </>
);

export default DropDownList;
