import React from "react";

const Checkbox = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      theme
    </label>
  );
};

export default Checkbox;
