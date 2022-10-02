import React from 'react';

export function Checkbox({ label }: {label: string}) {
  return (
    <label className="Checkbox-label">
      <input type="checkbox" className="Checkbox" />
      {label}
    </label>
  );
}
