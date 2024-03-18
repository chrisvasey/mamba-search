import { Link } from '@inertiajs/react';
import React from 'react';
import useImage from '@/Hooks/useImage';

export default function AuthenticationCardLogo() {
  const mambaLogo = useImage('mamba-logo-white.svg');
  return (
    <Link href="/">
      <img
        className="h-auto w-full max-w-[280px] mx-auto block"
        src={mambaLogo}
      />
    </Link>
  );
}
