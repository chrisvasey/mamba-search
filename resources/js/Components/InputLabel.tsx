import React, { PropsWithChildren } from 'react';

interface Props {
  value?: string;
  htmlFor?: string;
  className?: string;
}

export default function InputLabel({
  value,
  htmlFor,
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <label
      className="block text-sm font-medium leading-6 text-white"
      htmlFor={htmlFor}
    >
      {value || children}
    </label>
  );
}
