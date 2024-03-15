import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function PrimaryButton({
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      {...props}
      className={classNames(
        'inline-flex items-center px-4 py-2 bg-green dark:bg-green border border-transparent rounded-md font-semibold text-xs text-white dark:text-white uppercase tracking-widest hover:bg-green dark:hover:bg-green focus:bg-green dark:focus:bg-green active:bg-green dark:active:bg-green focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 dark:focus:ring-offset-green transition ease-in-out duration-150',
        props.className,
      )}
    >
      {children}
    </button>
  );
}
