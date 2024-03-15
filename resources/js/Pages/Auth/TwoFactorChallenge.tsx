import { useForm, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@/Components/AuthenticationCard';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function TwoFactorChallenge() {
  const route = useRoute();
  const [recovery, setRecovery] = useState(false);
  const form = useForm({
    code: '',
    recovery_code: '',
  });
  const recoveryCodeRef = useRef<HTMLInputElement>(null);
  const codeRef = useRef<HTMLInputElement>(null);

  function toggleRecovery(e: React.FormEvent) {
    e.preventDefault();
    const isRecovery = !recovery;
    setRecovery(isRecovery);

    setTimeout(() => {
      if (isRecovery) {
        recoveryCodeRef.current?.focus();
        form.setData('code', '');
      } else {
        codeRef.current?.focus();
        form.setData('recovery_code', '');
      }
    }, 100);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('two-factor.login'));
  }

  return (
    <AuthenticationCard>
      <Head title="Two-Factor Confirmation" />

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="my-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Account Authentication
        </h2>
      </div>

      <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        {recovery
          ? 'Please confirm access to your account by entering one of your emergency recovery codes.'
          : 'Please confirm access to your account by entering the authentication code provided by your authenticator application.'}
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmit}>
          {recovery ? (
            <div>
              <InputLabel htmlFor="recovery_code">Recovery Code</InputLabel>
              <div className="mt-2">
                <TextInput
                  id="recovery_code"
                  type="text"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                  value={form.data.recovery_code}
                  onChange={e =>
                    form.setData('recovery_code', e.currentTarget.value)
                  }
                  ref={recoveryCodeRef}
                  autoComplete="one-time-code"
                />
                <InputError
                  className="mt-2"
                  message={form.errors.recovery_code}
                />
              </div>
            </div>
          ) : (
            <div>
              <InputLabel htmlFor="code">Code</InputLabel>
              <div className="mt-2">
                <TextInput
                  id="code"
                  type="text"
                  inputMode="numeric"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                  value={form.data.code}
                  onChange={e => form.setData('code', e.currentTarget.value)}
                  autoFocus
                  autoComplete="one-time-code"
                  ref={codeRef}
                />
                <InputError className="mt-2" message={form.errors.code} />
              </div>
            </div>
          )}

          <div className="flex items-center justify-end mt-2">
            <button
              type="button"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer"
              onClick={toggleRecovery}
            >
              {recovery ? 'Use an authentication code' : 'Use a recovery code'}
            </button>

            <PrimaryButton
              className={classNames('ml-4', { 'opacity-25': form.processing })}
              disabled={form.processing}
            >
              Log in
            </PrimaryButton>
          </div>
        </form>
      </div>
    </AuthenticationCard>
  );
}
