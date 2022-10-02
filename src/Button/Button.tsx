import React, { ReactNode } from 'react';

export function Button({ children }: {children: ReactNode}) {
  return (
    <button
      className="Button"
      type="button"
    >{children}
    </button>
  );
}
