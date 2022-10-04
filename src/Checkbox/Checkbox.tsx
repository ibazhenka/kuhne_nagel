import React from 'react';

export function Checkbox({ label, checked, onChange }: {label: string, checked: boolean, onChange: ()=>void }) {
  return (
    <label className="Checkbox-label">
      <input type="checkbox" className="Checkbox" value={label} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
