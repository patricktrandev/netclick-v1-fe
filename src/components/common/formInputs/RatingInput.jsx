import React from "react";

const RatingInput = ({ onChange, name }) => {
  return (
    <div>
      <select className="rounded border" name={name} onChange={onChange}>
        <option>All</option>
        <option>0-49</option>
        <option>50-69</option>
        <option>70-100</option>
      </select>
    </div>
  );
};

export default RatingInput;
