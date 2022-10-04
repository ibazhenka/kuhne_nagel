import React, { AnchorHTMLAttributes, ReactNode } from 'react';

export function Button({ children, ...props }: {children: ReactNode} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={props.href}
      target={props.target}
      className="Button"
      type="button"
    >{children}
    </a>
  );
}
