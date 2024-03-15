import { useForm, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@/Components/AuthenticationCard';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function ConfirmPassword() {
  const route = useRoute();
  const form = useForm({
    password: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('password.confirm'), {
      onFinish: () => form.reset(),
    });
  }

  return (
    <AuthenticationCard>
      <Head title="Secure Area" />

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="my-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Confirm Password
        </h2>
      </div>

      <div className="mb-4 text-sm text-white dark:text-white">
        This is a secure area of the application. Please confirm your password
        before continuing.
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <InputLabel htmlFor="password">Password</InputLabel>
            <div className="mt-2">
              <TextInput
                id="password"
                type="password"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                value={form.data.password}
                onChange={e => form.setData('password', e.currentTarget.value)}
                required
                autoComplete="current-password"
                autoFocus
              />
              <InputError className="mt-2" message={form.errors.password} />
            </div>
          </div>

          <div>
            <PrimaryButton
              className={classNames('ml-4', { 'opacity-25': form.processing })}
              disabled={form.processing}
            >
              Confirm
            </PrimaryButton>
          </div>
        </form>
      </div>
    </AuthenticationCard>
  );
}
