import { useForm, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import AuthenticationCard from '@/Components/AuthenticationCard';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

interface Props {
  status: string;
}

export default function ForgotPassword({ status }: Props) {
  const route = useRoute();
  const form = useForm({
    email: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post(route('password.email'));
  }

  return (
    <AuthenticationCard>
      <Head title="Forgot Password" />

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="my-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Forgot your password?
        </h2>
      </div>

      <div className="mb-4 text-sm text-white dark:text-white">
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
      </div>

      {status && (
        <div className="mb-4 font-medium text-sm text-green dark:text-green">
          {status}
        </div>
      )}
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <InputLabel htmlFor="email">Email</InputLabel>
            <div className="mt-2">
              <TextInput
                id="email"
                type="email"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                value={form.data.email}
                onChange={e => form.setData('email', e.currentTarget.value)}
                required
                autoFocus
              />
              <InputError className="mt-2" message={form.errors.email} />
            </div>
          </div>

          <div>
            <PrimaryButton
              className={classNames({ 'opacity-25': form.processing })}
              disabled={form.processing}
            >
              Email Password Reset Link
            </PrimaryButton>
          </div>
        </form>
      </div>
    </AuthenticationCard>
  );
}
