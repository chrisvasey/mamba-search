import classNames from 'classnames';
import React from 'react';

export default function Checkbox(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) {
  return (
    <input
      type="checkbox"
      {...props}
      className={classNames(
        'rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-green shadow-sm focus:ring-green dark:focus:ring-green dark:focus:ring-offset-grey-900',
        props.className,
      )}
    />
  );
}
