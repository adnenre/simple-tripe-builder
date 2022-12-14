import React, { useState } from "react";
import { ISelectProps } from "./Types";

const TSelect = ({ currrentTripId, onSelectAction }: ISelectProps) => {
  const options = [
    { value: "", text: "Actions" },
    { value: "Delete", text: "Delete" },
  ];
  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
    if (currrentTripId) onSelectAction(currrentTripId);
  };

  return (
    <select
      className="cursor-pointer p-1 rounded"
      value={selected}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default TSelect;
