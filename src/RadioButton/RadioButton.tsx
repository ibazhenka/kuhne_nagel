import React from 'react';

export function RadioButton({ label, checked }: {label: string, checked?: boolean}) {
  return (
    <label className="RadioButton-label">
      <input name="group" type="radio" className="RadioButton" value={label} checked={checked} />
      {label}
    </label>
  );
}
