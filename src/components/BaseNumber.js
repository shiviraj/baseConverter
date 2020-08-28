import React from 'react';

export default ({ base, value, onChange }) => {
  return (
    <div className="base">
      <label>Base {base}: </label>
      <input
        type="text"
        value={value.toString(base)}
        onChange={({ target }) => onChange(target.value, base)}
      />
    </div>
  );
};
