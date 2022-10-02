import React from 'react';

export function RadioButton({ label }: {label: string}) {
  return (
    <label className="RadioButton-label">
      <input type="radio" className="RadioButton" />
      {label}
    </label>
  );
}
